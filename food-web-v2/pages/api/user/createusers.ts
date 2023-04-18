import { NextApiRequest, NextApiResponse } from 'next'
import { ErrorResponse, SuccessResponse } from '@/utils/customeresponses';
import { User } from '@prisma/client'
import prisma from '@/lib/prismaclient';
// import { UserModel } from '../../../models/User/user.model'
// import dbConnect from '../../../lib/dbconnect'
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { password, email, role } = req.body as {
            email: string
            password: string,
            role: User["role"]
        }
        // await dbConnect()
        // const alreadyExist = await UserModel.findOne({ email: username })
        const alreadyExist = await prisma.user.findFirst({
            where: {
                email: email
            }
        })
        if (alreadyExist) {
            return ErrorResponse({
                msg: "User Already Exists",
                res: res,
                statusCode: 400
            })
        }
        // await UserModel.create({
        //     email: username,
        //     name: username,
        //     password: password,
        //     role: type,
        // })
        await prisma.user.create({
            data: {
                email: email,
                password: password,
                role: role
            }
        })
        return SuccessResponse({
            msg: "User Created Successfully",
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

export default handler;