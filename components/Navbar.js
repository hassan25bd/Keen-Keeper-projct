'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Clock, BarChart3, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => pathname === path;

  const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/timeline', label: 'Timeline', icon: Clock },
    { href: '/stats', label: 'Stats', icon: BarChart3 },
  ];

  return (
    <nav className="bg-primary text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold hover:opacity-80 transition-opacity">
            <span className="text-3xl">👥</span>
            <span>KeenKeeper</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-2 transition-colors ${
                  isActive(href)
                    ? 'text-white border-b-2 border-white pb-1'
                    : 'text-gray-100 hover:text-white'
                }`}
              >
                <Icon size={20} />
                <span>{label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-accent rounded transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-accent/20 pt-4 flex flex-col gap-3">
            {navLinks.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-2 py-2 px-3 rounded transition-colors ${
                  isActive(href)
                    ? 'bg-accent text-white'
                    : 'text-gray-100 hover:bg-accent/50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Icon size={20} />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
