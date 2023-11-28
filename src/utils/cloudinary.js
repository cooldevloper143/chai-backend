import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        // upload the file on CLOUDINARY
        const response = await cloudinary.uploader.upload(localFilePath, {
            public_id: "my-public-id",
            overwrite: true,
            invalidate: true,
            resource_type: "auto",
            type: "upload",
            folder: "my-folder",
            use_filename: true,
            unique_filename: false,
            invalidate: true,
            overwrite: true,
            quality_analysis: 1,
            notification_url: "https://mysite.example.com/notify_endpoint",
            proxy: "http://user:pass@proxy.example.com:1234",
            discard_original_filename: false,
            backup: false,
            exif: true,
            faces: true,
            image_metadata: true,
            colors: true,
            image_quality: 80,
            eager: [
                {
                    width: 200,
                    height: 100,
                    crop: "scale",
                },
                {
                    width: 200,
                    height: 100,
                    crop: "scale",
                    format: "png",
                    radius: 20,
                    effect: "sepia",
                },
            ],
            headers: [
                {
                    "User-Agent": "Chrome",
                },
            ],
        });
        // file has been uploaded on CLOUDINARY

        console.log("File has been uploaded on CLOUDINARY", response.url);
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath);// remove the locally saved tempoorry file as the upload operation got failed 
        return null;
     }
};

export default uploadOnCloudinary;



