import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Visit | Jeongsu Sanjang - Location & Directions",
  description: "Find Jeongsu Sanjang Korean restaurant. Just 20 minutes from Gimpo Airport. Address: 41, Punggok-ro, Gochon-eup, Gimpo-si, Korea",
};

export default function VisitPageEN() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header lang="en" />

      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-br from-amber-100 to-orange-100 py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              Visit Us
            </h1>
            <p className="text-lg text-amber-700">
              Easy to find, worth the visit
            </p>
            <p className="text-amber-600 mt-2">
              ✈️ Just 20 minutes from Gimpo International Airport
            </p>
          </div>
        </section>

        {/* Airport Info - Tourist Focused */}
        <section className="py-8 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col md:flex-row items-center gap-6">
              <span className="text-6xl">✈️</span>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  Perfect for Travelers!
                </h3>
                <p className="text-gray-700">
                  Located about 20 minutes from <strong>Gimpo International Airport</strong>.
                  A great stop for authentic Korean food before or after your flight!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.2!2d126.76!3d37.59!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDM1JzI0LjAiTiAxMjbCsDQ1JzM2LjAiRQ!5e0!3m2!1sen!2skr!4v1700000000000!5m2!1sen!2skr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Jeongsu Sanjang Location"
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-4 justify-center">
              <a
                href="https://maps.google.com/maps?q=41+Punggok-ro+Gochon-eup+Gimpo-si+Korea"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors"
              >
                Open in Google Maps
              </a>
              <a
                href="https://map.kakao.com/link/search/정수산장"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-yellow-500 text-black rounded-lg text-sm hover:bg-yellow-400 transition-colors"
              >
                Open in Kakao Map
              </a>
            </div>
          </div>
        </section>

        {/* Info Cards */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Address */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  📍 Address
                </h3>
                <p className="text-gray-700 text-lg mb-2">
                  41, Punggok-ro, Gochon-eup, Gimpo-si, Korea
                </p>
                <p className="text-gray-500 text-sm mb-4">
                  경기 김포시 고촌읍 풍곡로 41 (Korean)
                </p>
                <div className="bg-amber-50 rounded-lg p-3 text-sm">
                  <p className="text-amber-800">
                    <strong>For Taxi:</strong> Show this to your driver:
                  </p>
                  <p className="text-lg font-bold text-amber-900 mt-1">
                    &quot;정수산장, 김포시 고촌읍 풍곡로 41&quot;
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  📞 Contact
                </h3>
                <a
                  href="tel:+82-507-1333-9399"
                  className="text-2xl font-bold text-amber-700 hover:text-amber-800 transition-colors block mb-2"
                >
                  +82-507-1333-9399
                </a>
                <p className="text-gray-500 text-sm">
                  Reservations and inquiries welcome
                </p>
                <p className="text-gray-400 text-xs mt-2">
                  * Limited English, but we&apos;ll do our best!
                </p>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  🕐 Hours
                </h3>
                <p className="text-gray-700 text-lg">
                  Daily: 11:00 AM - 9:00 PM
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Last order: 8:00 PM
                </p>
              </div>

              {/* Parking */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  🚗 Parking
                </h3>
                <p className="text-gray-700 text-lg">
                  Free Parking Available
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Spacious parking lot on premises
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Get Here */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              How to Get Here
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-blue-900 mb-3">From Gimpo Airport</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>🚕 <strong>Taxi:</strong> About 20 min, ~15,000 KRW</li>
                  <li>🚌 <strong>Bus:</strong> Airport Bus → Gochon Transfer</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-bold text-green-900 mb-3">From Seoul</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>🚇 <strong>Subway:</strong> Airport Railroad to Gimpo Airport, then taxi</li>
                  <li>🚕 <strong>Taxi:</strong> About 40-50 min from central Seoul</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-amber-700 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold mb-4">Make a Reservation</h3>
            <p className="mb-6">Call us to reserve your table</p>
            <a
              href="tel:+82-507-1333-9399"
              className="inline-block px-8 py-4 bg-white text-amber-700 rounded-full font-semibold text-lg hover:bg-amber-100 transition-colors"
            >
              📞 Call Now
            </a>
          </div>
        </section>
      </main>

      <Footer lang="en" />
    </div>
  );
}
