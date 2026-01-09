# 🎬 Примеры Использования Новых Анимаций

## Быстрый Старт

### 1️⃣ Добавь InteractiveBackground на главную страницу

```tsx
// app/(public)/(home)/page.tsx
import InteractiveBackground from '@/components/InteractiveBackground';

export default function HomePage() {
  return (
    <>
      <InteractiveBackground />
      <div className="relative z-10">
        {/* Твой контент */}
      </div>
    </>
  );
}
```

---

## 📌 Примеры для Компонентов

### Карточка с полным стеком эффектов

```tsx
export function AdvancedCard() {
  return (
    <div className="hover-lift glass animate-fadeInUp rounded-2xl p-6 border-2 border-blue-200 animate-borderGlow">
      {/* Иконка с пульсом */}
      <div className="animate-bounceScale text-4xl mb-4">🎫</div>

      {/* Заголовок с градиентом */}
      <h3 className="bg-gradient-text text-2xl font-bold mb-2">Предложение</h3>

      {/* Описание */}
      <p className="text-gray-600 mb-4">Специальное предложение для путешественников</p>

      {/* Кнопка с эффектом свечения */}
      <button className="animate-glow px-6 py-2 rounded-full bg-blue-500 text-white font-bold hover:shadow-lg">
        Перейти
      </button>
    </div>
  );
}
```

---

### Анимированный список

```tsx
export function AnimatedList({ items }) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={item.id}
          className="animate-slideInLeft border-l-4 border-blue-500 pl-4 py-2"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <h4 className="font-bold text-gray-900">{item.title}</h4>
          <p className="text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
```

---

### Загрузка контента

```tsx
'use client';

import { useState, useEffect } from 'react';

export function LoadingContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setData({ title: 'Контент загружен' });
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="space-y-4">
          <div className="skeleton h-12 rounded-xl" />
          <div className="skeleton h-8 rounded-lg w-3/4" />
          <div className="skeleton h-8 rounded-lg w-1/2" />
        </div>
      ) : (
        <div className="animate-fadeInUp">
          <h3 className="text-2xl font-bold text-gray-900">{data?.title}</h3>
        </div>
      )}
    </div>
  );
}
```

---

### Прогресс индикатор

```tsx
export function AnimatedProgress({ value = 60 }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700">Заполнено</span>
        <span className="text-sm font-bold text-blue-500">{value}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 h-full animate-shimmer rounded-full transition-all duration-500"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
```

---

### Героический заголовок

```tsx
export function HeroSection() {
  return (
    <div className="min-h-screen bg-gradient-animate flex items-center justify-center text-center">
      <div className="space-y-6">
        {/* Основной заголовок */}
        <h1 className="text-6xl font-bold text-white animate-fadeInUp">
          Путешествуй с нами
        </h1>

        {/* Подзаголовок с градиентом */}
        <p className="text-2xl bg-gradient-text animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          Откройте мир новых возможностей
        </p>

        {/* Кнопки */}
        <div className="flex gap-4 justify-center pt-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <button className="animate-bounce-lg px-8 py-4 rounded-full bg-blue-500 text-white font-bold text-lg">
            🚀 Начать путешествие
          </button>
          <button className="animate-glow px-8 py-4 rounded-full border-2 border-white text-white font-bold text-lg">
            ✨ Узнать больше
          </button>
        </div>

        {/* Плавающие иконки */}
        <div className="flex justify-center gap-12 pt-10">
          {['🎫', '🛣️', '🌍'].map((emoji, i) => (
            <div
              key={emoji}
              className="text-5xl animate-float"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              {emoji}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

---

### Неоновый эффект

```tsx
export function NeonCard() {
  return (
    <div className="border-2 border-blue-500 rounded-xl p-8 animate-borderGlow">
      <h3 className="neon text-3xl font-bold text-blue-500">✨ Премиум предложение</h3>
      <p className="text-gray-600 mt-4">Только для специальных клиентов</p>
    </div>
  );
}
```

---

### Галерея с эффектами

```tsx
export function AnimatedGallery() {
  const items = [
    { id: 1, title: 'Байкал', emoji: '🏔️' },
    { id: 2, title: 'Ольхон', emoji: '🏝️' },
    { id: 3, title: 'Листвянка', emoji: '🌲' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <div
          key={item.id}
          className="hover-lift glass rounded-2xl p-8 text-center border border-blue-200 animate-fadeInUp"
          style={{ animationDelay: `${i * 0.15}s` }}
        >
          <div className="animate-bounce-lg text-6xl mb-4">{item.emoji}</div>
          <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
          <button className="mt-4 animate-glow px-6 py-2 rounded-full bg-blue-500 text-white font-bold">
            Подробнее
          </button>
        </div>
      ))}
    </div>
  );
}
```

---

### Таймер с анимацией

```tsx
'use client';

