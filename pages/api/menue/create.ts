import { CLEANER_CONST, HEAD_CONST } from "@/constants/globalconstants";
import prisma from "@/lib/prismaclient";
import { ICreateMenueApi } from "@/providers/apis";
import { ErrorResponse, SuccessResponse } from "@/utils/customeresponses";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        let { formdata, selectedItems } = req.body as ICreateMenueApi

        const { id, ...restFormData } = formdata        

        const _menue = await prisma.menue.create({
            data: restFormData
        })

        for (let item of selectedItems) {
            let currentDate = new Date();
            const availableContractors = await prisma.contractor.findMany({
                where: {
                    AND: [
                        {
                            OR: [
                                {
                                    Categories: {
                                        none: {}
                                    }
                                },
                                {
                                    Categories: {
                                        some: {
                                            menue: {
                                                functionDate: {
                                                    not: _menue.functionDate
                                                }
                                            }
                                        }
                                    }
                                },

                            ]
                        },
                        {
                            item: item.item
                        }
                    ]
                },
                take: Number(item.counter) ? Number(item.counter) : 1
            })
            // loop for the number of counter...
            {
                const counterArray = Array(Number(item.counter) ? Number(item.counter) : 1).fill(0)
                for (let c = 0; c < counterArray.length; c++) {
                    if (c < availableContractors.length) {
                        console.log("inside my if", availableContractors[c])
                        await prisma.categories.create({
                            data: {
                                contractorId: availableContractors[c].id,
                                menueId: _menue.id,
                                itemName: item.item,
                                comment: item.comment,
                                contractorName: availableContractors[c]?.name
                            }
                        })
                        await prisma.contractor.update({
                            where: {
                                id: availableContractors[c].id,
                            },
                            data: {
                                assignTillDate: _menue.functionDate
                            }
                        })

                    } else {
                        await prisma.categories.create({
                            data: {
                                menueId: _menue.id,
                                itemName: item.item,
                                comment: item.comment,
                                contractorName: ''
                            }
                        })
                    }
                }
            }
        }

        // Assign Contractors that have item=="Headname"|"HEADNAME" 
        const findHeadName = await prisma.contractor.findFirst({
            where: {
                AND: [
                    {
                        OR: [
                            {
                                Categories: {
                                    none: {}
                                }
                            },
                            {
                                Categories: {
                                    some: {
                                        menue: {
                                            functionDate: {
                                                not: _menue.functionDate
                                            }
                                        }
                                    }
                                }
                            },

                        ]
                    },
                    {
                        item: {
                            contains: HEAD_CONST,
                            mode: "insensitive"
                        }
                    }
                ]
            },
        })
        if (findHeadName) {
            await prisma.categories.create({
                data: {
                    contractorId: findHeadName.id,
                    menueId: _menue.id,
                    itemName: findHeadName.item,
                    comment: "",
                    contractorName: findHeadName.name
                }
            })
        }
        // Assign Contractors that have item=="Headname"|"HEADNAME" 


        // Assign contractors from cleaner in the menue ----> cleaner="Hadi,Madi,"
        let cleaners = [] as string[]
        if (_menue.cleaner.includes(",")) {
            cleaners = _menue.cleaner.split(",")
        } else {
            cleaners.push(_menue.cleaner)
        }
        for (let i = 0; i < cleaners.length; i++) {
            if (cleaners[i]) {
                const findCleanerContractor = await prisma.contractor.findFirst({
                    where: {
                        AND: [
                            {
                                OR: [
                                    {
                                        Categories: {
                                            none: {}
                                        }
                                    },
                                    {
                                        Categories: {
                                            some: {
                                                menue: {
                                                    functionDate: {
                                                        not: _menue.functionDate
                                                    }
                                                }
                                            }
                                        }
                                    },

                                ]
                            },
                            {
                                item: {
                                    contains: CLEANER_CONST,
                                    mode: "insensitive"
                                },
                                name: {
                                    contains: cleaners[i],
                                    mode: "insensitive"
                                }
                            }
                        ]
                    },
                })
                if (findCleanerContractor) {
                    await prisma.categories.create({
                        data: {
                            contractorId: findCleanerContractor.id,
                            menueId: _menue.id,
                            itemName: findCleanerContractor.item,
                            comment: "",
                            contractorName: findCleanerContractor?.name
                        }
                    })
                }
            }
        }
        // Assign contractors from cleaner in the menue ----> cleaner="Hadi,Madi,"
        return SuccessResponse({
            msg: { id: _menue.id },
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