"use client";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";



export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
      {/* Navbar */}
      <nav className="w-full p-4 bg-white shadow-md flex justify-between items-center border-b-4 border-green-600">
        <h1 className="text-3xl font-bold text-green-600">RayGreen</h1>
        <div className="space-x-4">
          <Link href="/hotels" className="text-black hover:text-green-600">Hotels</Link>
          <Link href="/menu" className="text-black hover:text-green-600">Menu</Link>
          <Link href="/dashboard" className="text-black hover:text-green-600">Dashboard</Link>
          <Link href="/bookings" className="text-black hover:text-green-600">Bookings</Link>
          <Link href="/auth/login" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-red-600 transition">Login</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center mt-10">
        <h1 className="text-5xl font-bold text-black">Need a hotel? We got you covered</h1>
        <p className="text-gray-700 mt-2">Find the best holiday destinations and book your stay now.</p>
        <Link href="/hotels">
          <button className="mt-4 bg-green-600 text-white px-6 py-3 rounded text-lg hover:bg-red-600 transition">
            Show More
          </button>
        </Link>
      </div>

      {/* Most Picked Hotels */}
      <section className="py-16 px-6 w-full max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-6 text-black">Most Picked</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white shadow-lg border-2 border-green-600 p-4 rounded hover:shadow-xl transition">
            <Image src="/images/hotel1.jpeg" alt="Blue Origin Fams" width={400} height={250} className="rounded" />
            <h3 className="text-2xl font-semibold mt-2 text-black">Blue Origin Fams</h3>
            <p className="text-gray-700">Kisumu</p>
            <p className="font-bold text-green-600 mt-1">$50 per night</p>
          </div>
          <div className="bg-white shadow-lg border-2 border-green-600 p-4 rounded hover:shadow-xl transition">
            <Image src="/images/hotel2.jpeg" alt="Ocean Land" width={400} height={250} className="rounded" />
            <h3 className="text-2xl font-semibold mt-2 text-black">Ocean Land</h3>
            <p className="text-gray-700">Mombasa</p>
            <p className="font-bold text-green-600 mt-1">$22 per night</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 text-center bg-black text-white">
        <p>Copyright 2025 • All rights reserved • RayGreen. James Chuchu</p>
      </footer>
    </div>
  );
}
