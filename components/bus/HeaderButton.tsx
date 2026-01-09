import { match } from "path-to-regexp";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import Link from "next/link";

interface HeaderButtonProps {
  text: string;
  href: string;
  exact?: boolean;
  asLink?: boolean; // Использовать как ссылку Next.js
  pattern?: string;
  icon?: React.ReactNode;
  className?: string;
}

export default function HeaderButton({ 
  text, 
  href, 
  exact = false,
  asLink = false,
  pattern,
  icon,
  className = ""
}: HeaderButtonProps) {
  const pathname = usePathname();
  
  // Функция для проверки активного пути
  const isActive = useMemo(() => {
    try {
      // Если нужен точный путь
      if (exact) {
        return pathname === href;
      }
      
      // Используем path-to-regexp для сравнения путей
      const pathToMatch = pattern || href;
      
      // Проверяем наличие динамических сегментов
      const hasDynamicSegments = pathToMatch.includes(':') || 
                                 pathToMatch.includes('*') || 
                                 pathToMatch.includes('(') || 
                                 pathToMatch.includes(')');
      
      if (hasDynamicSegments) {
        const matcher = match(pathToMatch, { 
          decode: decodeURIComponent,
          sensitive: false,
          end: false
        });
        const result = matcher(pathname);
        return !!result;
      }
      
      // Для статических путей
      return pathname.startsWith(pathToMatch);
      
    } catch (error) {
      console.error('Path matching error:', error);
      return false;
    }
  }, [pathname, href, exact, pattern]);
  
  // Стили для активного и неактивного состояния - iOS 16 Magnifying Glass style
  const buttonClasses = `
    relative
    inline-flex
    items-center
    justify-center
    px-4
    py-2.5
    rounded-full
    text-sm
    font-semibold
    transition-all
    duration-300
    overflow-visible
    group
    ${isActive 
      ? "bg-white/95 backdrop-blur-lg border-2 border-cyan-200/70 text-cyan-700 shadow-xl shadow-cyan-300/30 scale-110" 
      : "bg-transparent text-gray-700 hover:text-cyan-600"
    }
    ${className}
  `;
  
  // Контент кнопки
  const buttonContent = (
    <>
      {/* iOS 16 Magnifying Glass Effect */}
      {isActive && (
        <>
          {/* Блеск на поверхности */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent rounded-full" />
          
          {/* Иконка лупы на активной кнопке */}

          
          {/* Свечение вокруг активной кнопки */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-transparent to-blue-400/10 rounded-full" />
        </>
      )}
      
      {/* Блеск при наведении */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-full" />
      
      <span className="relative z-10 flex items-center justify-center gap-2">
        {icon && <span className="text-base">{icon}</span>}
        <span>
          {text}
        </span>
      </span>
    </>
  );
  
  if (asLink) {
    return (
      <Link href={href} className={buttonClasses}>
        {buttonContent}
      </Link>
    );
  }
  
  return (
    <button className={buttonClasses}>
      {buttonContent}
    </button>
  );
}