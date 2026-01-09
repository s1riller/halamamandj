import type { ITweet } from "@/app/shared/types/tweet.interfece";
import Image from "next/image";
import Link from "next/link";
import { PAGES } from "@/config/pages.config";
interface Props {
  tweet: ITweet;
}

export function Tweet({ tweet }: Props) {
  return (
    <div className="group animate-fadeInUp rounded-2xl border-2 border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 text-white shadow-xl hover:border-cyan-400/30 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 backdrop-blur-xl">
      <div className="mb-4 flex items-center gap-4">
        <Image 
          src="/x-logo.png" 
          alt="X Logo" 
          width={28} 
          height={28}
          className="opacity-70 group-hover:opacity-100 transition-opacity"
        />
        <div>
          <Link href={PAGES.PROFILE(tweet.author)} className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors">
            @{tweet.author}
          </Link>
          <div className="text-xs text-white/40">Проверенный путешественник</div>
        </div>
      </div>
      <p className="text-white/80 group-hover:text-white/90 transition-colors leading-relaxed">{tweet.text}</p>
      <div className="mt-4 flex gap-4 text-white/40 text-sm">
        <button className="hover:text-cyan-400 transition-colors">❤️ Нравится</button>
        <button className="hover:text-cyan-400 transition-colors">💬 Ответить</button>
        <button className="hover:text-cyan-400 transition-colors">🔄 Поделиться</button>
      </div>
    </div>
  );
}
