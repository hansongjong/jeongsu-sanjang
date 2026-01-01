import { MenuItem } from "@/data/menu";

interface MenuCardProps {
  item: MenuItem;
  lang: "ko" | "en";
}

export default function MenuCard({ item, lang }: MenuCardProps) {
  const name = lang === "ko" ? item.nameKo : item.nameEn;
  const description = lang === "ko" ? item.descriptionKo : item.descriptionEn;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      {/* Image placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
        <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
          {item.id.includes("gejang") ? "🦀" : item.id.includes("tang") ? "🍲" : item.id.includes("gui") ? "🐟" : "🍚"}
        </span>
        {item.isSignature && (
          <div className="absolute top-3 right-3 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            {lang === "ko" ? "시그니처" : "SIGNATURE"}
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          {item.price && (
            <span className="text-amber-700 font-semibold text-sm bg-amber-50 px-3 py-1 rounded-full">
              {lang === "ko" ? item.price : item.price.replace("원", "KRW").replace("~", " / ")}
            </span>
          )}
        </div>

        <p className="text-gray-600 leading-relaxed">{description}</p>

        {/* Special note for crab dishes */}
        {item.id.includes("gejang") && lang === "en" && (
          <div className="mt-4 p-3 bg-amber-50 rounded-lg text-sm text-amber-800">
            <p className="font-medium">🏆 Korean&apos;s Favorite Delicacy</p>
            <p className="text-xs mt-1">Often called &quot;Rice Thief&quot; - so delicious you&apos;ll eat bowl after bowl!</p>
          </div>
        )}
      </div>
    </div>
  );
}
