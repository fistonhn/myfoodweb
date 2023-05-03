import prisma from "@/lib/prismaclient";
import { IUpdateSeniorClerkMenue } from "@/providers/apis/order";
import { ErrorResponse, SuccessResponse } from "@/utils/customeresponses";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { data } = req.body as IUpdateSeniorClerkMenue
        const { bookingId } = data

        const menue = await prisma.menue.update({
            where: {
                id: bookingId
            },
            data: {
                cancel: true
            },
        })

        return SuccessResponse({
            msg: "okay",
            res,
            statusCode: 200
        })
    } catch (error: any) {
        console.log(error);
        return ErrorResponse({
            msg: error.message,
            res,
            statusCode: 500
        })
    }
}
export default handler;