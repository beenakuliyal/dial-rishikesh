'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-1">
            <div className="flex space-x-1 mb-6">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />)}
            </div>
            <h2 className="text-5xl font-black text-primary-dark mb-6">
              Trusted by the Community
            </h2>
            <div className="text-2xl font-bold text-slate-400 mb-2">
              Google <span className="text-primary-dark">4.8/5</span>
            </div>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Based on 85 verified reviews</p>
          </div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-[#f9f9f9] p-8 rounded-[32px]">
              <p className="text-slate-500 italic mb-8">
                "Best agency in Rishikesh for digital growth. Their team understands the local market perfectly."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full"></div>
                <div>
                  <div className="font-black text-primary-dark">Kshitij Mangain</div>
                  <div className="text-xs font-bold text-slate-400 uppercase">Local Business Owner</div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-[#f9f9f9] p-8 rounded-[32px]">
              <p className="text-slate-500 italic mb-8">
                "Highly professional approach. They recovered our business profile in just a week!"
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full"></div>
                <div>
                  <div className="font-black text-primary-dark">Pankaj Pal</div>
                  <div className="text-xs font-bold text-slate-400 uppercase">Consultant</div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
