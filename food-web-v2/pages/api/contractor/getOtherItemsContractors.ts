import prisma from "@/lib/prismaclient";
import { GetAllOtherItemsContractorsDTO } from "@/providers/apis";
import { ErrorResponse, SuccessResponse } from "@/utils/customeresponses";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { categoryID } = req.body as GetAllOtherItemsContractorsDTO

        const category = await prisma.categories.findUnique({ where: { id: categoryID }, include: { menue: {} } })
        if (!category) {
            return ErrorResponse({
                msg: "category not exists!",
                res,
                statusCode: 400
            })
        }
        console.log(category)
        const contractors = await prisma.contractor.findMany({
            where: {
                AND: [
                    {
                        item: {
                            not: category.itemName
                        }
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
                                                not: category.menue.functionDate
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