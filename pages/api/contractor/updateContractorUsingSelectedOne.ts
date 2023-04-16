import prisma from "@/lib/prismaclient";
import { ErrorResponse, SuccessResponse } from "@/utils/customeresponses";
import { NextApiRequest, NextApiResponse } from "next";
export interface UpdateContractorBySelectedOneDTO {
    contractorID: string
    categoryID: string
}
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { categoryID, contractorID } = req.body as UpdateContractorBySelectedOneDTO
        await prisma.categories.update({
            where: {
                id: categoryID
            },
            data: {
                contractorId: contractorID
            }
        })
        return SuccessResponse({
            msg: "updated successfully",
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