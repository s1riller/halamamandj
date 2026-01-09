# 🎨 Quick Reference - Дизайн автобусного раздела

## Цветовая палитра

### Основные цвета
```
Фон:        from-slate-950 via-blue-950 to-slate-950
Акцент:     cyan-400 / cyan-500 / cyan-600
Вторичный:  blue-400 / blue-500 / blue-600
Третичный:  purple-400 / purple-500 / purple-600
```

### Текстовые цвета
```
Основной:     white (100%)
Вторичный:    white/70 (70% opacity)
Третичный:    white/50-60 (50-60% opacity)
Отключённый:  white/30-40 (30-40% opacity)
Акцент:       cyan-300 / cyan-400
```

---

## Компонентные паттерны

### 1. Glass Morphism Карточка
```tsx
<div className="rounded-2xl border-2 border-white/10 
  bg-gradient-to-br from-white/5 to-white/[0.02] 
  p-6 backdrop-blur-xl 
  hover:border-cyan-400/30 hover:scale-105 
  transition-all duration-300">
```

### 2. Gradient Кнопка
```tsx
<button className="px-6 py-2.5 rounded-lg 
  bg-gradient-to-r from-cyan-500 to-blue-600 
  text-white font-semibold 
  hover:shadow-lg hover:shadow-blue-500/50 
  hover:scale-105 transition-all duration-300">
```

### 3. Gradient Текст
```tsx
<h1 className="text-5xl font-bold 
  bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 
  bg-clip-text text-transparent">
```

### 4. Информационный блок
```tsx
<div className="rounded-2xl border-2 border-cyan-400/20 
  bg-gradient-to-r from-cyan-500/10 to-blue-500/10 
  p-4 backdrop-blur">
```

### 5. Grid из карточек
```tsx
<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
  {items.map(item => <Card key={item.id} {...item} />)}
</div>
```

---

## Анимации

### CSS Классы
```
Входящие:
  animate-fadeInUp        - плавное появление снизу
  animate-slideInLeft     - скольжение слева
  animate-bounceScale     - bounce с масштабом
  
Hover:
  hover:scale-105         - увеличение на 5%
  hover:scale-110         - увеличение на 10%
  hover:shadow-xl         - большая тень
  hover:shadow-cyan-500/50 - цветная тень
  
Задержки:
  animation-delay-1       - 0.2s задержка
  animation-delay-2       - 0.4s задержка
  animation-delay-3       - 0.6s задержка
```

### Переходы
```
transition-all duration-300  - плавный переход всех свойств
```

---

## Тайпография

### Размеры
```
h1: text-5xl md:text-6xl    font-bold    - заголовок героя
h2: text-4xl                font-bold    - заголовок секции
h3: text-2xl                font-bold    - заголовок карточки
h4: text-lg                 font-bold    - подзаголовок
p:  text-lg                 font-medium  - основной текст
```

### Стили
```
Основной:    text-white
Вторичный:   text-white/70
Акцент:      text-cyan-300 / text-cyan-400
Gradient:    bg-clip-text text-transparent
```

---

## Spacing & Sizes

### Padding
```
Маленький:    p-4     (16px)
Средний:      p-6     (24px)
Большой:      p-8     (32px)
```

### Gaps
```
Маленький:    gap-2   (8px)
Средний:      gap-4   (16px)
Большой:      gap-6   (24px)
```

### Border Radius
```
Маленький:    rounded-lg      (8px)
Средний:      rounded-2xl     (16px)
Большой:      rounded-3xl     (24px)
```

---

## Комбинированные примеры

### Hero Секция
```tsx
<section className="space-y-8 animate-fadeInUp">
  <div className="inline-block px-4 py-2 rounded-full 
    bg-cyan-500/10 border border-cyan-400/30 backdrop-blur">
    <span className="text-cyan-300 text-sm font-semibold">
      ✨ Батон
    </span>
  </div>
  
  <h1 className="text-5xl md:text-6xl font-bold leading-tight">
    <span className="bg-gradient-to-r from-cyan-400 to-blue-400 
      bg-clip-text text-transparent">
      Градиентный текст
    </span>
  </h1>
  
  <p className="text-white/70">Описание</p>
  
  <div className="flex gap-4">
    <button className="px-8 py-3 bg-gradient-to-r 
      from-cyan-500 to-blue-600 
      hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105">
      CTA
    </button>
  </div>
</section>
```

