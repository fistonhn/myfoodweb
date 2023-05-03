// import dbConnect from "@/lib/dbconnect"
import prisma from "@/lib/prismaclient"
// import { UserModel } from "@/models/User/user.model"
import { ErrorResponse, SuccessResponse } from "@/utils/customeresponses"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { id } = req.body as {
            id: string
        }
        // await dbConnect()
        // await UserModel.findOneAndDelete({
        //     _id: _id
        // })
        await prisma.user.delete({
            where: {
                id: id
            }
        })

        await prisma.roles.deleteMany({
            where: {
                userId: id,
            }
        })
        
        return SuccessResponse({
            res,
            msg: "User Deleted Successfully.",
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