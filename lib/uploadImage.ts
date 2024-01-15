import { storage } from "@/appwrite";
import { ID } from "appwrite";

const uploadImage = async (file: File) => {
    if (!file) return;

    const fileUploaded = await storage.createFile(
        "647f4b4b47833d9841bc",
        ID.unique(),
        file
    );
    return fileUploaded;
};

export default uploadImage;