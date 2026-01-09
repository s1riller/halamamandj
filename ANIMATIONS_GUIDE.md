# 🎬 Гайд по Продвинутым Анимациям и Эффектам

## 📋 Содержание
1. CSS Анимации
2. Компоненты для интерактивности
3. Как использовать эффекты
4. Примеры кода
5. Performance tips

---

## 🎯 Часть 1: Доступные CSS Анимации

### 1️⃣ Основные анимации (базовые)

```tsx
// Fade In Up - появление с подъемом
<div className="animate-fadeInUp">Контент</div>

// Slide In Left - слайд слева
<div className="animate-slideInLeft">Контент</div>

// Slide In Right - слайд справа
<div className="animate-slideInRight">Контент</div>

// Fade In - просто появление
<div className="animate-fadeIn">Контент</div>
```

---

### 2️⃣ Движение и масштабирование

```tsx
// Bounce Scale - пульсирующее масштабирование
<div className="animate-bounceScale">Пульсирующий элемент</div>

// Bounce Large - большой прыжок
<button className="animate-bounce-lg">Прыгающая кнопка</button>

// Float - плавающее движение вверх-вниз
<div className="animate-float">Плавающий элемент</div>

// Rotate 360 - полный оборот
<div className="animate-rotate-360">Вращающийся элемент</div>

// Heartbeat - пульс как сердцебиение
<button className="animate-heartbeat">Пульс</button>

// Wobble - покачивание
<div className="animate-wobble">Покачивающийся элемент</div>

// Flip - 3D переворот
<div className="animate-flip">Переворачивающийся элемент</div>
```

---

### 3️⃣ Оптические эффекты

```tsx
// Glow - светящийся эффект
<button className="animate-glow bg-blue-500">Светящаяся кнопка</button>

// Shimmer - сверкающий эффект
<div className="animate-shimmer">Сверкающий текст</div>

// Pulse Slow - медленный пульс
<div className="animate-pulse-slow">Пульсирующий</div>

// Pulse Intense - интенсивный пульс
<div className="animate-pulseIntense">Интенсивный пульс</div>

// Border Glow - светящаяся граница
<div className="animate-borderGlow border-2 border-blue-500">
  Граница со свечением
</div>

// Neon - неоновый эффект
<div className="neon text-blue-500">Неоновый текст</div>

// Rainbow - радужная анимация
<div className="animate-rainbow text-blue-500">Радуга</div>
```

---

## 🎨 Часть 2: Специальные CSS Классы

### Glass Morphism (матовое стекло)

```tsx
// Светлый glass эффект
<div className="glass rounded-xl p-6">
  Карточка со стеклянным эффектом
</div>

// Тёмный glass эффект
<div className="glass-dark rounded-xl p-6">
  Тёмное стекло
</div>
```

**CSS:**
```css
.glass {
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.18);
}

.glass-dark {
    background: rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}
```

---

### Hover Lift (поднятие при наведении)

```tsx
<div className="hover-lift rounded-xl p-6">
  Элемент поднимется при наведении
</div>
```

**CSS:**
```css
.hover-lift {
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.hover-lift:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}
```

---

### Gradient Text (градиентный текст)

```tsx
<h2 className="bg-gradient-text text-4xl font-bold">
  Текст с подвижным градиентом
</h2>
```

**CSS:**
```css
.bg-gradient-text {
    background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6);
    background-size: 300% 300%;
    animation: gradientShift 3s ease infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
```

---

### Animated Gradient Background (фон с градиентом)

```tsx
<div className="bg-gradient-animate rounded-2xl p-8">
  Фон со сдвигающимся градиентом
</div>
```

**CSS:**
```css
.bg-gradient-animate {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;
}
```

---

### Loading Skeleton (скелет загрузки)

```tsx
<div className="skeleton h-12 rounded-xl" />
<div className="skeleton h-8 rounded-lg w-3/4" />
```

**CSS:**
```css
.skeleton {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: shimmer 2s infinite;
}
```

---

## 🔧 Часть 3: Как Использовать Эффекты

### Пример 1: Анимированная кнопка поиска

```tsx
<button className="animate-bounce-lg px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold shadow-lg hover:shadow-xl">
  🔍 Найти билеты
</button>
```

### Пример 2: Карточка с несколькими эффектами

```tsx
<div className="hover-lift glass rounded-2xl p-6 animate-fadeInUp border border-blue-200">
  <div className="animate-bounceScale inline-block text-4xl mb-4">✨</div>
  <h3 className="text-2xl font-bold text-gray-900 mb-2">Название</h3>
  <p className="text-gray-600">Описание</p>
</div>
```

### Пример 3: Прогресс бар

```tsx
<div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
  <div className="bg-gradient-to-r from-green-400 to-green-600 h-full animate-shimmer w-3/4" />
</div>
```

