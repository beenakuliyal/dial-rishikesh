'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Target, Users, Heart, Globe, Award, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 overflow-hidden">
        {/* Story Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="inline-block text-[10px] text-secondary font-black tracking-[0.3em] uppercase mb-4">Our Journey</div>
              <h1 className="text-5xl lg:text-7xl font-black text-primary-dark mb-8 leading-tight">
                Rooted in the <br />
                <span className="text-secondary italic">Himalayas</span>
              </h1>
              <p className="text-slate-500 text-lg leading-relaxed mb-6 font-medium">
                Established in 2025, Dial Rishikesh was born from a vision to revolutionize the digital landscape of Uttarakhand. We saw incredible local talent and traditional businesses that needed a modern digital bridge to the global market.
              </p>
              <p className="text-slate-500 text-lg leading-relaxed mb-10 font-medium">
                Today, we are a leading IT Solutions and Digital Marketing Agency, blending the peaceful wisdom of Rishikesh with the fast-paced innovation of modern technology.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-black text-primary mb-2 italic">250+</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Global Clients</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-secondary mb-2 italic">10+</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Industry Awards</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="aspect-square bg-slate-100 rounded-[64px] overflow-hidden relative rotate-3 shadow-2xl">
                 <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center p-12 text-center text-4xl font-black text-primary/30 uppercase italic">
                   Dial Rishikesh HQ <br /> Rishikesh, UK
                 </div>
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[32px] shadow-2xl border border-slate-50 max-w-[280px]">
                <Sparkles className="text-secondary mb-4" />
                <p className="text-sm font-bold text-primary-dark italic">"Empowering the local economy with world-class digital tools."</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="bg-primary-dark text-white py-32 rounded-[64px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-black mb-6">Our Core Philosophy</h2>
              <p className="text-white/40 max-w-2xl mx-auto">We stand for excellence, localization, and innovation.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="bg-white/5 p-12 rounded-[40px] border border-white/10 hover:bg-white/10 transition-all">
                <Target className="w-10 h-10 text-secondary mb-8" />
                <h3 className="text-2xl font-black mb-4 uppercase italic">Integrity</h3>
                <p className="text-white/60 leading-relaxed font-medium">Transparent processes and honest consultation are the foundations of every partnership we build.</p>
              </div>
              <div className="bg-white/5 p-12 rounded-[40px] border border-white/10 hover:bg-white/10 transition-all">
                <Heart className="w-10 h-10 text-secondary mb-8" />
                <h3 className="text-2xl font-black mb-4 uppercase italic">Vocal for Local</h3>
                <p className="text-white/60 leading-relaxed font-medium">Supporting the Himalayan ecosystem by providing premium tech solutions to local entrepreneurs.</p>
              </div>
              <div className="bg-white/5 p-12 rounded-[40px] border border-white/10 hover:bg-white/10 transition-all">
                <Award className="w-10 h-10 text-secondary mb-8" />
                <h3 className="text-2xl font-black mb-4 uppercase italic">Excellence</h3>
                <p className="text-white/60 leading-relaxed font-medium">No placeholders. No compromises. We deliver high-performance solutions that exceed global standards.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 text-center">
          <div className="max-w-3xl mx-auto px-4">
             <h2 className="text-4xl lg:text-6xl font-black text-primary-dark mb-8">Let's Build Something <span className="text-secondary italic">Great</span> Together</h2>
             <p className="text-slate-500 mb-12 text-lg">Whether you're a local startup or a global brand, we have the tools you need to grow.</p>
             <button className="bg-primary text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-primary-dark transition-all shadow-xl shadow-primary/20">
               Connect with us
             </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
