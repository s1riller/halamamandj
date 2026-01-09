// hooks/useScrollInversion.ts
import { useEffect, useState, useRef } from "react";

export function useScrollInversion(options?: IntersectionObserverInit) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const defaultOptions: IntersectionObserverInit = {
      threshold: 0.5, // 50% видимости
      rootMargin: "-20% 0px -20% 0px", // Центральные 60% экрана
      ...options,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsInView(entry.isIntersecting);
      });
    }, defaultOptions);

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);

  return { ref, isInView };
}
