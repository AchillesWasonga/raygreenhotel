import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between">
      <Link href="/" className="text-xl font-bold text-blue-600">RayGreen</Link>
      <div className="space-x-4">
        <Link href="/hotels" className="text-gray-700 hover:text-blue-500">Hotels</Link>
        <Link href="/menu" className="text-gray-700 hover:text-blue-500">Menu</Link>
        <Link href="/bookings" className="text-gray-700 hover:text-blue-500">Bookings</Link>
        <Link href="/dashboard" className="text-gray-700 hover:text-blue-500">Dashboard</Link>
        <Link href="/auth/login" className="bg-blue-500 text-white px-4 py-2 rounded">Login</Link>
      </div>
    </nav>
  );
}