import { useState, useEffect } from 'react';

export function AnimatedTimer() {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    if (seconds <= 0) return;

    const timer = setTimeout(() => {
      setSeconds(seconds - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [seconds]);

  return (
    <div className="flex justify-center items-center">
      <div className={`text-6xl font-bold ${seconds <= 3 ? 'animate-heartbeat text-red-500' : 'animate-pulse-slow text-blue-500'}`}>
        {seconds}
      </div>
    </div>
  );
}
```

---

## 🎯 Интеграция с Существующими Компонентами

### SearchCard (обновленный)

```tsx
export default function SearchCard() {
  // ... код компонента ...

  return (
    <section className="animate-fadeInUp space-y-4 rounded-2xl glass border border-blue-200 p-6 shadow-sm hover:shadow-lg">
      <h2 className="bg-gradient-text text-lg font-bold">Купить билет</h2>

      <form onSubmit={handleSearch} className="grid grid-cols-1 gap-3">
        {/* Inputs... */}

        {/* Прогресс бар */}
        <div className="mt-2">
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-gradient-to-r from-green-400 to-green-600 shadow-lg shadow-green-400/50 animate-shimmer"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Кнопка */}
        <button
          className={`w-full animate-bounce-lg rounded-full py-2.5 text-sm font-semibold text-white transition-all ${
            isFormValid ? 'bg-gradient-to-r from-black to-gray-900 hover:shadow-xl' : 'bg-gray-300 opacity-70'
          }`}
        >
          🎫 Найти билеты
        </button>
      </form>
    </section>
  );
}
```

---

## 🚀 Продвинутые Техники

### Каскадная анимация при загрузке

```tsx
export function CascadingCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="hover-lift glass rounded-2xl p-6 animate-fadeInUp"
          style={{
            animationDelay: `${(i % 3) * 0.1}s`,
            animationDuration: '0.6s',
          }}
        >
          <div className="animate-bounceScale text-4xl mb-4">🎯</div>
          <h3 className="font-bold text-gray-900">Карточка {i + 1}</h3>
        </div>
      ))}
    </div>
  );
}
```

---

### Комбинированные эффекты

```tsx
export function SuperCard() {
  return (
    <div className="group hover-lift glass rounded-2xl overflow-hidden">
      {/* Фон с градиентом */}
      <div className="bg-gradient-animate h-32 relative">
        {/* Плавающая иконка */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-float text-6xl">🌟</div>
        </div>
      </div>

      {/* Контент */}
      <div className="p-6">
        <h3 className="bg-gradient-text text-2xl font-bold mb-2">Заголовок</h3>
        <p className="text-gray-600 mb-4">Описание с долгим текстом</p>

        {/* Кнопка */}
        <button className="w-full animate-glow px-4 py-2 rounded-lg bg-blue-500 text-white font-bold">
          Действие
        </button>
      </div>
    </div>
  );
}
```

---

## 📱 Мобильная Оптимизация

```tsx
export function ResponsiveAnimated() {
  return (
    <div className="space-y-4">
      {/* На мобиле: fadeInUp, на десктопе: slideInLeft */}
      <div className="animate-fadeInUp md:animate-slideInLeft">
        Адаптивная анимация
      </div>

      {/* Разная скорость на разных размерах */}
      <div
        className="animate-bounce-lg"
        style={{
          animationDuration: window.innerWidth < 768 ? '0.5s' : '1s',
        }}
      >
        Адаптивная скорость
      </div>
    </div>
  );
}
```

---

## 🎓 Советы и Трюки

### 1. Комбинируй эффекты для уникального вида
```tsx
className="animate-fadeInUp hover-lift glass animate-borderGlow"
```

### 2. Используй animationDelay для стаггер эффекта
```tsx
style={{ animationDelay: `${index * 0.1}s` }}
```

### 3. Меняй скорость анимации
```tsx
style={{ animationDuration: '2s' }}
```

### 4. Комбинируй с Tailwind переходами
```tsx
className="animate-fadeInUp transition-all duration-300 hover:scale-105"
```

### 5. Используй группы (group) для связанных эффектов
```tsx
<div className="group hover-lift">
  <div className="group-hover:text-blue-500">Текст меняется</div>
</div>
```

---

**Главное правило:** Анимации должны служить UX, а не отвлекать! ✨
