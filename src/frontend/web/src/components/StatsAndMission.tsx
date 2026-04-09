'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, Globe, Briefcase } from 'lucide-react';

export default function StatsAndMission() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-1/2">
            <motion.div 
              whileHover={{ y: -10 }}
              className="flex-1 bg-white p-8 rounded-[32px] shadow-xl border border-slate-50 flex items-center space-x-6"
            >
              <div className="bg-slate-100 p-4 rounded-2xl">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <div>
                <div className="text-4xl font-black text-primary">250+</div>
                <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">Projects Helped</div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="flex-1 bg-primary p-8 rounded-[32px] shadow-xl flex items-center space-x-6 text-white"
            >
              <div className="bg-white/10 p-4 rounded-2xl">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-4xl font-black italic">100+</div>
                <div className="text-xs text-white/60 font-bold uppercase tracking-widest">Profiles Recovered</div>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="inline-block text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em] mb-4">Next level digital era</div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-primary-dark mb-6 leading-tight">
              Rooted in Tradition, <br />
              Scaling with Technology.
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              Our mission is to support everyone from ambitious local startups to large established enterprises. We believe in the power of <span className="text-secondary font-bold italic">"Vocal for Local"</span>, ensuring Uttarakhand's businesses don't just survive in the digital age, but lead it.
            </p>
            <button className="text-primary font-bold inline-flex items-center space-x-2 group">
              <span>Learn about our impact</span>
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
