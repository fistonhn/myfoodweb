import prisma from "@/lib/prismaclient";
import { ErrorResponse, SuccessResponse } from "@/utils/customeresponses";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { email } = req.body as {
            email: any
        }

        // script to update whole users table this
        // await prisma.user.updateMany({
        //     data: {
        //         expiryDate:  new Date()
        //     },
        //   })

        const user = await prisma.user.findFirst({
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
