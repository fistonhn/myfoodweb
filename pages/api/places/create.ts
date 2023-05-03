import prisma from "@/lib/prismaclient";
import { ICreatePlaces } from "@/providers/apis/places";
import { ErrorResponse, SuccessResponse } from "@/utils/customeresponses";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { places } = req.body as ICreatePlaces
        await prisma.places.deleteMany()
        await Promise.all(places.map(async (p) => {
            await prisma.places.create({ data: { name: p.name, value: String(p.value) } })
        }));
        return SuccessResponse({
            msg: "created successfully",
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