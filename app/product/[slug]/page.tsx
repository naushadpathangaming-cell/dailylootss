import ProductDetails from "../../../components/ProductDetails";

const products = {
  hulk: {
    title: "AI Hulk Reels Bundle",
    price: "₹99",
    oldPrice: "₹999",
    image: "/products/product1.jpg",

    description:
      "1000+ AI Hulk Reels, prompts, thumbnails and editable files.",

    features: [
      "1000+ AI Hulk Viral Reels",
      "Ready To Post Videos",
      "Instagram Reels & YouTube Shorts Ready",
      "Faceless Content System",
      "Lifetime Access",
    ],
  },


  anime: {
    title: "Anime Reels Bundle",
    price: "₹99",
    oldPrice: "₹999",
    image: "/products/product2.jpg",

    description:
      "500+ Anime reels, captions, hooks and templates for growing anime pages.",

    features: [
      "500+ Viral Anime Reels",
      "Trending Anime Templates",
      "Ready Made Captions & Hooks",
      "Perfect For Anime Pages",
      "Commercial Use Allowed",
    ],
  },


  kids: {
    title: "Kids Cartoon Bundle",
    price: "₹99",
    oldPrice: "₹999",
    image: "/products/product3.jpg",

    description:
      "500+ high-quality kids cartoon reels, colorful templates, engaging captions, and ready-to-post content.",

    features: [
      "500+ Kids Cartoon Videos",
      "Colorful Animation Content",
      "YouTube Kids & Shorts Ready",
      "Easy Upload Content",
      "Lifetime Access",
    ],
  },


  motivation: {
    title: "Motivation Reels Bundle",
    price: "₹99",
    oldPrice: "₹999",
    image: "/products/product4.jpg",

    description:
      "500+ motivational reels, viral quotes, powerful captions, trending audio ideas, and ready-to-edit templates.",

    features: [
      "500+ Motivation Reels",
      "Viral Quotes & Captions",
      "Instagram Growth Content",
      "Ready To Edit Templates",
      "Perfect For Faceless Pages",
    ],
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