import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Product } from "../types";

export const uploadProduct = async (productData: Omit<Product, 'createdAt'>) => {
  try {
    const docRef = await addDoc(collection(db, "products"), {
      ...productData,
      createdAt: serverTimestamp(),
    });
    console.log("Product added with ID: ", docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding product: ", error);
    return { success: false, error };
  }
};