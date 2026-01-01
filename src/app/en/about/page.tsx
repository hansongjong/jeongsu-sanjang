import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "About | Jeongsu Sanjang - Our Story",
  description: "Learn about Jeongsu Sanjang - a family-run Korean restaurant serving authentic soy-marinated crab and traditional Korean cuisine near Gimpo Airport.",
};

export default function AboutPageEN() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header lang="en" />

      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-br from-amber-100 to-orange-100 py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              Our Story
            </h1>
            <p className="text-lg text-amber-700">
              Warm hospitality, authentic Korean flavors
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="bg-amber-50 rounded-2xl p-8 mb-12">
                <h2 className="text-2xl font-bold text-amber-900 mb-6 text-center">
                  &ldquo;Heartfelt Korean Dining&rdquo;
                </h2>
                <div className="space-y-4 text-gray-700 text-center">
                  <p>
                    Jeongsu Sanjang serves warm, home-style Korean meals.
                  </p>
                  <p>
                    We prepare fresh side dishes every day with care.
                  </p>
                  <p>
                    Our signature dishes are soy-marinated crab and grilled fish.
                  </p>
                  <p>
                    We welcome guests like family.
                  </p>
                </div>
              </div>

              {/* What Makes Us Special */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  What Makes Us Special
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-amber-500">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">🦀 Fresh Ingredients</h3>
                    <p className="text-gray-600">
                      We source the freshest blue crabs and fish daily. Our ingredients come from trusted local suppliers who share our commitment to quality.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-amber-500">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">🍚 Full Korean Table</h3>
                    <p className="text-gray-600">
                      Experience the traditional &quot;Hanjeongsik&quot; - a full table meal with numerous side dishes. This is how Koreans really eat at home!
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-amber-500">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">❤️ Family Atmosphere</h3>
                    <p className="text-gray-600">
                      We treat every guest like family. Our warm service and cozy atmosphere make your dining experience memorable.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-amber-500">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">📍 Easy Access</h3>
                    <p className="text-gray-600">
                      Located just 20 minutes from Gimpo International Airport, we&apos;re the perfect stop for travelers wanting authentic Korean food.
                    </p>
                  </div>
                </div>
              </div>

              {/* About Ganjang Gejang */}
              <div className="bg-blue-50 rounded-2xl p-8 mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
                  🏆 About Ganjang Gejang
                </h2>
                <p className="text-gray-700 mb-4">
                  <strong>Ganjang Gejang</strong> is considered one of Korea&apos;s finest delicacies.
                  This dish has been enjoyed by Koreans for centuries and is often served at special occasions and celebrations.
                </p>
                <p className="text-gray-700 mb-4">
                  The dish earned its nickname <strong>&quot;Rice Thief&quot;</strong> because the rich, savory flavor makes you want to eat endless bowls of rice.
                  It&apos;s truly addictive!
                </p>
                <p className="text-gray-700">
                  At Jeongsu Sanjang, we use a traditional family recipe passed down through generations to create the perfect balance of salty, sweet, and umami flavors.
                </p>
              </div>

              {/* Values */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <span className="text-4xl mb-4 block">🦀</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Freshness</h3>
                  <p className="text-gray-600">
                    Daily sourced crabs and fish for the best quality
                  </p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <span className="text-4xl mb-4 block">🍚</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Tradition</h3>
                  <p className="text-gray-600">
                    Authentic recipes passed down through generations
                  </p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <span className="text-4xl mb-4 block">❤️</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Hospitality</h3>
                  <p className="text-gray-600">
                    Every guest is treated like family
                  </p>
                </div>
              </div>

              {/* Signature */}
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Signature Dishes</h3>
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  <span className="bg-white/20 px-4 py-2 rounded-full">Ganjang Gejang (Soy Crab)</span>
                  <span className="bg-white/20 px-4 py-2 rounded-full">Yangnyeom Gejang (Spicy Crab)</span>
                  <span className="bg-white/20 px-4 py-2 rounded-full">Grilled Fish</span>
                  <span className="bg-white/20 px-4 py-2 rounded-full">Crab Stew</span>
                </div>
                <Link
                  href="/en/menu"
                  className="inline-block px-6 py-2 bg-white text-amber-700 rounded-full font-semibold hover:bg-amber-100 transition-colors"
                >
                  View Our Menu
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer lang="en" />
    </div>
  );
}
