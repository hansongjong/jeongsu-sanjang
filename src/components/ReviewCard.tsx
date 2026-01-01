interface ReviewCardProps {
  text: string;
  count: number;
  index: number;
}

export default function ReviewCard({ text, count, index }: ReviewCardProps) {
  const maxCount = 36;
  const percentage = (count / maxCount) * 100;

  const colors = [
    "from-amber-400 to-orange-500",
    "from-orange-400 to-red-400",
    "from-yellow-400 to-amber-500",
    "from-amber-500 to-yellow-600",
    "from-orange-300 to-amber-400",
    "from-yellow-300 to-orange-400",
    "from-amber-300 to-yellow-400",
    "from-orange-400 to-yellow-500",
  ];

  return (
    <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-800 font-medium">✔ {text}</span>
        <span className="text-amber-700 font-bold">({count})</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${colors[index % colors.length]} transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
