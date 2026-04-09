'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { createClient } from '@/utils/supabase/client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Calendar, User } from 'lucide-react';

export default function BlogPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (data) setBlogs(data);
      setLoading(false);
    };

    fetchBlogs();
  }, [supabase]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
             <div className="inline-block text-[10px] text-secondary font-black tracking-[0.3em] uppercase mb-4">Latest Insights</div>
             <h1 className="text-5xl lg:text-7xl font-black text-primary-dark mb-6 leading-tight">
               Our <span className="text-secondary italic">Blog</span>
             </h1>
             <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
               Expert advice, industry updates, and local stories from the heart of Rishikesh's digital powerhouse.
             </p>
           </motion.div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="animate-pulse bg-slate-50 rounded-[48px] h-[500px]"></div>
              ))}
            </div>
          ) : (
            <>
              {blogs.length === 0 ? (
                <div className="py-24 text-center bg-slate-50 rounded-[64px] border-2 border-dashed border-slate-200">
                  <p className="text-slate-400 font-black italic text-xl uppercase tracking-widest">No stories published yet.</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                  {blogs.map((blog, index) => (
                    <motion.div
                      key={blog.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group cursor-pointer"
                    >
                      <div className="relative aspect-[4/5] rounded-[48px] overflow-hidden mb-8 shadow-2xl bg-slate-100">
                        {blog.image_url ? (
                          <Image src={blog.image_url} alt={blog.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/30 flex items-center justify-center p-8 text-center text-primary/20 font-black text-4xl italic uppercase">
                             Dial <br /> Rishikesh
                          </div>
                        )}
                        <div className="absolute top-6 left-6 flex space-x-2">
                           <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-primary shadow-lg border border-white/20">
                             Insight
                           </span>
                        </div>
                      </div>
                      
                      <div className="px-4">
                        <div className="flex items-center space-x-4 text-xs font-black text-slate-400 uppercase tracking-widest mb-4 italic">
                           <div className="flex items-center space-x-1">
                             <Calendar className="w-3 h-3" />
                             <span>{new Date(blog.created_at).toLocaleDateString()}</span>
                           </div>
                           <div className="flex items-center space-x-1">
                             <User className="w-3 h-3" />
                             <span>Admin</span>
                           </div>
                        </div>
                        <h2 className="text-3xl font-black text-primary-dark mb-4 leading-tight group-hover:text-primary transition-colors">
                          {blog.title}
                        </h2>
                        <p className="text-slate-500 font-medium leading-relaxed line-clamp-3 mb-6">
                          {blog.content}
                        </p>
                        <div className="flex items-center space-x-2 text-primary font-black uppercase tracking-widest text-xs">
                           <span>Read Full Story</span>
                           <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
