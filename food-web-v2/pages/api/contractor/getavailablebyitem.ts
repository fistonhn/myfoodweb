import prisma from "@/lib/prismaclient"
import { IGetAvailableContractorsWithItem } from "@/providers/apis"
import { ErrorResponse, SuccessResponse } from "@/utils/customeresponses"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { item } = req.body as IGetAvailableContractorsWithItem

        const currentDate = new Date()
        const contractors = await prisma.contractor.findMany({
            where: {
                AND: [
                    {
                        item: {
                            startsWith: item
                        },
                    },
                    {
                        assignTillDate: {
                            lt: currentDate
                        }
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