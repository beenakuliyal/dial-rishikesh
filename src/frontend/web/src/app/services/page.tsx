'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Monitor, Search, BarChart3, Video, Share2, Code, Zap, Globe } from 'lucide-react';

const detailedServices = [
  {
    title: "Web Design & Development",
    icon: <Monitor className="w-8 h-8" />,
    description: "We build more than just websites. we create high-converting digital storefronts. From complex E-commerce platforms to sleek landing pages, we ensure your business looks premium and performs flawlessly.",
    features: ["Custom UI/UX Design", "Next.js & React Development", "E-commerce Solutions", "Speed Optimization"],
    color: "bg-[#eef2f2]",
    textColor: "text-primary-dark"
  },
  {
    title: "SEO Mastery",
    icon: <Search className="w-8 h-8" />,
    description: "Dominating search results for local and global keywords. Our SEO strategy is data-driven, helping your business appear at the top when it matters most.",
    features: ["Local SEO (Rishikesh/UK)", "Technical SEO Audits", "Keyword Research", "On-Page Optimization"],
    color: "bg-[#ffe8d1]",
    textColor: "text-accent"
  },
  {
    title: "Digital Marketing",
    icon: <BarChart3 className="w-8 h-8" />,
    description: "Strategic campaign management that delivers measurable ROI. We handle Google Ads, Meta Ads, and performance marketing to scale your reach and conversion.",
    features: ["PPC Management", "Brand Strategy", "Email Marketing", "Performance Tracking"],
    color: "bg-primary text-white",
    textColor: "text-white"
  },
  {
    title: "Video & Photography",
    icon: <Video className="w-8 h-8" />,
    description: "In a visual world, content is king. We provide high-end visual storytelling to capture the soul of your brand, from corporate shoots to local tourism features.",
    features: ["Brand Storytelling", "Social Media Content", "Drone Photography", "Product Shoots"],
    color: "bg-white border-slate-100",
    textColor: "text-slate-600"
  },
  {
    title: "Social Media & Listings",
    icon: <Share2 className="w-8 h-8" />,
    description: "Stay ahead of the competition on Amazon, Flipkart, and social channels. We optimize your listings and manage your community to build lasting brand loyalty.",
    features: ["Amazon/Flipkart SEO", "Content Calendar", "Community Mgmt", "Profile Optimization"],
    color: "bg-[#f3f4f6]",
    textColor: "text-slate-600"
  }
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-block text-[10px] text-secondary font-black tracking-[0.3em] uppercase mb-4">Our Expertise</div>
            <h1 className="text-5xl lg:text-7xl font-black text-primary-dark mb-8">
              Innovative Service <br />
              <span className="text-secondary italic">Ecosystem</span>
            </h1>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
              We provide a comprehensive suite of digital tools designed for modern growth, tailored specifically for the unique needs of Himalayan businesses and global startups.
            </p>
          </motion.div>
        </section>

        <section className="bg-[#f9f9f9] py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12">
              {detailedServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className={`${service.color} rounded-[48px] p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-12 shadow-sm border border-slate-50`}
                >
                  <div className="lg:w-1/2">
                    <div className={`p-4 rounded-2xl bg-white shadow-lg inline-block mb-8 ${service.textColor}`}>
                      {service.icon}
                    </div>
                    <h2 className={`text-3xl lg:text-5xl font-black mb-6 ${service.textColor}`}>
                      {service.title}
                    </h2>
                    <p className={`text-lg mb-10 leading-relaxed font-medium ${service.textColor === 'text-white' ? 'text-white/80' : 'text-slate-500'}`}>
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center space-x-2">
                           <Zap className={`w-4 h-4 ${service.textColor === 'text-white' ? 'text-white' : 'text-secondary'}`} />
                           <span className={`text-sm font-bold ${service.textColor === 'text-white' ? 'text-white' : 'text-primary-dark'}`}>
                             {feature}
                           </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2 w-full aspect-video bg-white/30 rounded-[32px] overflow-hidden flex items-center justify-center p-8 backdrop-blur-sm border border-white/20">
                     <Monitor className={`w-32 h-32 opacity-10 ${service.textColor}`} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 max-w-5xl mx-auto px-4 text-center">
           <div className="bg-primary-dark text-white p-16 rounded-[48px] shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-[100px] opacity-20 -mr-32 -mt-32"></div>
             <div className="relative z-10">
               <h2 className="text-4xl lg:text-6xl font-black mb-8 italic">Ready to transform your business?</h2>
               <p className="text-white/60 mb-12 text-lg max-w-xl mx-auto">
                 Join 250+ clients who have scaled their presence with Dial Rishikesh.
               </p>
               <button className="bg-secondary text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-accent transition-all shadow-xl shadow-secondary/20">
                 Get Started Now
               </button>
             </div>
           </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
