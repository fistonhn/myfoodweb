// import dbConnect from '@/lib/dbconnect'
// import { UserModel } from '@/models/User/user.model'
import { NextApiResponse, NextApiRequest } from 'next'
import { ErrorResponse, SuccessResponse } from '@/utils/customeresponses'
import prisma from '@/lib/prismaclient'
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        // await dbConnect()
        // "wagers"
        // const users = await UserModel.find({ $or: [{ role: "wagers" }, { role: "bookers" }] })
        const users = await prisma.user.findMany({
            include: {
                role: {}
            }
            // where: {
            //     NOT: [{
            //         role: "admin"
            //     }]
            // }
        })
        return SuccessResponse({
            msg: { users },
            res: res,
            statusCode: 200
        })
    } catch (error: any) {
        return ErrorResponse({
            msg: error.message,
            res: res,
            statusCode: 500
        })
    }
}

export default handler