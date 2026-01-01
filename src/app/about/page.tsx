import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "이야기 | 정수산장",
  description: "정수산장의 이야기 - 정성 가득한 한식 밥상을 지향합니다",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header lang="ko" />

      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-br from-amber-100 to-orange-100 py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              정수산장 이야기
            </h1>
            <p className="text-lg text-amber-700">
              정성을 담은 한식, 따뜻한 마음으로 맞이합니다
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="bg-amber-50 rounded-2xl p-8 mb-12">
                <h2 className="text-2xl font-bold text-amber-900 mb-6 text-center">
                  &ldquo;정성 가득한 한식 밥상&rdquo;
                </h2>
                <div className="space-y-4 text-gray-700 text-center">
                  <p>
                    정수산장은 정성 가득한 한식 밥상을 지향합니다.
                  </p>
                  <p>
                    매일 신선한 재료로 정갈한 반찬을 준비하며,
                  </p>
                  <p>
                    간장게장과 생선구이를 대표 메뉴로 선보입니다.
                  </p>
                  <p>
                    가족처럼 따뜻한 마음으로 손님을 맞이합니다.
                  </p>
                </div>
              </div>

              {/* Values */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <span className="text-4xl mb-4 block">🦀</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">신선한 재료</h3>
                  <p className="text-gray-600">
                    매일 신선한 꽃게와 생선을 엄선하여 사용합니다
                  </p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <span className="text-4xl mb-4 block">🍚</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">정갈한 한상</h3>
                  <p className="text-gray-600">
                    다양한 밑반찬으로 풍성한 한상을 차려드립니다
                  </p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <span className="text-4xl mb-4 block">❤️</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">따뜻한 마음</h3>
                  <p className="text-gray-600">
                    가족처럼 정성을 담아 손님을 맞이합니다
                  </p>
                </div>
              </div>

              {/* Signature */}
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">대표 메뉴</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="bg-white/20 px-4 py-2 rounded-full">간장게장</span>
                  <span className="bg-white/20 px-4 py-2 rounded-full">양념게장</span>
                  <span className="bg-white/20 px-4 py-2 rounded-full">생선구이</span>
                  <span className="bg-white/20 px-4 py-2 rounded-full">꽃게탕</span>
                </div>
                <Link
                  href="/menu"
                  className="inline-block mt-6 px-6 py-2 bg-white text-amber-700 rounded-full font-semibold hover:bg-amber-100 transition-colors"
                >
                  메뉴 보러가기
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer lang="ko" />
    </div>
  );
}
