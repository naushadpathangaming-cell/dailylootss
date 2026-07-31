"use client";

import Image from "next/image";
import Navbar from "../../../components/Navbar";
import { useCart } from "../../../components/context/CartContext";

const products = {
  hulk: {
    title: "AI Hulk Reels Bundle",
    price: "₹299",
    image: "/products/product1.jpg",
    description:
      "1000+ AI Hulk Reels, prompts, thumbnails and editable files.",
  },
  anime: {
    title: "Anime Reels Bundle",
    price: "₹399",
    image: "/products/product2.jpg",
    description: "500+ Anime reels, captions, hooks and templates.",
  },
  kids: {
    title: "Kids Cartoon Bundle",
    price: "₹249",
    image: "/products/product3.jpg",
    description:
      "Get 500+ high-quality kids cartoon reels, colorful templates, engaging captions, and ready-to-post content. Perfect for YouTube Shorts, Instagram Reels, and Facebook creators.",
  },
  motivation: {
    title: "Motivation Reels Bundle",
    price: "₹199",
    image: "/products/product4.jpg",
    description:
      "Boost your social media with 500+ motivational reels, viral quotes, powerful captions, trending audio ideas, and ready-to-edit templates for Instagram, YouTube Shorts, and TikTok.",
  },
};

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const { addToCart } = useCart();

  const product = products[params.slug as keyof typeof products];

  if (!product) {
    return (
      <h1 className="text-center text-3xl mt-20">
        Product Not Found
      </h1>
    );
  }

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
              onClick={() => addToCart(product)}
              className="mt-8 w-full bg-blue-600 text-white py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </main>
    </>
  );
}