import Link from "next/link";
import RatingStars from "./RatingStars";

interface TourCardProps {
  id?: string;
  title: string;
  image?: string;
  duration: string;
  price: string;
  features: string[];
  description: string;
  rating?: number;
  reviewCount?: number;
}

export default function TourCard({
  id = "1",
  title,
  image,
  duration,
  price,
  features,
  description,
  rating = 4.8,
  reviewCount = 24,
}: TourCardProps) {
  return (
    <Link href={`/Tours/${id}`}>
      <div className="group animate-fadeInUp flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border-2 border-white/20 bg-gradient-to-b from-white/10 to-white/5 shadow-xl transition-all duration-500 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 hover:scale-105 backdrop-blur-xl">
        {/* Изображение */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950">
          {image ? (
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-125"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <svg
                className="h-20 w-20 text-cyan-400/40"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          )}
          {/* Метка длительности */}
          <div className="absolute top-4 right-4 animate-bounceScale rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-4 py-1.5 text-xs font-bold text-white shadow-lg shadow-cyan-500/50">
            ⏱️ {duration}
          </div>
        </div>

        {/* Содержание */}
        <div className="flex flex-1 flex-col p-6 space-y-3">
          <h3 className="line-clamp-2 text-lg font-bold bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent transition-all duration-300 group-hover:from-cyan-300 group-hover:via-blue-300 group-hover:to-cyan-300">
            {title}
          </h3>

          {/* Рейтинг */}
          <div>
            <RatingStars rating={rating} count={reviewCount} size="sm" />
          </div>

          {/* Описание */}
          <p className="line-clamp-2 flex-1 text-sm text-white/70 group-hover:text-white/90 transition-colors">{description}</p>

          {/* Features */}
          <div className="flex flex-wrap gap-2">
            {features.slice(0, 3).map((feature) => (
              <span
                key={feature}
                className="rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 px-2.5 py-1 text-xs font-medium text-cyan-200 backdrop-blur"
              >
                {feature}
              </span>
            ))}
            {features.length > 3 && (
              <span className="px-2.5 py-1 text-xs font-medium text-white/50">+{features.length - 3}</span>
            )}
          </div>

          {/* Цена и кнопка */}
          <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-2">
            <div>
              <p className="text-xs font-medium text-white/60">Цена от</p>
              <p className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{price}</p>
            </div>
            <button className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105">
              Выбрать
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
