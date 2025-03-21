"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion"; // For animations

export default function Home() {
  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center bg-white text-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Navbar */}
      <motion.nav 
        className="w-full p-4 bg-white shadow-md flex justify-between items-center border-b-4 border-green-600"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-green-600">RayGreen</h1>
        <div className="space-x-4 flex">
          {[
            { name: "Hotels", path: "/hotels" },
            { name: "Menu", path: "/menu" },
            { name: "Dashboard", path: "/dashboard" },
            { name: "Bookings", path: "/bookings" }
          ].map((link) => (
            <motion.div 
              key={link.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href={link.path} className="text-black px-4 py-2 rounded-lg transition duration-300 hover:text-green-600">
                {link.name}
              </Link>
            </motion.div>
          ))}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link href="/auth/login">
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300">
                Login
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.div 
        className="text-center mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold text-black">Need a hotel? We got you covered</h1>
        <p className="text-2xl font-bold text-black">Find the best holiday destinations and book your stay now.</p>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link href="/hotels">
            <button className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-red-600 transition duration-300">
              Show More
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Most Picked Hotels */}
      <motion.section 
        className="py-16 px-6 w-full max-w-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-6 text-black">Most Picked</h2>
        <div className="grid grid-cols-2 gap-6">
          {[
            { name: "Blue Origin Fams", location: "Kisumu", price: 50, img: "/images/hotel1.jpeg" },
            { name: "Ocean Land", location: "Mombasa", price: 22, img: "/images/hotel2.jpeg" }
          ].map((hotel) => (
            <motion.div
              key={hotel.name}
              className="bg-white shadow-lg border-2 border-green-600 p-4 rounded-lg hover:shadow-xl transition cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/bookings">
                <Image src={hotel.img} alt={hotel.name} width={400} height={250} className="rounded" />
                <h3 className="text-2xl font-semibold mt-2 text-black">{hotel.name}</h3>
                <p className="text-gray-700">{hotel.location}</p>
                <p className="font-bold text-green-600 mt-1">${hotel.price} per night</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="w-full py-6 text-center bg-black text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <p>Copyright 2025 • All rights reserved • RayGreen.</p>
      </motion.footer>
    </motion.div>
  );
}
