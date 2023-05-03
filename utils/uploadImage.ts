
import { v2 as cloudinary } from 'cloudinary'
import DatauriParser from 'datauri/parser';
import path from 'path'

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME as string,
    api_key: process.env.API_KEY as string,
    api_secret: process.env.API_SECRET as string
});

export const uploadImage = async (img: any) => {
    const parser = new DatauriParser();
    const base64Image = parser.format(path.extname(img.originalname).toString(), img.buffer);
    if (base64Image.content) {
        const uploadedImageResponse = await cloudinary.uploader.upload(base64Image?.content, { resource_type: "image",folder:"foods-web" });
        return uploadedImageResponse
    }
    return null
}