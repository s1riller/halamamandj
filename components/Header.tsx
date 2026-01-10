import Link from "next/link";
import Image from "next/image";
import { Menu } from "./Menu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-cyan-200/30 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur" />
              <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg border border-cyan-200">
                <Image 
                  src="/x-logo.png" 
                  alt="Logo" 
                  width={24} 
                  height={24} 
                  priority 
                  className="text-cyan-600"
                />
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                OlkhonExpress
              </h1>
              <p className="text-xs text-gray-500">Travel Platform</p>
            </div>
          </Link>

          {/* Navigation */}
          <Menu />

          {/* Right side - CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-6 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-cyan-500/30">
              🎫 Забронировать
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
