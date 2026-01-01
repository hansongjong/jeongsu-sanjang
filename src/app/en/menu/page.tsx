import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuCard from "@/components/MenuCard";
import CrabSeasonBanner from "@/components/CrabSeasonBanner";
import { menuItems } from "@/data/menu";

export const metadata = {
  title: "Menu | Jeongsu Sanjang - Korean Soy Crab Restaurant",
  description: "Authentic Korean menu featuring Ganjang Gejang (soy crab), Yangnyeom Gejang (spicy crab), grilled fish, and crab stew. Must-try dishes near Gimpo Airport.",
};

export default function MenuPageEN() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header lang="en" />

      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-br from-amber-100 to-orange-100 py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              Our Menu
            </h1>
            <p className="text-lg text-amber-700">
              Fresh ingredients, authentic Korean flavors
            </p>
            <p className="text-sm text-amber-600 mt-2">
              All dishes come with a variety of traditional Korean side dishes (Banchan)
            </p>
          </div>
        </section>

        {/* How to Eat Guide */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-amber-50 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-amber-900 mb-4 text-center">
                🦀 How to Enjoy Ganjang Gejang
              </h2>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div className="bg-white rounded-xl p-4">
                  <span className="text-3xl block mb-2">1️⃣</span>
                  <p className="text-sm text-gray-700">Open the crab shell gently</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <span className="text-3xl block mb-2">2️⃣</span>
                  <p className="text-sm text-gray-700">Scoop the roe and meat with rice</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <span className="text-3xl block mb-2">3️⃣</span>
                  <p className="text-sm text-gray-700">Suck the meat from the legs</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <span className="text-3xl block mb-2">4️⃣</span>
                  <p className="text-sm text-gray-700">Mix leftover sauce with rice!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems.map((item) => (
                <MenuCard key={item.id} item={item} lang="en" />
              ))}
            </div>
          </div>
        </section>

        {/* Banchan Note */}
        <section className="py-12 bg-amber-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">
                🍚 Korean Side Dishes (Banchan)
              </h3>
              <p className="text-gray-700 mb-4">
                Every meal includes an array of complimentary Korean side dishes,
                freshly prepared each day. This is the authentic Korean dining experience!
              </p>
              <div className="flex flex-wrap justify-center gap-2 text-sm">
                <span className="bg-amber-100 px-3 py-1 rounded-full">Kimchi</span>
                <span className="bg-amber-100 px-3 py-1 rounded-full">Pickled Vegetables</span>
                <span className="bg-amber-100 px-3 py-1 rounded-full">Seasoned Greens</span>
                <span className="bg-amber-100 px-3 py-1 rounded-full">Tofu</span>
                <span className="bg-amber-100 px-3 py-1 rounded-full">& More!</span>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Side dishes vary by season and availability
              </p>
            </div>
          </div>
        </section>

        {/* Crab Season */}
        <CrabSeasonBanner lang="en" />

        {/* Contact CTA */}
        <section className="py-12 bg-amber-700 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience?</h3>
            <p className="mb-6">Call us for reservations or menu inquiries</p>
            <a
              href="tel:+82-507-1333-9399"
              className="inline-block px-8 py-3 bg-white text-amber-700 rounded-full font-semibold hover:bg-amber-100 transition-colors"
            >
              📞 +82-507-1333-9399
            </a>
            <p className="text-amber-200 text-sm mt-4">
              English speaking assistance available
            </p>
          </div>
        </section>
      </main>

      <Footer lang="en" />
    </div>
  );
}
