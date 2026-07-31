import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-white shadow">
      <h1 className="text-3xl font-bold text-blue-600">
        DailyLootss
      </h1>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/login">Login</Link>
        <Link href="/signup">Signup</Link>
        <Link href="/cart">Cart 🛒</Link>
      </div>
    </nav>
  );
}