import prisma from "@/lib/prismaclient"
import { IUpdateCategoryContractor } from "@/providers/apis"
import { ErrorResponse, SuccessResponse } from "@/utils/customeresponses"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { categoryId, contractorid } = req.body as IUpdateCategoryContractor
        const category = await prisma.categories.findUnique({
            where: {
                id: categoryId
            }
        })
        if (!category) {
            return ErrorResponse({
                msg: "Category does not exists",
                res,
                statusCode: 400
            })
        }
        const menue = await prisma.menue.findUnique({
            where: {
                id: category.menueId
            }
        })
        if (!menue) {
            return ErrorResponse({
                msg: "Menue does not exists",
                res,
                statusCode: 400
            })
        }
        let prevDate = new Date()
        prevDate.setDate(prevDate.getDate() - 1)
        if (category.contractorId) {
            await prisma.contractor.update({
                where: {
                    id: category.contractorId
                },
                data: {
                    assignTillDate: new Date(prevDate)
                }
            })
        }
        await prisma.contractor.update({
            where: {
                id: contractorid
            },
            data: {
                assignTillDate: menue.functionDate
            }
        })
        await prisma.categories.update({
            where: {
                id: categoryId
            },
            data: {
                contractorId: contractorid
            }
        })
        return SuccessResponse({
            msg: "contractor updated successfully!",
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