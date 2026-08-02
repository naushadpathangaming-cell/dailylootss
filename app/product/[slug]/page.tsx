import ProductDetails from "../../../components/ProductDetails";

const products = {
  hulk: {
    title: "AI Hulk Reels Bundle",
    price: "₹99",
    oldPrice: "₹999",
    image: "/products/product1.jpg",
    description:
      "1000+ AI Hulk Reels, prompts, thumbnails and editable files.",
  },

  anime: {
    title: "Anime Reels Bundle",
    price: "₹99",
    oldPrice: "₹999",
    image: "/products/product2.jpg",
    description:
      "500+ Anime reels, captions, hooks and templates.",
  },

  kids: {
    title: "Kids Cartoon Bundle",
    price: "₹99",
    oldPrice: "₹999",
    image: "/products/product3.jpg",
    description:
      "Get 500+ high-quality kids cartoon reels, colorful templates, engaging captions, and ready-to-post content. Perfect for YouTube Shorts, Instagram Reels, and Facebook creators.",
  },

  motivation: {
    title: "Motivation Reels Bundle",
    price: "₹99",
    oldPrice: "₹999",
    image: "/products/product4.jpg",
    description:
      "Boost your social media with 500+ motivational reels, viral quotes, powerful captions, trending audio ideas, and ready-to-edit templates for Instagram, YouTube Shorts, and TikTok.",
  },
};
export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products[slug as keyof typeof products];

  if (!product) {
    return (
      <h1 className="text-center text-3xl mt-20">
        Product Not Found
      </h1>
    );
  }

  return <ProductDetails product={product} />;
}