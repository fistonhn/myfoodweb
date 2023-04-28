// import { Categories } from '@prisma/client';
import prisma from "@/lib/prismaclient";
import { ErrorResponse, SuccessResponse } from "@/utils/customeresponses";
import { NextApiRequest, NextApiResponse } from "next";
export interface UpdateContractorBySelectedOneDTO {
    contractorID: string
    categoryID: string
    workAssigned: string
}
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { categoryID, contractorID, workAssigned } = req.body as UpdateContractorBySelectedOneDTO

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
            
            if(workAssigned === 'cleaner' || workAssigned === 'helper' || workAssigned === 'head') {
                await prisma.categories.create({
                    data: {
                        contractorId: contractorID,
                        menueId: categoryData?.menueId,
                        itemName: workAssigned,
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

                if(contractorExisist?.item === 'cleaner' || contractorExisist?.item === 'helper' || contractorExisist?.item === 'head'){

                    return ErrorResponse({
                        msg: 'You can not add cleaner or helper or head to contractor as MP',
                        res,
                        statusCode: 500
                    })
                    
                } else {
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
            } 
        } 
        else { 
            if(workAssigned !== 'contractor') {                             
                await prisma.categories.create({
                    data: {
                        contractorId: contractorID,
                        menueId: categoryData?.menueId,
                        itemName: workAssigned,
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

                if(contractorExisist?.item === 'cleaner' || contractorExisist?.item === 'helper' || contractorExisist?.item === 'head'){
                    return ErrorResponse({
                        msg: 'You can not add cleaner or helper or head to contractor as MP',
                        res,
                        statusCode: 500
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