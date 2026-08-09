"use client";

import Image from "next/image";
import Navbar from "./Navbar";

type Product = {
  title: string;
  price: string;
  oldPrice: string;
  image: string;
  description: string;
  features: string[];
};

export default function ProductDetails({
  product,
}: {
  product: Product;
}) {
  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto py-12 px-6">

        <div className="grid md:grid-cols-2 gap-10">

          <Image
  src={product.image}
  alt={product.title}
  width={500}
  height={500}
  className="w-72 h-72 md:w-80 md:h-80 object-contain rounded-2xl shadow-xl mx-auto hover:scale-105 transition duration-300"
/>


          <div>

            <h1 className="text-4xl font-bold text-black">
  {product.title}
</h1>


            <div className="mt-4">

              <span className="text-gray-400 line-through text-2xl">
                {product.oldPrice}
              </span>

              <span className="text-black text-4xl font-bold ml-3">
  {product.price}
</span>


              <p className="text-red-500 font-bold mt-2">
                🔥 90% OFF - Limited Time Offer
              </p>

            </div>


            <p className="mt-3 text-yellow-500 text-lg">
              ⭐⭐⭐⭐⭐ (4.9/5)
            </p>


            <p className="mt-6 text-gray-600 leading-7">
              {product.description}
            </p>



            <div className="mt-8">

              <h2 className="text-xl font-bold mb-4">
                🎯 WHAT YOU GET
              </h2>


              <ul className="space-y-2 text-gray-700">
  {product.features.map((item) => (
    <li key={item}>✔ {item}</li>
  ))}
</ul>

            </div>



            <div className="mt-8">

              <h2 className="text-xl font-bold mb-4">
                ⚡ WHY THIS WORKS
              </h2>


              <ul className="space-y-2 text-gray-700">

                <li>✔ Hooks Audience Attention Quickly</li>

                <li>✔ Helps Increase Watch Time</li>

                <li>✔ Boosts Engagement</li>

                <li>✔ Perfect For Daily Content Posting</li>

              </ul>

            </div>



            <div className="mt-8">

              <h2 className="text-xl font-bold mb-4">
                🔥 PERFECT FOR
              </h2>


              <ul className="space-y-2 text-gray-700">

                <li>✔ Faceless Pages</li>

                <li>✔ Content Creators</li>

                <li>✔ Social Media Growth</li>

                <li>✔ Digital Product Sellers</li>

                <li>✔ Affiliate Marketers</li>

              </ul>

            </div>



            <div className="mt-8">

              <h2 className="text-xl font-bold mb-4">
                🔥 DONE-FOR-YOU SYSTEM
              </h2>


              <p className="text-gray-700 leading-7">

                This is not just content.

                <br />

                👉 It is a ready-to-use AI content system
                for daily posting and faster growth.

              </p>

            </div>



            <div className="mt-8">

              <h2 className="text-xl font-bold mb-4">
                📦 What's Included
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
               window.location.href = "https://rzp.io/rzp/nexoraaistore";
              }}
              className="mt-8 w-full bg-indigo-600 text-white py-4 rounded-xl text-lg font-bold hover:bg-indigo-700 transition"
            >
              Buy Now
            </button>


          </div>

        </div>

      </main>

    </>
  );
}