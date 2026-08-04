import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "AI Hulk Reels Bundle",
    price: "₹99",
    oldPrice: "₹999",
    image: "/products/product1.jpg",
    slug: "hulk",
  },
  {
    title: "Anime Reels Bundle",
    price: "₹99",
    oldPrice: "₹999",
    image: "/products/product2.jpg",
    slug: "anime",
  },
  {
    title: "Kids Cartoon Bundle",
    price: "₹99",
    oldPrice: "₹999",
    image: "/products/product3.jpg",
    slug: "kids",
  },
  {
    title: "Motivation Reels Bundle",
    price: "₹99",
    oldPrice: "₹999",
    image: "/products/product4.jpg",
    slug: "motivation",
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-black mb-8">
  Featured Products
</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.title}
              className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={400}
                className="w-full h-52 object-cover rounded-lg"
              />

              <h3 className="text-xl font-semibold mt-4">
                {product.title}
              </h3>

              <div className="mt-2">
                <span className="text-gray-400 line-through text-lg">
                  {product.oldPrice}
                </span>

                <span className="text-black text-4xl font-bold ml-3">
                  {product.price}
                </span>

                <p className="text-red-500 font-semibold mt-2">
                  🔥 90% OFF - Limited Time
                </p>
              </div>

              <Link
                href={`/product/${product.slug}`}
                className="mt-5 block w-full text-center bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
              >
                Buy Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}