### Карточка с содержимым
```tsx
<div className="group rounded-2xl border-2 border-white/10 
  bg-gradient-to-br from-white/5 to-white/[0.02] 
  p-6 backdrop-blur-xl 
  hover:border-cyan-400/30 hover:scale-105 
  transition-all duration-300">
  
  <h3 className="text-2xl font-bold text-cyan-300">
    Заголовок
  </h3>
  
  <p className="text-white/70 group-hover:text-white/90 
    transition-colors">
    Описание
  </p>
  
  <button className="mt-4 px-4 py-2 rounded-lg 
    bg-cyan-500/20 border border-cyan-400/30 
    text-cyan-300 hover:bg-cyan-500/30">
    CTA
  </button>
</div>
```

---

## Mobile-First Responsive

```tsx
// Мобильное первое
<div className="grid grid-cols-1 gap-4
  md:grid-cols-2    // tablet
  lg:grid-cols-4">  // desktop
  
<h1 className="text-4xl md:text-5xl lg:text-6xl">

<button className="w-full md:w-auto">
```

---

## Полезные классы

```
Позиционирование:
  absolute inset-0              - fill parent
  relative                      - relative positioning
  
Отображение:
  flex items-center justify-between
  grid grid-cols-1 gap-6
  space-y-4                     - vertical spacing
  
Видимость:
  opacity-0 / opacity-50 / opacity-100
  invisible / visible
  
Эффекты:
  blur-sm / blur-md / blur-xl
  shadow-sm / shadow-lg / shadow-xl
  drop-shadow-lg
```

---

## Шпаргалка для быстрого создания

### Новая страница
```tsx
<div className="min-h-screen bg-gradient-to-b 
  from-slate-950 via-blue-950 to-slate-950 py-12">
  <div className="container mx-auto max-w-6xl px-4">
    {/* Hero */}
    <div className="mb-16 space-y-8 animate-fadeInUp">
      <h1 className="text-5xl md:text-6xl font-bold
        bg-gradient-to-r from-cyan-400 to-blue-400 
        bg-clip-text text-transparent">
        Заголовок
      </h1>
    </div>
    
    {/* Content Grid */}
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 
      lg:grid-cols-4 animate-fadeInUp animation-delay-1">
      {/* Cards */}
    </div>
  </div>
</div>
```

---

## Цветовые комбинации

### Cyan акцент
```
Текст:        text-cyan-300 / text-cyan-400
Border:       border-cyan-400/20 / border-cyan-400/30
Background:   from-cyan-500/10 to-blue-500/10
Shadow:       shadow-cyan-500/50
```

### Blue акцент
```
Текст:        text-blue-300 / text-blue-400
Border:       border-blue-400/20 / border-blue-400/30
Background:   from-blue-500/10 to-purple-500/10
Shadow:       shadow-blue-500/50
```

### Purple акцент
```
Текст:        text-purple-300 / text-purple-400
Border:       border-purple-400/20 / border-purple-400/30
Background:   from-purple-500/10 to-pink-500/10
Shadow:       shadow-purple-500/50
```

---

## Быстрые советы

✅ **Делай**
- Используй group для hover эффектов
- Стагнируй анимации с delay классами
- Комбинируй opacity и colors для depth
- Mobile-first responsive design
- Используй transition-all для smooth animations

❌ **Не делай**
- Не используй solid черный фон
- Не забывай backdrop-blur на glass cards
- Не используй разные hover эффекты
- Не забывай group-hover для вложенных элементов
- Не пропускай анимационные задержки

---

## Тестирование

```
Мобильный:   iPhone 12, 375px
Планшет:     iPad Pro, 768px
Десктоп:     MacBook Pro, 1440px

Браузеры:    Chrome, Firefox, Safari, Edge
```

**Готово к использованию! 🚀**
