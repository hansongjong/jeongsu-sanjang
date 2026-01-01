import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "오시는 길 | 정수산장",
  description: "정수산장 위치 안내 - 경기 김포시 고촌읍 풍곡로 41",
};

export default function VisitPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header lang="ko" />

      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-br from-amber-100 to-orange-100 py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              오시는 길
            </h1>
            <p className="text-lg text-amber-700">
              정수산장에서 맛있는 식사를 즐겨보세요
            </p>
          </div>
        </section>

        {/* Map */}
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.2!2d126.76!3d37.59!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDM1JzI0LjAiTiAxMjbCsDQ1JzM2LjAiRQ!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="정수산장 위치"
              />
            </div>
          </div>
        </section>

        {/* Info */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Address */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  📍 주소
                </h3>
                <p className="text-gray-700 text-lg mb-2">
                  경기 김포시 고촌읍 풍곡로 41
                </p>
                <p className="text-gray-500 text-sm">
                  (고촌읍, 정수산장)
                </p>
                <a
                  href="https://map.naver.com/p/search/정수산장"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-green-500 text-white rounded-lg text-sm hover:bg-green-600 transition-colors"
                >
                  네이버 지도에서 보기
                </a>
              </div>

              {/* Contact */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  📞 연락처
                </h3>
                <a
                  href="tel:+82-507-1333-9399"
                  className="text-2xl font-bold text-amber-700 hover:text-amber-800 transition-colors"
                >
                  0507-1333-9399
                </a>
                <p className="text-gray-500 text-sm mt-2">
                  예약 및 문의 환영합니다
                </p>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  🕐 영업시간
                </h3>
                <p className="text-gray-700 text-lg">
                  매일 11:00 - 21:00
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  라스트오더 20:00
                </p>
              </div>

              {/* Parking */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  🚗 주차
                </h3>
                <p className="text-gray-700 text-lg">
                  주차 가능
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  넓은 주차공간이 마련되어 있습니다
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-amber-700 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold mb-4">지금 바로 예약하세요</h3>
            <a
              href="tel:+82-507-1333-9399"
              className="inline-block px-8 py-4 bg-white text-amber-700 rounded-full font-semibold text-lg hover:bg-amber-100 transition-colors"
            >
              📞 전화 예약
            </a>
          </div>
        </section>
      </main>

      <Footer lang="ko" />
    </div>
  );
}
