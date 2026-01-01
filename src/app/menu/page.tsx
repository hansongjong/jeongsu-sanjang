import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuCard from "@/components/MenuCard";
import CrabSeasonBanner from "@/components/CrabSeasonBanner";
import { menuItems } from "@/data/menu";

export const metadata = {
  title: "메뉴 | 정수산장",
  description: "정수산장의 대표 메뉴 - 간장게장, 양념게장, 생선구이, 꽃게탕",
};

export default function MenuPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header lang="ko" />

      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-br from-amber-100 to-orange-100 py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              메뉴
            </h1>
            <p className="text-lg text-amber-700">
              신선한 재료로 정성껏 준비하는 정수산장의 메뉴
            </p>
          </div>
        </section>

        {/* Menu Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems.map((item) => (
                <MenuCard key={item.id} item={item} lang="ko" />
              ))}
            </div>
          </div>
        </section>

        {/* Special Note */}
        <section className="py-12 bg-amber-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">
                🍚 정갈한 밑반찬
              </h3>
              <p className="text-gray-700 mb-4">
                모든 정식에는 매일 정성껏 준비하는 다양한 밑반찬이 함께 제공됩니다.
              </p>
              <p className="text-sm text-gray-500">
                계절과 재료 상황에 따라 밑반찬 구성이 달라질 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* Crab Season */}
        <CrabSeasonBanner lang="ko" />

        {/* Contact CTA */}
        <section className="py-12 bg-amber-700 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold mb-4">예약 및 문의</h3>
            <p className="mb-6">단체 예약, 메뉴 문의는 전화로 연락해 주세요</p>
            <a
              href="tel:+82-507-1333-9399"
              className="inline-block px-8 py-3 bg-white text-amber-700 rounded-full font-semibold hover:bg-amber-100 transition-colors"
            >
              📞 0507-1333-9399
            </a>
          </div>
        </section>
      </main>

      <Footer lang="ko" />
    </div>
  );
}
