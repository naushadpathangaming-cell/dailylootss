import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "1000+ AI Hulk Reels Bundle",
    price: "₹99",
    oldPrice: "₹999",
    image: "/products/product1.jpg",
    slug: "hulk",
  },
  {
    title: "1000+ AI Talking Objects Reels Bundle",
    price: "₹99",
    oldPrice: "₹999",
    image: "/products/product2.jpg",
    slug: "ai-talking-objects",
  },
  {
    title: "1000+ Kids Cartoon Reels Bundle",
    price: "₹99",
    oldPrice: "₹999",
    image: "/products/product3.jpg",
    slug: "kids",
  },
  {
    title: "500+ AI Health Talking Reels Bundle",
    price: "₹99",
    oldPrice: "₹999",
    image: "/products/product4.jpg",
    slug: "ai-health-talking",
  },
  {
    title: "5000+ Cartoon Story Video Bundle",
    price: "₹99",
    oldPrice: "₹999",
    image: "/products/product5.jpg",
    slug: "cartoon-story",
  },
  {
    title: "500+ AI Skeleton Reels Bundle",
    price: "₹99",
    oldPrice: "₹999",
    image: "/products/product6.jpg",
    slug: "ai-skeleton",
  },
  {
    title: "1000+ Hindi Fact Reels Bundle",
    price: "₹149",
    oldPrice: "₹999",
    image: "/products/product7.jpg",
    slug: "hindi-fact",
  },
  {
    title: "1000+ AI Cat Story Bundle",
    price: "₹99",
    oldPrice: "₹799",
    image: "/products/product8.jpg",
    slug: "ai-cat-story",
  },
  {
    title: "15,000+ USA Luxury Lifestyle Reels Bundle",
    price: "₹99",
    oldPrice: "₹999",
    image: "/products/product9.jpg",
    slug: "usa-luxury-lifestyle",
  },
  {
    title: "500+ AI Baby Dancing Reels Bundle",
    price: "₹99",
    oldPrice: "₹999",
    image: "/products/product10.jpg",
    slug: "ai-baby-dancing",
  },
  {
    title: "All In One AI Reels Bundle",
    price: "₹99",
    oldPrice: "₹799",
    image: "/products/product11.jpeg",
    slug: "all-in-one",
  },
  {
    title: "10000+ Bike Rider Reels Bundle",
    price: "₹149",
    oldPrice: "₹999",
    image: "/products/product12.jpg",
    slug: "bike-rider",
  },
  {
    title: "500+ Korean Girls Reels Bundle",
    price: "₹199",
    oldPrice: "₹1499",
    image: "/products/product13.jpg",
    slug: "korean-girls",
  },
  {
    title: "1000+ Doraemon Reels Bundle",
    price: "₹149",
    oldPrice: "₹999",
    image: "/products/product14.jpg",
    slug: "doraemon-reels",
  },
  {
    title: "1500+ AI Hot Model Reels Bundle",
    price: "₹299",
    oldPrice: "₹2999",
    image: "/products/product15.jpg",
    slug: "ai-hot-model",
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
  className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative"
>
              <div className="relative">

  <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
    🔥 BEST SELLER
  </span>

  <span className="absolute top-3 right-3 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
    90% OFF
  </span>

  <Image
    src={product.image}
    alt={product.title}
    width={350}
    height={350}
    className="w-52 h-52 mx-auto object-contain rounded-xl transition duration-300 hover:scale-105"
  />

</div>

              <h3 className="text-xl font-semibold text-black mt-4">
  {product.title}
</h3>
<div className="flex items-center gap-2 mt-2">
  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
  <span className="text-gray-500 text-sm">(4.9)</span>
</div>

              <div className="mt-2">
                <span className="text-gray-400 line-through text-lg">
                  {product.oldPrice}
                </span>

                <span className="text-black text-4xl font-bold ml-3">
                  {product.price}
                </span>
                <p className="text-green-600 font-medium mt-2">
  ⚡ Instant Download
</p>

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