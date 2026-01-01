interface CrabSeasonBannerProps {
  lang: "ko" | "en";
}

export default function CrabSeasonBanner({ lang }: CrabSeasonBannerProps) {
  const content = {
    ko: {
      title: "꽃게 제철 안내",
      spring: "봄철 (4월~6월)",
      springDesc: "알이 꽉 찬 암게가 최고!",
      fall: "가을철 (9월~11월)",
      fallDesc: "살이 통통한 수게가 일품!",
      tip: "제철 꽃게로 만든 간장게장의 진한 맛을 경험하세요.",
    },
    en: {
      title: "🦀 Blue Crab Season Guide",
      spring: "Spring Season (Apr - Jun)",
      springDesc: "Female crabs with rich roe - Absolutely divine!",
      fall: "Fall Season (Sep - Nov)",
      fallDesc: "Male crabs with plump, sweet meat!",
      tip: "Experience the authentic taste of soy-marinated crab made with peak-season blue crabs.",
    },
  };

  const t = content[lang];

  return (
    <section className="bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8">
          {t.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Spring */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-pink-200">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-4xl">🌸</span>
              <h3 className="text-xl font-bold text-pink-700">{t.spring}</h3>
            </div>
            <p className="text-gray-700">{t.springDesc}</p>
            {lang === "en" && (
              <p className="text-sm text-pink-600 mt-2 italic">
                Female crab roe is a prized delicacy in Korea!
              </p>
            )}
          </div>

          {/* Fall */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-4xl">🍂</span>
              <h3 className="text-xl font-bold text-orange-700">{t.fall}</h3>
            </div>
            <p className="text-gray-700">{t.fallDesc}</p>
            {lang === "en" && (
              <p className="text-sm text-orange-600 mt-2 italic">
                The meat is at its sweetest and most flavorful!
              </p>
            )}
          </div>
        </div>

        <p className="text-center text-gray-600 mt-8 italic">{t.tip}</p>

        {lang === "en" && (
          <div className="mt-6 text-center">
            <p className="text-sm text-blue-700 bg-blue-100 inline-block px-4 py-2 rounded-full">
              💡 Pro tip: Ask our staff about today&apos;s crab freshness and recommendations!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
