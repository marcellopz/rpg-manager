import { storage } from "./firebase";
import { UploadResult, getBytes, ref, uploadBytes } from "firebase/storage";

export const getImage = async (path: string) => {
  const storageRef = ref(storage, path);
  return getBytes(storageRef);
};

export const uploadImage = async (file: Blob, path: string) => {
  const storageRef = ref(storage, path);
  return uploadBytes(storageRef, file).then((snapshot: UploadResult) => {
    console.warn("Uploaded a blob or file!", path, snapshot);
  });
};
