"use client";

import Navbar from "../../components/Navbar";
import { useCart } from "../../components/context/CartContext";
import Image from "next/image";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price.replace("₹", "")),
    0
  );

  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-2xl font-semibold">
              Your cart is empty
            </h2>

            <p className="text-gray-500 mt-3">
              Add some digital products to continue.
            </p>
          </div>
        ) : (
          <>
            <div className="space-y-6">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white shadow-lg rounded-xl p-5"
                >
                  <div className="flex items-center gap-5">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="rounded-lg"
                    />

                    <div>
                      <h2 className="text-xl font-bold">
                        {item.title}
                      </h2>

                      <p className="text-blue-600 font-bold mt-2">
                        {item.price}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(index)}
                    className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-gray-100 p-6 rounded-xl">
              <h2 className="text-2xl font-bold">
                Total: ₹{total}
              </h2>

              <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
                Checkout
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}