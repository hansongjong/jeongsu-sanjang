import Link from "next/link";
import Image from "next/image";

interface HeroProps {
  lang: "ko" | "en";
}

export default function Hero({ lang }: HeroProps) {
  const prefix = lang === "en" ? "/en" : "";

  if (lang === "en") {
    return (
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/restaurant-hero.png"
            alt="Jeongsu Sanjang Restaurant"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
              Jeongsu Sanjang
            </h1>

            <p className="text-xl md:text-2xl text-amber-300 mb-4 font-medium">
              Korean Soy Crab & Grilled Fish Restaurant
            </p>

            <p className="text-lg text-amber-200 mb-2 italic">
              Must-Try Korean Delicacy · A True Taste of Korea
            </p>

            <p className="text-lg text-gray-200 mb-6">
              Experience the authentic taste of Korea with our signature dishes
            </p>

            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-amber-500/30">
              <p className="text-amber-300 font-medium">
                Signature: Soy Crab | Spicy Crab | Grilled Fish | Crab Stew
              </p>
            </div>

            <div className="mb-8 space-y-2">
              <p className="text-white font-medium">
                ✈️ Just 20 minutes from Gimpo International Airport
              </p>
              <p className="text-amber-300 font-medium text-sm">
                🦀 Blue Crab Season: Spring (Apr-Jun) & Fall (Sep-Nov)
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/en/menu"
                className="px-8 py-4 bg-amber-600 text-white rounded-full font-semibold hover:bg-amber-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center"
              >
                View Menu
              </Link>
              <a
                href="tel:+82-507-1333-9399"
                className="px-8 py-4 bg-white/20 backdrop-blur text-white border-2 border-white rounded-full font-semibold hover:bg-white hover:text-amber-800 transition-all shadow-md text-center"
              >
                📞 Call Now
              </a>
              <Link
                href="/en/visit"
                className="px-8 py-4 bg-amber-800/80 text-white rounded-full font-semibold hover:bg-amber-800 transition-all shadow-md text-center"
              >
                📍 Get Directions
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/restaurant-hero.png"
          alt="정수산장"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
            정수산장
          </h1>

          <p className="text-xl md:text-2xl text-amber-300 mb-4 font-medium">
            김포 간장게장 · 생선구이 전문점
          </p>

          <p className="text-lg text-gray-200 mb-6">
            정갈한 밑반찬과 함께하는 행복한 밥상
          </p>

          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-amber-500/30">
            <p className="text-amber-300 font-medium">
              대표 메뉴: 간장게장 | 양념게장 | 생선구이 | 꽃게탕
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`${prefix}/menu`}
              className="px-8 py-4 bg-amber-600 text-white rounded-full font-semibold hover:bg-amber-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center"
            >
              메뉴 보기
            </Link>
            <a
              href="tel:+82-507-1333-9399"
              className="px-8 py-4 bg-white/20 backdrop-blur text-white border-2 border-white rounded-full font-semibold hover:bg-white hover:text-amber-800 transition-all shadow-md text-center"
            >
              📞 전화하기
            </a>
            <Link
              href={`${prefix}/visit`}
              className="px-8 py-4 bg-amber-800/80 text-white rounded-full font-semibold hover:bg-amber-800 transition-all shadow-md text-center"
            >
              📍 위치 보기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
