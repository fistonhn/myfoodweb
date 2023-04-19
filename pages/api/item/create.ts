import prisma from "@/lib/prismaclient";
import { ICreateItemApi } from "@/providers/apis";
import { ErrorResponse, SuccessResponse } from "@/utils/customeresponses";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        let newItem = req.body as ICreateItemApi

        const itemName = newItem        

        const _item = await prisma.item.create({
            data: itemName
        })        

        return SuccessResponse({
            msg: { id: _item.id },
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