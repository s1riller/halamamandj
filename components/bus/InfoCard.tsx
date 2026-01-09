interface InfoCardProps {
  title: string;
  text: string;
  details?: React.ReactNode;
  features?: string[];
  ctaText?: string;
  ctaLink?: string;
  type?: "default" | "highlight" | "schedule" | "reviews";
  stats?: Array<{ label: string; value: string; unit: string }>;
  schedule?: Array<{ time: string; from: string; to: string; seats: string }>;
  reviews?: Array<{ text: string; author: string; rating: number }>;
  note?: string;
}

export default function InfoCard({
  title,
  text,
  details,
  features,
  ctaText,
  ctaLink,
  type = "default",
  stats,
  schedule,
  reviews,
  note,
}: InfoCardProps) {
  return (
    <div className="animate-fadeInUp overflow-hidden rounded-2xl border-2 border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/10 hover:scale-105">
      <div className="p-8">
        <h3 className="mb-3 text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{title}</h3>
        <p className="mb-6 text-black/70 leading-relaxed">{text}</p>

        {details && <div className="mb-6">{details}</div>}

        {features && (
          <div className="mb-6">
            <h4 className="mb-3 text-sm font-semibold text-black/70">Включено:</h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-black/70 hover:text-black/90 transition-colors">
                  <svg
                    className="mr-2 h-5 w-5 text-cyan-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {ctaText && (
          <a
            href={ctaLink || "#"}
            className="inline-block rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2.5 text-sm font-semibold text- black transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"
          >
            {ctaText}
          </a>
        )}
      </div>
    </div>
  );
}
