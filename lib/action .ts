import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { LamBeeProduct } from "../types/product";

export const createProduct = async (data: Omit<LamBeeProduct, 'id' | 'createdAt'>) => {
  try {
    const docRef = await addDoc(collection(db, "products"), {
      ...data,
      createdAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Firebase Upload Error:", error);
    return { success: false, error };
  }
};