import prisma from "@/lib/prismaclient";
import { IGetMenueApi } from "@/providers/apis";
import { ErrorResponse, SuccessResponse } from "@/utils/customeresponses";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { search, endDate, startDate, departureDate, contractorName } = req.body as IGetMenueApi
        let searchQuery = {
            AND: [],
            OR: []
        } as {
            AND: any[],
            OR: any[]
        }
        if (search) {
            searchQuery.OR.push(
                {
                    bookingId: {
                        startsWith: search,
                        mode: 'insensitive',
                    }
                },
                {
                    name: {
                        startsWith: search,
                        mode: 'insensitive',
                    }
                },
                {
                    mobile: {
                        startsWith: search,
                        mode: 'insensitive',
                    }
                },
                {
                    mobile: {
                        startsWith: search,
                        mode: 'insensitive',
                    }
                },
                {
                    headMobileNumber: {
                        startsWith: search,
                        mode: 'insensitive',
                    }
                },
                {
                    bookerMobileNumber: {
                        startsWith: search,
                        mode: 'insensitive',
                    }
                }
            )
        }
        if (endDate && startDate) {
            searchQuery.AND.push(
                {
                    functionDate: {
                        gte: new Date(startDate)
                    }
                },
                {
                    functionDate: {
                        lte: new Date(endDate)
                    }
                }
            )
        }
        if (departureDate) {
            searchQuery.AND.push(
                {
                    departureDate: new Date(departureDate)
                },
            )
        }
        if (contractorName) {
            searchQuery.AND.push(
                {
                    Categories: {
                        every: {
                            contractor: {
                                name: {
                                    startsWith: contractorName
                                }
                            }
                        }
                    }
                }
            )
        }
        // remove the arrays if they are empty
        if (searchQuery?.AND?.length === 0) {
            // @ts-ignore
            delete searchQuery.AND
        }
        if (searchQuery?.OR?.length === 0) {
            // @ts-ignore
            delete searchQuery.OR
        }
        const menues = await prisma.menue.findMany({
            where: searchQuery,
            include: {
                Categories: {
                    include: {
                        contractor: {
                        },
                    }
                }
            }
        })
        return SuccessResponse({
            msg: { menues },
            res,
            statusCode: 200
        })
    } catch (error: any) {
        console.log(error.message);

        return ErrorResponse({            
            msg: error.message,
            res,
            statusCode: 500
        })
    }
}
export default handler;