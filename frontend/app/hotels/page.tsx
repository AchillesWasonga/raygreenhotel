"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; // For animations

export default function Hotels() {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      {/* Back to Home Button */}
      <div className="mb-4">
        <Link
          href="/"
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Page Heading */}
      <h1 className="text-3xl font-bold mb-6 text-green-700 text-center">
        Glad you could make it, explore more
      </h1>

      {/* Hotels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <Link key={hotel.id} href="/bookings">
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
              className="bg-white shadow-md p-4 rounded cursor-pointer transition duration-300"
            >
              <Image
                src={hotel.image}
                alt={hotel.name}
                width={400}
                height={250}
                className="rounded"
              />
              <h3 className="text-xl font-semibold mt-4">{hotel.name}</h3>
              <p className="text-gray-600">{hotel.location}</p>
              <p className="font-bold mt-2 text-green-700">{hotel.price} per night</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Hotel Data
const hotels = [
  {
    id: 1,
    name: "Safari View Hotel",
    location: "Nairobi",
    price: "$80",
    image: "/images/hotel3.jpeg",
  },
  {
    id: 2,
    name: "Lakefront Paradise",
    location: "Kisumu",
    price: "$60",
    image: "/images/hotel4.jpeg",
  },
  {
    id: 3,
    name: "Coastal Breeze Resort",
    location: "Mombasa",
    price: "$75",
    image: "/images/hotel5.jpeg",
  },
];
