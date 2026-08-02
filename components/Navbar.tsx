import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-white shadow">

      <h1 className="text-3xl font-bold text-blue-600">
        NEXORA AI STORE
      </h1>


      <input
        type="text"
        placeholder="Search products..."
        className="px-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />


      <div className="flex gap-6 font-medium">

        <Link href="/">
          Home
        </Link>

        <Link href="/#products">
          Products
        </Link>

        <Link href="/cart">
          Cart 🛒
        </Link>

      </div>

    </nav>
  );
}