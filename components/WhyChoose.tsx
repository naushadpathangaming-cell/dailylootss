export default function WhyChoose() {
  const features = [
    {
      icon: "⚡",
      title: "Instant Download",
      desc: "Get your digital products immediately after purchase.",
    },
    {
      icon: "🔒",
      title: "100% Secure Payment",
      desc: "Safe and trusted payments powered by Razorpay.",
    },
    {
      icon: "♾️",
      title: "Lifetime Access",
      desc: "Download and use your purchased products forever.",
    },
    {
      icon: "🚀",
      title: "Premium Quality",
      desc: "Carefully selected high-quality digital resources.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900">
         Why Choose NEXORA AI STORE?
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
  Premium AI bundles, digital resources, and ready-to-use content designed to help creators grow faster.
</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {features.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl mb-5">{item.icon}</div>

              <h3 className="text-2xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-4">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}