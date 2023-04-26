// import { Categories } from '@prisma/client';
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

        // find if relationship exisit
        const categoryData = await prisma.categories.findFirst({
            where: {
                id: categoryID
            }
        })
        
        // find if contractor tobe added
        const contractorExisist = await prisma.contractor.findFirst({
            where: {
                id: contractorID
            }
        })         
        
        if(categoryData?.contractorId === null) {
            await prisma.categories.update({
                where: {
                    id: categoryID
                },
                data: {
                    contractorId: contractorID,
                    contractorName: contractorExisist?.name
                }
            })
            return SuccessResponse({
                msg: "updated successfully",
                res,
                statusCode: 200
            })
        } 
        else { 
            if(contractorExisist.item === 'cleaner' || contractorExisist.item === 'helper' || contractorExisist.item === 'head') {
                await prisma.categories.create({
                    data: {
                        contractorId: contractorID,
                        menueId: categoryData?.menueId,
                        itemName: contractorExisist?.item,
                        contractorName: contractorExisist.name,
                        otherCategoryId: categoryData?.id,
                        comment: ''
                    }
                }) 
                return SuccessResponse({
                    msg: "updated successfully",
                    res,
                    statusCode: 200
                }) 
            } else {
                await prisma.categories.create({
                    data: {
                        contractorId: contractorID,
                        menueId: categoryData?.menueId,
                        itemName: categoryData?.itemName,
                        contractorName: contractorExisist?.name,
                        otherCategoryId: categoryData?.id,
                        comment: ''
                    }
                }) 
                return SuccessResponse({
                    msg: "updated successfully",
                    res,
                    statusCode: 200
                })         
            }            
        }
        
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