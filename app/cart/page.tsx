import Navbar from "../../components/Navbar";

export default function CartPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold mb-8">
          Shopping Cart
        </h1>

        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-semibold">
            Your cart is empty
          </h2>

          <p className="text-gray-500 mt-3">
            Add some digital products to continue.
          </p>
        </div>
      </main>
    </>
  );
}