import prisma from "@/lib/prismaclient";
import { IDeleteMenueApi } from "@/providers/apis";
import { ErrorResponse, SuccessResponse } from "@/utils/customeresponses";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        let { selId }  = req.body as IDeleteMenueApi  
        
        await prisma.categories.deleteMany({
            where: {
                menueId: selId.id,
            },
          })
                
        await prisma.menue.delete({
            where: {
                id: selId.id,
              },
        })
        
        return SuccessResponse({
            msg: 'deleted',
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