"use client";
import Link from "next/link";

export default function Register() {
  return (
    <div className="flex items-center justify-center h-screen bg-white text-black">
      <div className="bg-green-100 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Create Account</h2>
        <input type="text" placeholder="Name" className="w-full p-2 border rounded mb-4" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-4" />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded mb-4" />
        <button className="w-full bg-red-600 text-white py-2 rounded">Register</button>
        <p className="text-sm mt-4">
          Already have an account? <Link href="/auth/login" className="text-green-600">Login</Link>
        </p>
      </div>
    </div>
  );
}