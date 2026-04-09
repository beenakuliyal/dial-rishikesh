'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-secondary/10 px-3 py-1 rounded-full mb-6">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
              <span className="text-secondary text-xs font-bold tracking-widest uppercase">Uttarakhand's Premier Agency</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-primary-dark leading-[1.1] mb-6">
              IT Solutions In <br />
              <span className="text-secondary italic">Uttarakhand</span> <br />
              Digital Marketing <br />
              Agency 2025
            </h1>
            
            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
              DIAL Rishikesh is a creative digital marketing agency from Uttarakhand, leading the market with innovative strategies tailored for the Himalayan foothills and beyond.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 text-lg uppercase tracking-tight">
                Contact Us
              </button>
              <button className="bg-white text-primary border-2 border-slate-100 px-8 py-4 rounded-xl font-bold hover:border-primary transition-all text-lg uppercase tracking-tight">
                View Showcase
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl transform lg:rotate-2">
              <Image 
                src="/images/hero.png" 
                alt="Himalayan Digital Agency" 
                width={800} 
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating Stats Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-2xl border border-slate-50"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-teal-50 w-12 h-12 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-3xl font-black text-primary">250+</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Clients Empowered</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
