"use client";

import { useState } from "react";
import Link from "next/link"; // Import Link properly

const menuItems = [
  { id: 1, name: "Grilled Chicken", price: 15 },
  { id: 2, name: "Vegetarian Pasta", price: 12 },
  { id: 3, name: "Seafood Platter", price: 25 },
  { id: 4, name: "Steak", price: 20 },
];

export default function Menu() {
  const [cart, setCart] = useState<{ id: number; name: string; price: number }[]>([]);

  const addToCart = (item: { id: number; name: string; price: number }) => {
    setCart([...cart, item]);
  };

  return (
    <div className="p-6 bg-white text-black min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-green-700">Menu</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {menuItems.map((item) => (
          <div key={item.id} className="border p-4 rounded shadow bg-red-100">
            <h2 className="text-lg font-semibold text-black">{item.name}</h2>
            <p className="text-gray-700">${item.price}</p>
            <button
              onClick={() => addToCart(item)}
              className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Add to Order
            </button>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold mt-6 text-red-600">Your Order</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">No items added.</p>
      ) : (
        <ul className="list-disc pl-5 text-black">
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}

      <Link href="/menu/checkout" className="block mt-4 text-green-600 hover:text-red-500">
        Proceed to Checkout
      </Link>
    </div>
  );
}