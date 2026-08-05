import ProductDetails from "../../../components/ProductDetails";

const products = {
  hulk: {
    title: "1000+ AI Hulk Reels Bundle",
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

  "ai-talking-objects": {
    title: "1000+ AI Talking Objects Reels Bundle",
    price: "₹99",
    oldPrice: "₹999",
    image: "/products/product2.jpg",
    description:
      "1000+ AI talking objects reels with viral content ready to post.",
    features: [
      "1000+ AI Talking Videos",
      "Ready To Upload",
      "High Quality Content",
      "Commercial Use",
      "Lifetime Access",
    ],
  },

  kids: {
    title: "1000+ Kids Cartoon Reels Bundle",
    price: "₹99",
    oldPrice: "₹999",
    image: "/products/product3.jpg",
    description:
      "1000+ kids cartoon reels ready for Instagram and YouTube Shorts.",
    features: [
      "Kids Cartoon Videos",
      "Colorful Animation",
      "YouTube Kids Ready",
      "Easy Upload",
      "Lifetime Access",
    ],
  },

  "ai-health-talking": {
    title: "500+ AI Health Talking Reels Bundle",
    price: "₹99",
    oldPrice: "₹999",
    image: "/products/product4.jpg",
    description:
      "500+ AI health talking reels with engaging educational content.",
    features: [
      "Health AI Videos",
      "Ready To Upload",
      "High Quality",
      "Commercial Use",
      "Lifetime Access",
    ],
  },

  "cartoon-story": {
    title: "5000+ Cartoon Story Video Bundle",
    price: "₹99",
    oldPrice: "₹999",
    image: "/products/product5.jpg",
    description:
      "5000+ cartoon story videos for reels and shorts.",
    features: [
      "5000+ Story Videos",
      "HD Quality",
      "Ready To Upload",
      "Commercial Use",
      "Lifetime Access",
    ],
  },

  "ai-skeleton": {
    title: "500+ AI Skeleton Reels Bundle",
    price: "₹99",
    oldPrice: "₹999",
    image: "/products/product6.jpg",
    description:
      "500+ AI skeleton themed viral reels bundle.",
    features: [
      "500+ Skeleton Videos",
      "Trending Content",
      "HD Quality",
      "Commercial Use",
      "Lifetime Access",
    ],
  },

  "hindi-fact": {
    title: "1000+ Hindi Fact Reels Bundle",
    price: "₹149",
    oldPrice: "₹999",
    image: "/products/product7.jpg",
    description:
      "1000+ Hindi fact reels for viral pages.",
    features: [
      "Hindi Facts",
      "Ready To Upload",
      "Trending Content",
      "HD Quality",
      "Lifetime Access",
    ],
  },

  "ai-cat-story": {
    title: "1000+ AI Cat Story Bundle",
    price: "₹99",
    oldPrice: "₹799",
    image: "/products/product8.jpg",
    description:
      "Cute AI cat story videos ready for reels.",
    features: [
      "Cat Story Videos",
      "HD Quality",
      "Commercial Use",
      "Ready To Upload",
      "Lifetime Access",
    ],
  },

    "usa-luxury-lifestyle": {
    title: "15,000+ USA Luxury Lifestyle Reels Bundle",
    price: "₹99",
    oldPrice: "₹999",
    image: "/products/product9.jpg",
    description:
      "15000+ premium USA luxury lifestyle reels for Instagram and Shorts.",
    features: [
      "15000+ Viral Reels",
      "Luxury Lifestyle Content",
      "HD Quality",
      "Ready To Upload",
      "Lifetime Access",
    ],
  },

  "ai-baby-dancing": {
    title: "500+ AI Baby Dancing Reels Bundle",
    price: "₹99",
    oldPrice: "₹999",
    image: "/products/product10.jpg",
    description:
      "Funny AI baby dancing reels ready to post.",
    features: [
      "500+ Baby Dancing Videos",
      "Trending Content",
      "HD Quality",
      "Commercial Use",
      "Lifetime Access",
    ],
  },

  "all-in-one": {
    title: "All In One AI Reels Bundle",
    price: "₹99",
    oldPrice: "₹799",
    image: "/products/product11.jpeg",
    description:
      "Complete collection of premium AI reels in one bundle.",
    features: [
      "Multiple Categories",
      "Ready To Upload",
      "HD Quality",
      "Commercial Use",
      "Lifetime Access",
    ],
  },

  "bike-rider": {
    title: "10000+ Bike Rider Reels Bundle",
    price: "₹149",
    oldPrice: "₹999",
    image: "/products/product12.jpg",
    description:
      "10000+ bike riding reels and viral edits.",
    features: [
      "10000+ Bike Videos",
      "Trending Reels",
      "HD Quality",
      "Commercial Use",
      "Lifetime Access",
    ],
  },

  "korean-girls": {
    title: "500+ Korean Girls Reels Bundle",
    price: "₹199",
    oldPrice: "₹1499",
    image: "/products/product13.jpg",
    description:
      "Premium Korean aesthetic reels collection.",
    features: [
      "500+ Korean Videos",
      "Trending Content",
      "HD Quality",
      "Commercial Use",
      "Lifetime Access",
    ],
  },

  "doraemon-reels": {
    title: "1000+ Doraemon Reels Bundle",
    price: "₹149",
    oldPrice: "₹999",
    image: "/products/product14.jpg",
    description:
      "1000+ Doraemon reels for shorts and social media.",
    features: [
      "1000+ Doraemon Videos",
      "HD Quality",
      "Ready To Upload",
      "Commercial Use",
      "Lifetime Access",
    ],
  },

  "ai-hot-model": {
    title: "1500+ AI Hot Model Reels Bundle",
    price: "₹299",
    oldPrice: "₹2999",
    image: "/products/product15.jpg",
    description:
      "Premium AI model reels with high-quality viral content.",
    features: [
      "1500+ AI Model Videos",
      "Premium Collection",
      "Commercial Use",
      "HD Quality",
      "Lifetime Updates",
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