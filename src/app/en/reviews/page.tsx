import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewCard from "@/components/ReviewCard";
import { reviews } from "@/data/menu";
import Link from "next/link";

export const metadata = {
  title: "Reviews | Jeongsu Sanjang - What Guests Say",
  description: "Read reviews about Jeongsu Sanjang Korean restaurant. Loved by locals for delicious food, fresh ingredients, and great value.",
};

export default function ReviewsPageEN() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header lang="en" />

      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-br from-amber-100 to-orange-100 py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              What Guests Say
            </h1>
            <p className="text-lg text-amber-700">
              Reviews from our valued customers
            </p>
          </div>
        </section>

        {/* Review Source Note */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-gray-600">
              These reviews are collected from <strong>Naver</strong> - Korea&apos;s largest local review platform.
              <br />
              <span className="text-sm text-gray-500">Similar to Yelp or TripAdvisor in the US</span>
            </p>
          </div>
        </section>

        {/* Highlight Stats */}
        <section className="py-12 bg-amber-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Top Rated Categories
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <span className="text-5xl block mb-3">🏆</span>
                <p className="text-4xl font-bold text-amber-700">36</p>
                <p className="text-gray-700 font-medium">Delicious Food</p>
                <p className="text-gray-500 text-sm mt-1">#1 rated category</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <span className="text-5xl block mb-3">🌿</span>
                <p className="text-4xl font-bold text-amber-700">21</p>
                <p className="text-gray-700 font-medium">Fresh Ingredients</p>
                <p className="text-gray-500 text-sm mt-1">Quality you can taste</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <span className="text-5xl block mb-3">💰</span>
                <p className="text-4xl font-bold text-amber-700">19</p>
                <p className="text-gray-700 font-medium">Great Value</p>
                <p className="text-gray-500 text-sm mt-1">Worth every won</p>
              </div>
            </div>
          </div>
        </section>

        {/* All Reviews */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                What People Love About Us
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                Based on Naver review analytics
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {reviews.en.map((review, index) => (
                <ReviewCard key={review.text} text={review.text} count={review.count} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Style */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Visitor Highlights
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-amber-500">
                <p className="text-gray-700 italic mb-4">
                  &quot;The Ganjang Gejang was incredible! I finally understand why Koreans call it &apos;rice thief&apos;. I ate 3 bowls of rice!&quot;
                </p>
                <p className="text-amber-700 font-medium">- Food Lover</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-amber-500">
                <p className="text-gray-700 italic mb-4">
                  &quot;So many side dishes! The full Korean table experience was amazing. Everything was fresh and delicious.&quot;
                </p>
                <p className="text-amber-700 font-medium">- Travel Enthusiast</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-amber-500">
                <p className="text-gray-700 italic mb-4">
                  &quot;Perfect stop before my flight at Gimpo. Authentic Korean food, friendly service, easy parking.&quot;
                </p>
                <p className="text-amber-700 font-medium">- International Traveler</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-amber-500">
                <p className="text-gray-700 italic mb-4">
                  &quot;The grilled fish was perfectly cooked - crispy outside, tender inside. Will definitely come back!&quot;
                </p>
                <p className="text-amber-700 font-medium">- Seafood Lover</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-amber-700 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold mb-4">Experience It Yourself!</h3>
            <p className="mb-6">Join our happy customers and discover why they keep coming back</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/en/menu"
                className="px-6 py-3 bg-white text-amber-700 rounded-full font-semibold hover:bg-amber-100 transition-colors"
              >
                View Menu
              </Link>
              <Link
                href="/en/visit"
                className="px-6 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-amber-700 transition-colors"
              >
                Get Directions
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer lang="en" />
    </div>
  );
}
