import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary tracking-tight">
              Dial <span className="text-secondary italic">Rishikesh</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-slate-600 hover:text-primary transition-colors font-medium">
              Services
            </Link>
            <Link href="/about" className="text-slate-600 hover:text-primary transition-colors font-medium">
              About
            </Link>
            <Link href="/blog" className="text-slate-600 hover:text-primary transition-colors font-medium">
              Blog
            </Link>
            <Link 
              href="/contact" 
              className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20"
            >
              Get Started
            </Link>
          </div>

          <div className="md:hidden">
            <button className="text-primary p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
