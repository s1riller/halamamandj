'use client';

import { useEffect, useRef, useState } from 'react';

export default function AnimationShowcase() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="space-y-8">
      {/* 🌟 Gradient Text */}
      <div className="text-center">
        <h2 className="bg-gradient-text text-4xl font-bold mb-4">Динамичный текст с градиентом</h2>
        <p className="text-gray-600">Текст со сдвигающимся цветным градиентом</p>
      </div>

      {/* 🎯 Glow Button */}
      <div className="flex flex-wrap gap-4 justify-center">
        <button className="animate-glow px-8 py-3 rounded-full bg-blue-500 text-white font-semibold shadow-lg">
          Светящаяся кнопка
        </button>

        <button className="animate-bounce-lg px-8 py-3 rounded-full bg-purple-500 text-white font-semibold">
          Прыгающая кнопка
        </button>

        <button className="animate-heartbeat px-8 py-3 rounded-full bg-red-500 text-white font-semibold">
          Пульсирующая кнопка
        </button>
      </div>

      {/* 💫 Animated Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {['Карточка 1', 'Карточка 2', 'Карточка 3'].map((title, i) => (
          <div
            key={title}
            className="hover-lift glass rounded-xl p-6 border border-blue-200 backdrop-blur-md animate-fadeInUp"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="animate-bounceScale inline-block mb-4 text-3xl">
              {i === 0 ? '🚀' : i === 1 ? '✨' : '🎯'}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600">Карточка с glass-morphism эффектом и hover анимацией</p>
          </div>
        ))}
      </div>

      {/* 🌈 Rainbow Text */}
      <div className="text-center">
        <div className="inline-block animate-rainbow text-3xl font-bold text-blue-500">
          🌈 Радужная анимация
        </div>
      </div>

      {/* ✨ Neon Text */}
      <div className="text-center">
        <div className="neon text-2xl font-bold text-blue-500">✨ Неоновый эффект текста</div>
      </div>

      {/* 🎨 Gradient Background */}
      <div className="bg-gradient-animate rounded-2xl p-8 text-white text-center shadow-lg">
        <h3 className="text-2xl font-bold mb-2">Живой градиент фона</h3>
        <p>Фон со сдвигающимся градиентом из 4 цветов</p>
      </div>

      {/* 🔄 Rotating Elements */}
      <div className="flex justify-center gap-8">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`animate-rotate-360 w-16 h-16 rounded-full border-4 border-blue-500 flex items-center justify-center text-2xl`}
            style={{ animationDuration: `${10 + i * 5}s` }}
          >
            {i === 1 ? '🎫' : i === 2 ? '🚌' : '🛣️'}
          </div>
        ))}
      </div>

      {/* 📊 Progress Bar Animated */}
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-gray-900">Анимированная прогресс-полоса</h3>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 h-full animate-shimmer rounded-full" />
        </div>
      </div>

      {/* 🎪 Loading Skeleton */}
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-gray-900">Загрузка контента</h3>
        <div className="skeleton h-12 rounded-xl mb-3" />
        <div className="skeleton h-8 rounded-lg w-3/4" />
      </div>

      {/* 🌟 Floating Elements */}
      <div className="flex justify-around items-center py-8">
        {['🎯', '🚀', '✨', '🎨'].map((emoji, i) => (
          <div
            key={emoji}
            className="text-4xl animate-float"
            style={{ animationDelay: `${i * 0.5}s` }}
          >
            {emoji}
          </div>
        ))}
      </div>

      {/* 🎭 Border Glow */}
      <div className="animate-borderGlow border-2 border-blue-500 rounded-xl p-6 text-center">
        <h3 className="text-xl font-bold text-gray-900">Светящаяся граница</h3>
        <p className="text-gray-600 mt-2">Динамическая граница с эффектом свечения</p>
      </div>

      {/* 🔮 Wobble Animation */}
      <div className="text-center">
        <div className="inline-block animate-wobble text-3xl">🎪 Волнующаяся анимация</div>
      </div>

      {/* 🎯 Flip Animation */}
      <div className="flex justify-center">
        <div className="animate-flip text-6xl">🎉</div>
      </div>
    </div>
  );
}
