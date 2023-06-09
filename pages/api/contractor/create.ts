// import dbConnect from "@/lib/dbconnect"
// import { ContractorModel } from "@/models/Contractor/contractor.moderl"
import prisma from '@/lib/prismaclient'
import { IUploadContractorApi } from '@/providers/apis'
import { ErrorResponse, SuccessResponse } from '@/utils/customeresponses'
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { contractors } = req.body as IUploadContractorApi
        await prisma.contractor.deleteMany()
        for (const contractor of contractors) {
            await prisma.contractor.create({
                data: contractor
            })
        }
        return SuccessResponse({
            msg: "Contractors Uploaded Successfully.",
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