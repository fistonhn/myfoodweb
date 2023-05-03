import prisma from "@/lib/prismaclient";
import { ErrorResponse, SuccessResponse } from "@/utils/customeresponses";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { email } = req.body as {
            email: any
        }

        const user = await prisma.user.findFirst({
            include: {
                role: {}
            },
            where: { email: email },
        })
        
        return SuccessResponse({
            msg: { user },
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
