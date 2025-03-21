"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Dummy Data for Hotels Available for Booking
const hotelsAvailable = [
  { id: 1, name: "Safari View Hotel", location: "Nairobi", price: 80, img: "/images/hotel3.jpeg" },
  { id: 2, name: "Lakefront Paradise", location: "Kisumu", price: 60, img: "/images/hotel4.jpeg" },
  { id: 3, name: "Coastal Breeze Resort", location: "Mombasa", price: 75, img: "/images/hotel5.jpeg" },
  { id: 4, name: "Blue Origin Fams", location: "Kisumu", price: 50, img: "/images/hotel1.jpeg" },
  { id: 5, name: "Ocean Land", location: "Mombasa", price: 22, img: "/images/hotel2.jpeg" }
];

export default function Bookings() {
  // State for booked hotels
  const [bookedHotels, setBookedHotels] = useState<{ id: number; name: string; location: string; price: number; img: string }[]>([]);

  // Function to book a hotel
  const bookHotel = (hotel: any) => {
    setBookedHotels([...bookedHotels, hotel]); // Move to booked list
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      {/* Back Button */}
      <div className="mb-4">
        <Link href="/hotels" className="text-green-600 font-bold text-lg flex items-center">
          ← Back to Hotels
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">Click in order to select and book hotel</h1>

      {/* Available Hotels for Booking */}
      <h2 className="text-2xl font-semibold text-black mb-4">Available Hotels</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {hotelsAvailable.map((hotel) => (
          <div 
            key={hotel.id} 
            className="bg-white shadow-md p-4 rounded-lg border border-green-500 hover:shadow-lg transition"
          >
            <Image src={hotel.img} alt={hotel.name} width={400} height={250} className="rounded" />
            <h3 className="text-2xl font-semibold mt-2 text-black">{hotel.name}</h3>
            <p className="text-gray-600">{hotel.location}</p>
            <p className="font-bold mt-2 text-green-600">${hotel.price} per night</p>
            <button 
              onClick={() => bookHotel(hotel)}
              className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      {/* Booked Hotels Section */}
      {bookedHotels.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold text-black mt-8">Your Bookings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bookedHotels.map((hotel) => (
              <div 
                key={hotel.id} 
                className="bg-white shadow-md p-4 rounded-lg border border-red-500 cursor-pointer hover:shadow-lg transition"
              >
                <Image src={hotel.img} alt={hotel.name} width={400} height={250} className="rounded" />
                <h3 className="text-2xl font-semibold mt-2 text-black">{hotel.name}</h3>
                <p className="text-gray-600">{hotel.location}</p>
                <p className="font-bold mt-2 text-red-600">${hotel.price} per night</p>
                <button 
                  className="mt-3 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                >
                  <Link href="/dashboard">View My Hotel</Link>
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
