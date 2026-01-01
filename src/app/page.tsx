import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import MenuCard from "@/components/MenuCard";
import ReviewCard from "@/components/ReviewCard";
import CrabSeasonBanner from "@/components/CrabSeasonBanner";
import { menuItems, reviews } from "@/data/menu";
import Link from "next/link";

export default function Home() {
  const signatureItems = menuItems.filter((item) => item.isSignature);

  return (
    <div className="min-h-screen flex flex-col">
      <Header lang="ko" />

      <main className="flex-grow">
        <Hero lang="ko" />

        {/* Signature Menu Preview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                대표 메뉴
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                정성을 담아 준비하는 정수산장의 시그니처 메뉴를 만나보세요
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {signatureItems.map((item) => (
                <MenuCard key={item.id} item={item} lang="ko" />
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/menu"
                className="inline-block px-8 py-3 bg-amber-700 text-white rounded-full font-semibold hover:bg-amber-800 transition-colors"
              >
                전체 메뉴 보기
              </Link>
            </div>
          </div>
        </section>

        {/* Crab Season */}
        <CrabSeasonBanner lang="ko" />

        {/* Reviews Preview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                고객 리뷰
              </h2>
              <p className="text-gray-600">
                네이버 리뷰 기반 &quot;좋았던 점&quot;
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {reviews.ko.slice(0, 6).map((review, index) => (
                <ReviewCard key={review.text} text={review.text} count={review.count} index={index} />
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/reviews"
                className="inline-block px-6 py-2 border-2 border-amber-700 text-amber-700 rounded-full font-semibold hover:bg-amber-700 hover:text-white transition-colors"
              >
                리뷰 더 보기
              </Link>
            </div>
          </div>
        </section>

        {/* Location Preview */}
        <section className="py-16 bg-amber-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              오시는 길
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-xl text-gray-700 mb-4">
                📍 경기 김포시 고촌읍 풍곡로 41
              </p>
              <p className="text-lg text-gray-600 mb-6">
                📞 0507-1333-9399
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+82-507-1333-9399"
                  className="px-6 py-3 bg-amber-700 text-white rounded-full font-semibold hover:bg-amber-800 transition-colors"
                >
                  전화하기
                </a>
                <Link
                  href="/visit"
                  className="px-6 py-3 border-2 border-amber-700 text-amber-700 rounded-full font-semibold hover:bg-amber-700 hover:text-white transition-colors"
                >
                  지도 보기
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
