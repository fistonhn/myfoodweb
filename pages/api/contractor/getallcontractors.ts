// import dbConnect from "@/lib/dbconnect"
// import { ContractorModel } from "@/models/Contractor/contractor.moderl"
import prisma from "@/lib/prismaclient"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {  
        const contractors = await prisma.contractor.findMany({
            include: {
                documents: {},
                Categories: {}
            }
        })        
        return res.status(200).json({ contractors })
    } catch (error: any) {
        return res.status(500).json({ msg: error.message })
    }
}

export default handler