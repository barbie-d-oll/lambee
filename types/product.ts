export interface LamBeeProduct {
  id?: string;
  name: string;
  description: string;
  price: number;
  category: "Tops" | "Bottoms" | "Sets";
  imageUrl: string;
  stock: number;
  createdAt?: any; 
}