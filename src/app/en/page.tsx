import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import MenuCard from "@/components/MenuCard";
import ReviewCard from "@/components/ReviewCard";
import CrabSeasonBanner from "@/components/CrabSeasonBanner";
import { menuItems, reviews } from "@/data/menu";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Jeongsu Sanjang | Korean Soy Crab & Grilled Fish Restaurant",
  description: "Must-try Korean delicacy near Gimpo Airport. Experience authentic soy-marinated crab (Ganjang Gejang), grilled fish, and traditional Korean table meals.",
};

export default function HomeEN() {
  const signatureItems = menuItems.filter((item) => item.isSignature);

  return (
    <div className="min-h-screen flex flex-col">
      <Header lang="en" />

      <main className="flex-grow">
        <Hero lang="en" />

        {/* Why Visit Section - Tourist Focused */}
        <section className="py-16 bg-gradient-to-r from-red-50 to-orange-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Travelers Love Us
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-amber-100">
                <span className="text-4xl block mb-3">✈️</span>
                <h3 className="font-bold text-lg mb-2 text-gray-900">Near Gimpo Airport</h3>
                <p className="text-gray-700 text-sm">Just 20 minutes from Gimpo International Airport. Perfect stop before your flight!</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-amber-100">
                <span className="text-4xl block mb-3">🏆</span>
                <h3 className="font-bold text-lg mb-2 text-gray-900">Authentic Experience</h3>
                <p className="text-gray-700 text-sm">Real Korean food loved by locals. No tourist traps, just genuine flavors.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-amber-100">
                <span className="text-4xl block mb-3">🦀</span>
                <h3 className="font-bold text-lg mb-2 text-gray-900">Must-Try Dish</h3>
                <p className="text-gray-700 text-sm">Ganjang Gejang is Korea&apos;s most beloved delicacy. Try it here!</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Ganjang Gejang - Educational */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-amber-50 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-amber-900 mb-6 text-center">
                🦀 What is Ganjang Gejang?
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  <strong>Ganjang Gejang</strong> (간장게장) is raw crab marinated in a savory soy sauce mixture.
                  It&apos;s one of Korea&apos;s most treasured delicacies, often called <strong>&quot;Rice Thief&quot;</strong> (밥도둑)
                  because it&apos;s so delicious that you&apos;ll keep eating bowl after bowl of rice with it!
                </p>
                <p>
                  The dish features fresh blue crabs soaked in a special soy-based marinade for several days.
                  The result is silky, sweet crab meat bursting with umami flavor.
                </p>
                <div className="bg-white rounded-xl p-4 mt-6">
                  <p className="text-amber-800 font-medium text-center">
                    💡 <strong>Pro Tip:</strong> Mix the crab roe with rice for an unforgettable flavor experience!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Signature Menu Preview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Signature Dishes
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience the finest Korean seafood cuisine, prepared with care and tradition
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {signatureItems.map((item) => (
                <MenuCard key={item.id} item={item} lang="en" />
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/en/menu"
                className="inline-block px-8 py-3 bg-amber-700 text-white rounded-full font-semibold hover:bg-amber-800 transition-colors"
              >
                View Full Menu
              </Link>
            </div>
          </div>
        </section>

        {/* Food Gallery */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Delicious Dishes
              </h2>
              <p className="text-gray-400">
                Fresh ingredients, authentic flavors, unforgettable experience
              </p>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/food-collage.png"
                alt="Jeongsu Sanjang Food - Soy Crab, Grilled Fish, Crab Stew, Korean Side Dishes"
                fill
                className="object-cover"
              />
            </div>

            <div className="text-center mt-8">
              <a
                href="https://blog.naver.com/smarthb-homaesil"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-colors"
              >
                📷 See More Photos on Our Blog
              </a>
            </div>
          </div>
        </section>

        {/* Crab Season */}
        <CrabSeasonBanner lang="en" />

        {/* Reviews Preview */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Guests Say
              </h2>
              <p className="text-gray-600">
                Based on Naver reviews (Korea&apos;s largest review platform)
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {reviews.en.slice(0, 6).map((review, index) => (
                <ReviewCard key={review.text} text={review.text} count={review.count} index={index} />
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/en/reviews"
                className="inline-block px-6 py-2 border-2 border-amber-700 text-amber-700 rounded-full font-semibold hover:bg-amber-700 hover:text-white transition-colors"
              >
                See All Reviews
              </Link>
            </div>
          </div>
        </section>

        {/* Location Preview */}
        <section className="py-16 bg-amber-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Visit Us
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-xl text-gray-700 mb-2">
                📍 41, Punggok-ro, Gochon-eup, Gimpo-si, Korea
              </p>
              <p className="text-amber-600 font-medium mb-4">
                ✈️ 20 minutes from Gimpo International Airport
              </p>
              <p className="text-lg text-gray-600 mb-6">
                📞 +82-507-1333-9399
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+82-507-1333-9399"
                  className="px-6 py-3 bg-amber-700 text-white rounded-full font-semibold hover:bg-amber-800 transition-colors"
                >
                  Call Now
                </a>
                <Link
                  href="/en/visit"
                  className="px-6 py-3 border-2 border-amber-700 text-amber-700 rounded-full font-semibold hover:bg-amber-700 hover:text-white transition-colors"
                >
                  Get Directions
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
