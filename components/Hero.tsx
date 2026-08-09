import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold">
          Premium Digital Products
        </h1>

        <p className="mt-6 text-xl max-w-2xl mx-auto">
          Download high-quality AI Reels Bundles, Templates, Prompts, Presets,
          and Digital Resources instantly.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="#products"
            className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100"
          >
            Explore Products
          </Link>

<a
  href="https://t.me/earningtechofficial9"
  target="_blank"
  rel="noopener noreferrer"
  className="border-2 border-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-blue-600"
>
  Join Now
</a>
```

        </div>
      </div>
    </section>
  );
}