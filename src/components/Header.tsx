"use client";

import Link from "next/link";
import { useState } from "react";

interface HeaderProps {
  lang: "ko" | "en";
}

export default function Header({ lang }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = {
    ko: [
      { name: "홈", href: "/" },
      { name: "메뉴", href: "/menu" },
      { name: "이야기", href: "/about" },
      { name: "리뷰", href: "/reviews" },
      { name: "오시는 길", href: "/visit" },
    ],
    en: [
      { name: "Home", href: "/en" },
      { name: "Menu", href: "/en/menu" },
      { name: "About", href: "/en/about" },
      { name: "Reviews", href: "/en/reviews" },
      { name: "Visit", href: "/en/visit" },
    ],
  };

  const currentNav = navigation[lang];
  const langSwitch = lang === "ko" ? { name: "EN", href: "/en" } : { name: "한국어", href: "/" };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href={lang === "ko" ? "/" : "/en"} className="flex items-center space-x-2">
            <span className="text-2xl md:text-3xl font-bold text-amber-800">정수산장</span>
            {lang === "en" && (
              <span className="hidden sm:block text-sm text-gray-600">Jeongsu Sanjang</span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {currentNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-amber-700 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href={langSwitch.href}
              className="px-3 py-1.5 border border-amber-700 text-amber-700 rounded-md hover:bg-amber-700 hover:text-white transition-colors text-sm"
            >
              {langSwitch.name}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link
              href={langSwitch.href}
              className="px-2 py-1 border border-amber-700 text-amber-700 rounded text-sm"
            >
              {langSwitch.name}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {currentNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 text-gray-700 hover:text-amber-700 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
