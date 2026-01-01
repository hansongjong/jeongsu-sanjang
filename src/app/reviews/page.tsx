import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewCard from "@/components/ReviewCard";
import { reviews } from "@/data/menu";
import Link from "next/link";

export const metadata = {
  title: "리뷰 | 정수산장",
  description: "정수산장 고객 리뷰 - 네이버 리뷰 기반 좋았던 점",
};

export default function ReviewsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header lang="ko" />

      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-br from-amber-100 to-orange-100 py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              고객 리뷰
            </h1>
            <p className="text-lg text-amber-700">
              정수산장을 방문해주신 고객님들의 소중한 후기
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-gray-600 mb-2">네이버 리뷰 기반</p>
              <h2 className="text-2xl font-bold text-gray-900">
                &ldquo;좋았던 점&rdquo; 분석
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {reviews.ko.map((review, index) => (
                <ReviewCard key={review.text} text={review.text} count={review.count} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Highlight */}
        <section className="py-12 bg-amber-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <span className="text-4xl block mb-2">🏆</span>
                <p className="text-3xl font-bold text-amber-700">36</p>
                <p className="text-gray-600">음식이 맛있어요</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <span className="text-4xl block mb-2">🌿</span>
                <p className="text-3xl font-bold text-amber-700">21</p>
                <p className="text-gray-600">재료가 신선해요</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <span className="text-4xl block mb-2">💰</span>
                <p className="text-3xl font-bold text-amber-700">19</p>
                <p className="text-gray-600">가성비 좋아요</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-amber-700 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold mb-4">직접 경험해 보세요!</h3>
            <p className="mb-6">정수산장의 맛있는 음식을 직접 맛보러 오세요</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/menu"
                className="px-6 py-3 bg-white text-amber-700 rounded-full font-semibold hover:bg-amber-100 transition-colors"
              >
                메뉴 보기
              </Link>
              <Link
                href="/visit"
                className="px-6 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-amber-700 transition-colors"
              >
                오시는 길
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer lang="ko" />
    </div>
  );
}
