import prisma from "@/lib/prismaclient";
import { UpdateContractorDTO } from "@/providers/apis";
import { ErrorResponse, SuccessResponse } from "@/utils/customeresponses";
import { NextApiRequest, NextApiResponse } from "next";


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { data } = req.body as UpdateContractorDTO
        const { id, address, age, area, group, identitynumber, item, name, phone, wage, status, reActiveDate

        } = data
     await prisma.contractor.update({
            where: { id: id },
            data: {
                address, age, area, group, identitynumber, item, name, phone, wage, status, reActiveDate
            }
        })
        
        return SuccessResponse({
            msg: "updated",
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