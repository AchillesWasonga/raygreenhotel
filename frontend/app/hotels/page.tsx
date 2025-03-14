import Image from "next/image";

export default function Hotels() {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Explore Hotels</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow-md p-4 rounded">
          <Image src="/images/hotel1.jpeg" alt="Hotel" width={400} height={250} className="rounded" />
          <h3 className="text-xl font-semibold mt-4">Blue Origin Fams</h3>
          <p className="text-gray-600">Kisumu</p>
          <p className="font-bold mt-2">$50 per night</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded">
          <Image src="/images/hotel2.jpeg" alt="Hotel" width={400} height={250} className="rounded" />
          <h3 className="text-xl font-semibold mt-4">Ocean Land</h3>
          <p className="text-gray-600">Mombasa</p>
          <p className="font-bold mt-2">$22 per night</p>
        </div>
      </div>
    </div>
  );
}
