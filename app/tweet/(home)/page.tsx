import Image from "next/image";
import { Tweet } from "./Tweet";
import { TWEETS } from "../../shared/data/tweets.data";
import { TweetForm } from "./TweetForm";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 -right-20 w-96 h-96 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full blur-3xl opacity-30 animate-float" />
        <div className="absolute bottom-0 -left-20 w-96 h-96 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-full blur-3xl opacity-30 animate-float animation-delay-2" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-8 animate-fadeInUp">
          {/* Logo/Badge */}
          <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 backdrop-blur">
            <span className="text-cyan-300 text-sm font-semibold">✨ Новое поколение путешествий</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Путешествуй
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                Без ограничений
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Забронируй билет в Ольхон за минуты. Быстро, надежно, безопасно.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/search">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300 group">
                🎫 Найти рейсы
                <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform">→</span>
              </button>
            </Link>
            <Link href="/Tours">
              <button className="px-8 py-4 rounded-xl border-2 border-cyan-400/30 bg-white/5 text-white font-semibold text-lg hover:border-cyan-300 hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 backdrop-blur">
                📍 Популярные маршруты
              </button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-16 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-cyan-400">50K+</div>
              <div className="text-white/60 text-sm">Счастливых путешественников</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-400">100+</div>
              <div className="text-white/60 text-sm">Маршрутов доступно</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-purple-400">4.9⭐</div>
              <div className="text-white/60 text-sm">Рейтинг на сайте</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 space-y-12 animate-fadeInUp animation-delay-1">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Почему выбирают нас?
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">Надежный сервис с лучшим обслуживанием</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: "⚡", title: "Молниеносно", desc: "Бронирование за 2 минуты" },
            { icon: "🔒", title: "Безопасно", desc: "Защита платежей и данных" },
            { icon: "🎯", title: "Надежно", desc: "Гарантия прибытия" },
          ].map((feature, i) => (
            <div key={i} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/30 hover:bg-white/10 backdrop-blur transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/60">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tweet Feed */}
      <section className="max-w-2xl mx-auto px-6 space-y-6 animate-fadeInUp animation-delay-2">
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-3xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Последние отзывы
            </span>
          </h2>
        </div>
        <TweetForm />
        {TWEETS.map((tweet, index) => (
          <Tweet key={index} tweet={tweet} />
        ))}
      </section>
    </div>
  );
}
