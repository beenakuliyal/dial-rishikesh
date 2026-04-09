'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { createClient } from '@/utils/supabase/client';

export default function LatestInsights() {
  const [insights, setInsights] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const fetchInsights = async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false })
        .limit(3);

      if (data) setInsights(data);
      setLoading(false);
    };

    fetchInsights();
  }, [supabase]);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <div className="text-[10px] text-secondary font-black tracking-[0.3em] uppercase mb-4">Latest Insights</div>
        </div>
        
        {loading ? (
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[4/3] bg-slate-100 rounded-[32px] mb-6"></div>
                <div className="h-8 bg-slate-100 rounded-xl mb-4 w-3/4"></div>
                <div className="h-4 bg-slate-100 rounded-lg w-full"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {insights.length === 0 ? (
               <div className="col-span-3 text-center py-12 text-slate-400 font-bold italic bg-slate-50 rounded-[40px] border border-dashed border-slate-200">
                  No insights published yet. Check back soon!
               </div>
            ) : (
              insights.map((item, index) => (
                <motion.div 
                  key={item.id}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden mb-6 shadow-lg bg-slate-100">
                    {item.image_url ? (
                      <Image 
                        src={item.image_url} 
                        alt={item.title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/30 flex items-center justify-center">
                        <span className="text-primary/20 font-black text-4xl italic uppercase">Dial Rishikesh</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-2xl font-black text-primary-dark mb-4 leading-tight group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 font-medium leading-relaxed line-clamp-2">
                    {item.content}
                  </p>
                </motion.div>
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
}

