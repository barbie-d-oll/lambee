"use client";
import { useState } from "react";
import { uploadProduct } from "../../../lib/action";

export default function AdminPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await uploadProduct({
      name,
      price,
      description: "Signature LamBee piece",
      category: "Tops",
      imageUrl: "", // We will handle images next!
      stock: 10
    }); 
    if (result.success) alert("Product Added Successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="p-10 flex flex-col gap-4 max-w-md">
      <h1 className="text-2xl font-bold">Add to LamBee Collection</h1>
      <input 
        type="text" 
        placeholder="Product Name" 
        className="border p-2" 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Price" 
        className="border p-2" 
        onChange={(e) => setPrice(Number(e.target.value))} 
      />
      <button className="bg-black text-white p-2 rounded">Upload Item</button>
    </form>
  );
}