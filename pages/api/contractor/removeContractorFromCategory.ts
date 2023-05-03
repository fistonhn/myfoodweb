import prisma from "@/lib/prismaclient";
import { removeContractorFromCategoryDTO } from "@/providers/apis";
import { ErrorResponse, SuccessResponse } from "@/utils/customeresponses";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { categoryID } = req.body as removeContractorFromCategoryDTO
        const category = await prisma.categories.findUnique({
            where: {
                id: categoryID
            }
        })
        if (!category) {
            return ErrorResponse({
                msg: "Category not exists",
                res,
                statusCode: 400
            })
        }
        await prisma.categories.update({
            where: {
                id: categoryID
            },
            data: {
                contractorId: {
                    unset: true
                }
            }
        })
        return SuccessResponse({
            msg: "remove successfully",
            res,
            statusCode: 200
        })
    } catch (error: any) {
        return ErrorResponse({
            msg: error.message,
            res, statusCode: 500
        })
    }
}

export default handler;