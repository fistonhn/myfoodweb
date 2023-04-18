import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect'
import multer from 'multer'
import { ErrorResponse, SuccessResponse } from '@/utils/customeresponses';
import { uploadImage } from '@/utils/uploadImage';
import { IUploadDoc } from '@/providers/apis';
import prisma from '@/lib/prismaclient';
const storage = multer.memoryStorage();
const upload = multer({ storage });
const handler = nc({
    onNoMatch: (req: NextApiRequest, res: NextApiResponse) => {
        res.status(404).end('Page is not found');
    },
})
    .use(upload.any())
    .post(async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            // @ts-ignore
            const image = req.files.filter((file) => file.fieldname === 'file')[0];
            const imageresponse = await uploadImage(image)
            const { contractorid, name } = req.body as Omit<IUploadDoc, "file">
            if (!imageresponse) {
                return ErrorResponse({
                    msg: "Error, try again later.",
                    res,
                    statusCode: 400
                })
            }
            await prisma.contractorDocs.create({
                data: {
                    name: name,
                    url: imageresponse.secure_url,
                    contractorId: contractorid
                }
            })
            return SuccessResponse({
                msg: "upload successfully",
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
    })


export default handler


export const config = {
    api: {
        bodyParser: false
    }
}