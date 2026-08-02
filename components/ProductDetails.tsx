"use client";

import Image from "next/image";
import Navbar from "./Navbar";
import { useCart } from "./context/CartContext";

type Product = {
  title: string;
  price: string;
  image: string;
  description: string;
};

export default function ProductDetails({
  product,
}: {
  product: Product;
}) {
  const { addToCart } = useCart();

  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto py-12 px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <Image
            src={product.image}
            alt={product.title}
            width={600}
            height={600}
            className="w-full h-96 object-cover rounded-xl"
          />

          <div>
            <h1 className="text-4xl font-bold">{product.title}</h1>

            <p className="text-3xl text-blue-600 font-bold mt-4">
              {product.price}
            </p>

            <p className="mt-3 text-yellow-500 text-lg">
              ⭐⭐⭐⭐⭐ (4.9/5)
            </p>

            <p className="mt-6 text-gray-600 leading-7">
              {product.description}
            </p>

            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">
                What's Included
              </h2>

              <ul className="space-y-2 text-gray-700">
                <li>✅ Instant Download</li>
                <li>✅ Lifetime Access</li>
                <li>✅ Commercial Use</li>
                <li>✅ Regular Updates</li>
                <li>✅ High Quality Files</li>
              </ul>
            </div>

            <button
              onClick={() => {
  alert("Product Added!");
  addToCart(product);
}}
              className="mt-8 w-full bg-blue-600 text-white py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </main>
    </>
  );
}