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


  anime: {
    title: "1000+ Ai Talking objects Reels Bundle",
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
    title: "1000+ Kids Cartoon reels Bundle",
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
    title: "500+ Ai Health Talking Reels Bundle",
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

  fruits: {
    title: "5000+ Cartoon story video Bundle",
    price: "₹99",
    oldPrice: "₹999",
    image: "/products/product5.jpg",

    description:
      "500+ AI talking fruits videos, funny animations and viral content ready for social media.",

    features: [
      "500+ AI Fruit Videos",
      "Funny Talking Characters",
      "Ready To Upload",
      "High Quality Content",
      "Lifetime Access",
    ],
  },

  animals: {
    title: "500+ AI Skeleton reels Bundle",
    price: "₹99",
    oldPrice: "₹999",
    image: "/products/product6.jpg",

    description:
      "Cute AI talking animals bundle with ready-to-post viral videos and animations.",

    features: [
      "500+ Animal Videos",
      "AI Generated Content",
      "Instagram Ready",
      "Commercial Use",
      "Lifetime Access",
    ],
  },

  chatgpt: {
    title: "1000+ Hindi Fact Reeels Bundle",
    price: "₹149",
    oldPrice: "₹999",
    image: "/products/product7.jpg",

    description:
      "10000+ premium ChatGPT prompts for business, marketing, coding and content creation.",

    features: [
      "10000+ Prompts",
      "Business Templates",
      "Marketing Prompts",
      "Coding Prompts",
      "Lifetime Access",
    ],
  },

  canva: {
    title: "1000+ Ai Cat Story Bundle",
    price: "₹99",
    oldPrice: "₹799",
    image: "/products/product8.jpg",

    description:
      "Premium Canva templates for Instagram, YouTube, Business and Social Media.",

    features: [
      "Editable Canva Files",
      "Instagram Templates",
      "YouTube Templates",
      "Commercial License",
      "Lifetime Access",
    ],
  }
,
  shorts: {
    title: "15,000+ USA Luxury lifestyle reels Bundle",
    price: "₹99",
    oldPrice: "₹999",
    image: "/products/product9.jpg",

    description:
      "500+ viral YouTube Shorts ideas, templates and ready-to-post content.",

    features: [
      "500+ Viral Shorts",
      "Trending Hooks",
      "Ready To Upload",
      "High Engagement Content",
      "Lifetime Access",
    ],
  },

  instagram: {
    title: "500+ Ai Baby Dancing Reels Bundle",
    price: "₹99",
    oldPrice: "₹999",
    image: "/products/product10.jpg",

    description:
      "Instagram growth bundle with viral reels, captions and content ideas.",

    features: [
      "Instagram Growth Pack",
      "Ready Captions",
      "Trending Content",
      "High Quality Files",
      "Lifetime Access",
    ],
  },

  voice: {
    title: "All In One Ai Reels Bundle",
    price: "₹99",
    oldPrice: "₹799",
    image: "/products/product11.jpeg",

    description:
      "Premium AI voice resources, sound effects and voice generation assets.",

    features: [
      "AI Voice Resources",
      "High Quality Audio",
      "Commercial Use",
      "Easy To Use",
      "Lifetime Access",
    ],
  },

  midjourney: {
    title: "10000+ Bike Raider Reels Bundle",
    price: "₹149",
    oldPrice: "₹999",
    image: "/products/product12.jpg",

    description:
      "Professional Midjourney prompts for realistic, cinematic and creative AI images.",

    features: [
      "5000+ Prompts",
      "Cinematic Images",
      "Realistic Art",
      "Commercial License",
      "Lifetime Access",
    ],
  }
  ,
  business: {
    title: "500+ Korean Girls Reels Bundle",
    price: "₹199",
    oldPrice: "₹1499",
    image: "/products/product13.jpg",

    description:
      "Complete AI business toolkit with prompts, templates and automation resources.",

    features: [
      "Business Templates",
      "AI Productivity Tools",
      "Marketing Resources",
      "Commercial Use",
      "Lifetime Access",
    ],
  },

  faceless: {
    title: "1000+ Doraemon Reels Bundle",
    price: "₹149",
    oldPrice: "₹999",
    image: "/products/product14.jpg",

    description:
      "Everything you need to build and grow a faceless content creation business.",

    features: [
      "Faceless Content System",
      "Viral Content Ideas",
      "Ready To Upload",
      "Creator Resources",
      "Lifetime Access",
    ],
  },

  ultimate: {
    title: "1500+ Ai hot Model Reels Bundle",
    price: "₹299",
    oldPrice: "₹2999",
    image: "/products/product15.jpg",

    description:
      "The complete premium bundle containing AI prompts, templates, creator tools and digital resources.",

    features: [
      "All Premium Resources",
      "AI Prompts",
      "Templates",
      "Digital Assets",
      "Lifetime Updates",
    ],
  }
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