import prisma from "@/lib/prismaclient"
import { ISearchContractor } from "@/providers/apis/report"
import { ErrorResponse, SuccessResponse } from "@/utils/customeresponses"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { search } = req.body as ISearchContractor

        const menues = await prisma.categories.findMany({
            where: {
                contractor: {
                    name: {
                        startsWith: search
                    }
                }
            },
            include: {
                contractor: {},
                menue: {}
            }

        })
        return SuccessResponse({
            msg: { menues },
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
