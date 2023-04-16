import prisma from "@/lib/prismaclient"
import { ISeniorClerkSearchMenu } from "@/providers/apis"
import { ErrorResponse, SuccessResponse } from "@/utils/customeresponses"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { search } = req.body as ISeniorClerkSearchMenu
        const menues = await prisma.menue.findMany({
            where: {
                OR: [
                    {
                        bookingId: {
                            startsWith: search,
                            mode: "insensitive"
                        }
                    },
                    {
                        mobile: {
                            startsWith: search,
                            mode: "insensitive"
                        }
                    },
                    {
                        name: {
                            startsWith: search,
                            mode: "insensitive"
                        }
                    },
                ]
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