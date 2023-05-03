import prisma from "@/lib/prismaclient"
import { IUpdateWageCategories } from "@/providers/apis"
import { ErrorResponse, SuccessResponse } from "@/utils/customeresponses"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { categories } = req.body as IUpdateWageCategories
        for (let c of categories) {
            const finalWage = ((Number(c.contractor?.wage) * Number(c.placevalue))) + Number(c.plus) - Number(c.minus)
            await prisma.categories.update({
                where: {
                    id: c.id
                },
                data: {
                    finalWage: String(finalWage),
                    minus: c.minus,
                    plus: c.plus,
                    placevalue:c.placevalue
                }
            })
        }
        return SuccessResponse({
            msg: "Updated Successfully",
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