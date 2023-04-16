import prisma from "@/lib/prismaclient";
import { GetAllFreeContractorsAPIDTO } from "@/providers/apis";
import { ErrorResponse, SuccessResponse } from "@/utils/customeresponses";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { categoryID } = req.body as GetAllFreeContractorsAPIDTO
        const cateogory = await prisma.categories.findUnique({
            where: { id: categoryID },
            include: { menue: {} }
        })
        if (!cateogory) {
            return ErrorResponse({
                msg: "Category not exists",
                res,
                statusCode: 400
            })
        }
        const contractors = await prisma.contractor.findMany({
            where: {
                AND: [
                    {
                        item: cateogory.itemName
                    },
                    {
                        OR: [
                            {
                                Categories: {
                                    none: {}
                                }
                            },
                            {
                                Categories: {
                                    every: {
                                        menue: {
                                            functionDate: {
                                                not: cateogory.menue.functionDate
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    }
                ]
            }
        })
        return SuccessResponse({
            msg: { contractors },
            res,
            statusCode: 200
        })
    } catch (error: any) {
        return ErrorResponse({
            msg: error.message,
            res,
            statusCode: 500
        })
    }
}

export default handler;