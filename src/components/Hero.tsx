import Link from "next/link";

interface HeroProps {
  lang: "ko" | "en";
}

export default function Hero({ lang }: HeroProps) {
  const prefix = lang === "en" ? "/en" : "";

  if (lang === "en") {
    return (
      <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 min-h-[90vh] flex items-center">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-4 tracking-tight">
              Jeongsu Sanjang
            </h1>

            <p className="text-xl md:text-2xl text-amber-700 mb-4 font-medium">
              Korean Soy Crab & Grilled Fish Restaurant
            </p>

            <p className="text-lg text-amber-600 mb-2 italic">
              Must-Try Korean Delicacy · A True Taste of Korea
            </p>

            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Experience the authentic taste of Korea with our signature dishes
            </p>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-xl mx-auto shadow-lg">
              <p className="text-amber-800 font-medium">
                Signature: Soy Crab | Spicy Crab | Grilled Fish | Crab Stew
              </p>
            </div>

            <div className="mb-8 space-y-2">
              <p className="text-amber-700 font-medium">
                📍 Just 20 minutes from Gimpo International Airport
              </p>
              <p className="text-orange-600 font-medium text-sm">
                🦀 Blue Crab Season: Spring (Apr-Jun) & Fall (Sep-Nov) - The Best Time to Visit!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/en/menu"
                className="px-8 py-4 bg-amber-700 text-white rounded-full font-semibold hover:bg-amber-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                View Menu
              </Link>
              <a
                href="tel:+82-507-1333-9399"
                className="px-8 py-4 bg-white text-amber-700 border-2 border-amber-700 rounded-full font-semibold hover:bg-amber-50 transition-all shadow-md"
              >
                📞 Call Now
              </a>
              <Link
                href="/en/visit"
                className="px-8 py-4 bg-amber-100 text-amber-800 rounded-full font-semibold hover:bg-amber-200 transition-all shadow-md"
              >
                📍 Get Directions
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 w-48 h-48 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full text-amber-900">
            <text x="50" y="50" fontSize="60" textAnchor="middle" dominantBaseline="middle">🦀</text>
          </svg>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 min-h-[90vh] flex items-center">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-4 tracking-tight">
            정수산장
          </h1>

          <p className="text-xl md:text-2xl text-amber-700 mb-4 font-medium">
            김포 간장게장 · 생선구이 전문점
          </p>

          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            정갈한 밑반찬과 함께하는 행복한 밥상
          </p>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-xl mx-auto shadow-lg">
            <p className="text-amber-800 font-medium">
              대표 메뉴: 간장게장 | 양념게장 | 생선구이 | 꽃게탕
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={`${prefix}/menu`}
              className="px-8 py-4 bg-amber-700 text-white rounded-full font-semibold hover:bg-amber-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              메뉴 보기
            </Link>
            <a
              href="tel:+82-507-1333-9399"
              className="px-8 py-4 bg-white text-amber-700 border-2 border-amber-700 rounded-full font-semibold hover:bg-amber-50 transition-all shadow-md"
            >
              📞 전화하기
            </a>
            <Link
              href={`${prefix}/visit`}
              className="px-8 py-4 bg-amber-100 text-amber-800 rounded-full font-semibold hover:bg-amber-200 transition-all shadow-md"
            >
              📍 위치 보기
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full text-amber-900">
          <text x="50" y="50" fontSize="60" textAnchor="middle" dominantBaseline="middle">🦀</text>
        </svg>
      </div>
    </section>
  );
}
