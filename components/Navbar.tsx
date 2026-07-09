import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
            💰 Budgety
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-primary transition">
              Home
            </Link>
            <Link href="/dashboard" className="text-gray-700 hover:text-primary transition">
              Dashboard
            </Link>
            <Link href="/transactions" className="text-gray-700 hover:text-primary transition">
              Transactions
            </Link>
            <Link
              href="/login"
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-primary"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block text-gray-700 hover:text-primary py-2">
              Home
            </Link>
            <Link href="/dashboard" className="block text-gray-700 hover:text-primary py-2">
              Dashboard
            </Link>
            <Link href="/transactions" className="block text-gray-700 hover:text-primary py-2">
              Transactions
            </Link>
            <Link href="/login" className="block bg-primary text-white px-4 py-2 rounded-lg">
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
