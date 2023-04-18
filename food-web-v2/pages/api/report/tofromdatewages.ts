import prisma from "@/lib/prismaclient";
import { IToalBookings } from "@/providers/apis/report";
import { ErrorResponse, SuccessResponse } from "@/utils/customeresponses";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { enddate, startdate } = req.body as IToalBookings
        const menues = await prisma.menue.findMany({
            where: {
                AND: [
                    {
                        functionDate: {
                            gte: new Date(startdate)
                        }
                    },
                    {
                        functionDate: {
                            lte: new Date(enddate)
                        }
                    }
                ]
            },
            include: {
                Categories: {
                    include: {
                        contractor: {}
                    }
                },
            }
        })
        let totalwages = 0, finalwages = 0
        menues.forEach(m => {
            m.Categories.forEach((c) => {
                if (c.finalWage !== null) {
                    finalwages += Number(c.finalWage)
                }
                if (c.contractor?.wage !== undefined) {
                    totalwages += Number(c.contractor?.wage)
                }
            })
        })
        return SuccessResponse({
            msg: {
                menues,
                totalwages,
                finalwages
            },
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