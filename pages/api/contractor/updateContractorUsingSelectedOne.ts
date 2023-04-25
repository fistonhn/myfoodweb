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

        const categoryData = await prisma.categories.findFirst({
            where: {
                id: categoryID
            }
        })        

        if(categoryData?.contractorId === null) {
            await prisma.categories.update({
                where: {
                    id: categoryID
                },
                data: {
                    contractorId: contractorID
                }
            })
        } else {            
            const contractorExisist = await prisma.contractor.findFirst({
                where: {
                    id: contractorID
                }
            })            

            if(contractorExisist.item === 'cleaner' || contractorExisist.item === 'helper' || contractorExisist.item === 'head') {
                
               await prisma.categories.create({
                    data: {
                        contractorId: contractorID,
                        menueId: categoryData?.menueId,
                        itemName: contractorExisist?.item,
                        comment: ''
                    }
                })
                
            } else {
                await prisma.categories.create({
                    data: {
                        contractorId: contractorID,
                        menueId: categoryData?.menueId,
                        itemName: 'contractor',
                        comment: ''
                    }
                })                
            }
        }
        

        
        
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