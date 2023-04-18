import prisma from "@/lib/prismaclient";
import { IUpdateOperationMenue } from "@/providers/apis/operation";
import { ErrorResponse, SuccessResponse } from "@/utils/customeresponses";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { data } = req.body as IUpdateOperationMenue
        const { id, ...values } = data
        await prisma.menue.update({
            where: {
                id: id
            },
            data: {
                ...values
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