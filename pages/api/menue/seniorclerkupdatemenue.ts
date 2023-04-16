import prisma from "@/lib/prismaclient";
import { IUpdateSeniorClerkMenue } from "@/providers/apis/order";
import { ErrorResponse, SuccessResponse } from "@/utils/customeresponses";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { data } = req.body as IUpdateSeniorClerkMenue
        const { id, ...rest } = data


        const menue = await prisma.menue.update({
            where: {
                id: id
            },
            data: {
                ...rest
            },
            include: {
                Categories: {
                    include: {
                        contractor: {}
                    }
                }
            }
        })
        for (let c of menue.Categories) {
            if (c.contractorId) {
                await prisma.contractor.update({
                    where: {
                        id: c.contractorId
                    },
                    data: {
                        assignTillDate: menue.functionDate
                    }
                })
            }
        }
        return SuccessResponse({
            msg: "okay",
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