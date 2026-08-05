import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold text-indigo-600">
              NEXORA AI STORE
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              Premium AI Prompts, Digital Products, Templates,
              Creator Resources and Business Tools.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/#products">Products</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-bold text-xl mb-4">
              Policies
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms & Conditions</Link></li>
              <li><Link href="/refund-policy">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-xl mb-4">
              Contact
            </h3>

            <p className="text-gray-600">
              📧 support@nexoraaistore.com
            </p>

            <p className="text-gray-600 mt-2">
              🌍 Worldwide Digital Delivery
            </p>

            <p className="text-gray-600 mt-2">
              ⚡ Instant Download
            </p>
          </div>

        </div>

        <div className="border-t mt-12 pt-6 text-center text-gray-500">
          © 2026 NEXORA AI STORE. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}