### Пример 4: Загрузка контента

```tsx
{isLoading ? (
  <>
    <div className="skeleton h-12 rounded-xl mb-3" />
    <div className="skeleton h-8 rounded-lg w-3/4 mb-3" />
    <div className="skeleton h-8 rounded-lg w-1/2" />
  </>
) : (
  <div>Реальный контент</div>
)}
```

### Пример 5: Текст с нижней подчёркиванием

```tsx
<h1 className="text-4xl font-bold">
  Путешествия на
  <span className="animate-borderGlow block mt-2 border-b-4 border-blue-500 pb-2">
    Байкал
  </span>
</h1>
```

---

## 🎪 Часть 4: Полный Пример Компонента

```tsx
import AnimationShowcase from '@/components/AnimationShowcase';
import InteractiveBackground from '@/components/InteractiveBackground';

export default function ShowcasePage() {
  return (
    <>
      {/* Интерактивный фон с частицами */}
      <InteractiveBackground />

      <div className="relative z-10 min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <AnimationShowcase />
        </div>
      </div>
    </>
  );
}
```

---

## 📊 Часть 5: Контролируем Скорость и Задержку

### Пользовательская скорость анимации

```tsx
<div 
  className="animate-rotate-360"
  style={{ animationDuration: '10s' }}
>
  Медленное вращение
</div>

<div 
  className="animate-bounce-lg"
  style={{ animationDuration: '0.5s' }}
>
  Быстрый прыжок
</div>
```

### Задержка анимации (стаггер эффект)

```tsx
{items.map((item, i) => (
  <div 
    key={item.id}
    className="animate-fadeInUp"
    style={{ animationDelay: `${i * 0.1}s` }}
  >
    {item.name}
  </div>
))}
```

---

## 🚀 Часть 6: InteractiveBackground Компонент

Добавляет интерактивный фон с частицами, которые следуют за курсором:

```tsx
// В app/layout.tsx или в конкретной странице
import InteractiveBackground from '@/components/InteractiveBackground';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <InteractiveBackground />
        {children}
      </body>
    </html>
  );
}
```

**Особенности:**
- ✨ Частицы появляются при движении мыши
- 🔗 Частицы соединяются линиями
- 💨 Гравитация и физика
- 🎨 Голубой градиент (можно изменить в коде)
- 📱 Работает на всех устройствах

---

## 💡 Часть 7: Performance Tips

### Оптимизация анимаций

```tsx
// ❌ Плохо - анимируем все свойства
<div className="transition-all">Элемент</div>

// ✅ Хорошо - анимируем только нужные свойства
<div className="transition-transform transition-opacity">Элемент</div>
```

### Использование will-change (для сложных анимаций)

```tsx
<div className="animate-rotate-360 will-change-transform">
  Вращающийся элемент
</div>
```

### Отключение анимаций для мобильных

```tsx
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

---

## 🎯 Часть 8: Комбинирование Эффектов

### Суперпопулярная комбинация

```tsx
<div className="hover-lift glass animate-fadeInUp rounded-2xl p-8 border-2 animate-borderGlow">
  <div className="animate-bounceScale text-5xl mb-4">🚀</div>
  <h2 className="bg-gradient-text text-3xl font-bold mb-4">Заголовок</h2>
  <button className="animate-bounce-lg px-6 py-2 rounded-full bg-blue-500 text-white font-bold">
    Действие
  </button>
</div>
```

### Загрузка с индикатором

```tsx
{isLoading ? (
  <div className="space-y-4">
    <div className="skeleton h-12 rounded-xl" />
    <div className="skeleton h-8 rounded-lg" />
  </div>
) : (
  <div className="animate-fadeInUp">Реальный контент</div>
)}
```

---

## 📚 Итоговый Чек-лист

### Основы
- [ ] Используешь fadeInUp для контента при загрузке
- [ ] Применяешь glass эффект к карточкам
- [ ] Добавляешь hover-lift к интерактивным элементам
- [ ] Используешь gradient-text для заголовков

### Продвинуто
- [ ] Комбинируешь несколько анимаций
- [ ] Используешь animationDelay для стаггер эффекта
- [ ] Применяешь shimmer к loading состояниям
- [ ] Добавляешь borderGlow к важным элементам

### Интерактивность
- [ ] Добавил InteractiveBackground на главную страницу
- [ ] Используешь ripple эффект на кнопках
- [ ] Комбинируешь эффекты для уникального вида
- [ ] Оптимизируешь производительность

---

## 🎓 Полезные Ссылки

- [Tailwind CSS Animations](https://tailwindcss.com/docs/animation)
- [CSS Animations MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [Cubic Bezier](https://cubic-bezier.com/)
- [Easing Functions](https://easings.net/)

---

**Главное:** Анимации должны улучшать UX, а не раздражать пользователя! Используй их умно и экономно. 🎬✨
