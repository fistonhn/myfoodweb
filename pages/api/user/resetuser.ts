import prisma from "@/lib/prismaclient";
import { ErrorResponse, SuccessResponse } from "@/utils/customeresponses";
import { NextApiRequest, NextApiResponse } from "next";
import { User } from '@prisma/client'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { email, password, role, id } = req.body as {
            email: string,
            password: string
            role: User["role"],
            id: string
        }
        const isExists = await prisma.user.findUnique({
            where: {
                id: id
            }
        })
        if (!isExists) {
            return ErrorResponse({
                msg: "User does not found.",
                res: res,
                statusCode: 400
            })
        }
        await prisma.user.update({
            where: {
                id: id
            },
            data: {
                email: email,
                password: password,
                // role: role
            }
        })

        if(role.length > 0) {
            await prisma.roles.deleteMany({
                where: {
                    userId: id,
                }
            })
            
            role?.forEach( async(rl: any)=> {                
                await prisma.roles.create({
                    data: {
                        userId: id,
                        role: rl
                    }
                })
            })
        }
        
        return SuccessResponse({
            msg: "User Updated Successfully.",
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