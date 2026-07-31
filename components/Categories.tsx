import Link from "next/link";

const categories = [
  "AI Prompts",
  "Templates",
  "E-books",
  "Courses",
  "Design Assets",
  "Video Packs",
];

export default function Categories() {
  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-10">
          Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link
              key={category}
              href="/"
              className="bg-white rounded-2xl p-6 text-center font-semibold hover:bg-blue-600 hover:text-white transition duration-300 shadow-lg"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}