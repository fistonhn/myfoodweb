import prisma from "@/lib/prismaclient"
import { ErrorResponse, SuccessResponse } from "@/utils/customeresponses"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { id } = req.body as { id: string }
        const menue = await prisma.menue.findUnique({
            where: {
                id: id
            },
            include: {
                Categories: {
                    include: {
                        contractor: {
                        }
                    }
                }
            }
        })
        return SuccessResponse({
            msg: { menue },
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