import Link from "next/link";

interface FooterProps {
  lang: "ko" | "en";
}

export default function Footer({ lang }: FooterProps) {
  const content = {
    ko: {
      brand: "정수산장",
      tagline: "김포 간장게장 · 생선구이 전문점",
      address: "경기 김포시 고촌읍 풍곡로 41",
      phone: "0507-1333-9399",
      hours: "영업시간",
      hoursDetail: "매일 11:00 - 21:00",
      copyright: "© 2024 정수산장. All rights reserved.",
      links: {
        menu: "메뉴",
        about: "이야기",
        visit: "오시는 길",
      },
    },
    en: {
      brand: "Jeongsu Sanjang",
      tagline: "Korean Soy Crab & Grilled Fish Restaurant",
      address: "41, Punggok-ro, Gochon-eup, Gimpo-si, Korea",
      phone: "+82-507-1333-9399",
      hours: "Hours",
      hoursDetail: "Daily 11:00 AM - 9:00 PM",
      copyright: "© 2024 Jeongsu Sanjang. All rights reserved.",
      links: {
        menu: "Menu",
        about: "About",
        visit: "Visit",
      },
    },
  };

  const t = content[lang];
  const prefix = lang === "en" ? "/en" : "";

  return (
    <footer className="bg-amber-900 text-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">{t.brand}</h3>
            <p className="text-amber-200 text-sm">{t.tagline}</p>
            {lang === "en" && (
              <p className="text-amber-300 text-xs mt-2 italic">
                Must-Try Korean Delicacy · 20 min from Gimpo Airport
              </p>
            )}
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">{lang === "ko" ? "연락처" : "Contact"}</h4>
            <p className="text-amber-200 text-sm mb-1">{t.address}</p>
            <p className="text-amber-200 text-sm mb-3">
              <a href="tel:+82-507-1333-9399" className="hover:text-white transition-colors">
                {t.phone}
              </a>
            </p>
            <p className="text-amber-200 text-sm">
              <span className="font-medium">{t.hours}:</span> {t.hoursDetail}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-3">{lang === "ko" ? "바로가기" : "Quick Links"}</h4>
            <div className="flex flex-col space-y-2">
              <Link href={`${prefix}/menu`} className="text-amber-200 hover:text-white text-sm transition-colors">
                {t.links.menu}
              </Link>
              <Link href={`${prefix}/about`} className="text-amber-200 hover:text-white text-sm transition-colors">
                {t.links.about}
              </Link>
              <Link href={`${prefix}/visit`} className="text-amber-200 hover:text-white text-sm transition-colors">
                {t.links.visit}
              </Link>
              <a
                href="https://blog.naver.com/smarthb-homaesil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-200 hover:text-white text-sm transition-colors flex items-center gap-1"
              >
                {lang === "ko" ? "📝 블로그 (사진/후기)" : "📝 Blog (Photos & Reviews)"}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-300 text-sm">
          {t.copyright}
        </div>
      </div>
    </footer>
  );
}
