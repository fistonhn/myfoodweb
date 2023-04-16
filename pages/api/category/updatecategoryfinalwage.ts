import prisma from "@/lib/prismaclient"
import { IUpdateCategoryFinalWage } from "@/providers/apis"
import { ErrorResponse, SuccessResponse } from "@/utils/customeresponses"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { finalWage, categoryId } = req.body as IUpdateCategoryFinalWage
        await prisma.categories.update({
            where: {
                id: categoryId
            },
            data: {
                finalWage: finalWage
            }
        })
        return SuccessResponse({
            msg: "Category Updated Successfully.",
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
export default handler