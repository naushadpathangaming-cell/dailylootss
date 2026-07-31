import Navbar from "../../components/Navbar";
import Image from "next/image";

export default function ProductPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto py-12 px-6">
        <div className="grid md:grid-cols-2 gap-10">

          <Image
  src="/products/product1.jpg"
  alt="AI Hulk Reels Bundle"
  width={600}
  height={600}
  className="w-full h-96 object-cover rounded-xl"
/>

          {/* Product Details */}
          <div>
            <h1 className="text-4xl font-bold">
              AI Prompt Bundle
            </h1>

            <p className="text-3xl text-blue-600 font-bold mt-4">
              ₹299
            </p>

            <p className="mt-6 text-gray-600 leading-7">
              Get 5000+ premium AI prompts for ChatGPT, Gemini, Claude,
              Midjourney and many more. Perfect for creators,
              freelancers and business owners.
            </p>

            <button className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700">
              Buy Now
            </button>
          </div>

        </div>
      </main>
    </>
  );
}