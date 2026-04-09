'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Search, BarChart3, Video, Share2 } from 'lucide-react';

const services = [
  {
    title: "Web Design & Development",
    desc: "High-performance websites that blend local aesthetics with global coding standards.",
    icon: <Monitor className="w-6 h-6" />,
    tags: ["E-commerce", "Landing Pages", "RE-UI"],
    color: "bg-[#eef2f2]",
    textColor: "text-primary-dark",
    gridSpan: "md:col-span-2",
  },
  {
    title: "SEO Mastery",
    desc: "Dominating search results for local and global keywords.",
    icon: <Search className="w-6 h-6" />,
    color: "bg-[#ffe8d1]",
    textColor: "text-accent",
    gridSpan: "md:col-span-1",
  },
  {
    title: "Digital Marketing",
    desc: "Strategic campaign management that delivers measurable ROI.",
    icon: <BarChart3 className="w-6 h-6" />,
    color: "bg-primary text-white",
    textColor: "text-white",
    gridSpan: "md:col-span-1",
  },
  {
    title: "Video & Photography",
    desc: "Capturing the soul of your brand through high-end visual storytelling.",
    icon: <Video className="w-12 h-12 text-secondary" />,
    color: "bg-white",
    textColor: "text-slate-600",
    gridSpan: "md:col-span-1",
    centered: true
  },
  {
    title: "Social Media & Listings",
    desc: "Social media management and optimized product listings for Amazon/Flipkart.",
    icon: <Share2 className="w-6 h-6" />,
    color: "bg-[#f3f4f6]",
    textColor: "text-slate-600",
    gridSpan: "md:col-span-1",
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-primary-dark mb-4">Innovative Service Ecosystem</h2>
          <p className="text-slate-500 max-w-2xl mx-auto italic font-medium">
            We provide a comprehensive suite of digital tools designed for modern growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className={`p-10 rounded-[40px] shadow-sm border border-slate-100 flex flex-col ${service.color} ${service.gridSpan} ${service.centered ? 'items-center text-center' : ''}`}
            >
              <div className={`mb-6 ${service.centered ? '' : 'flex justify-between'}`}>
                <div className={`p-4 rounded-2xl ${service.textColor === 'text-white' ? 'bg-white/10' : 'bg-white shadow-sm'}`}>
                  {service.icon}
                </div>
                {!service.centered && <div className="text-slate-100"><Monitor className="opacity-10" /></div>}
              </div>
              
              <h3 className={`text-2xl font-black mb-4 ${service.textColor}`}>{service.title}</h3>
              <p className={`mb-8 font-medium ${service.textColor === 'text-white' ? 'text-white/80' : 'text-slate-500'}`}>
                {service.desc}
              </p>
              
              {service.tags && (
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="px-4 py-1.5 bg-white text-xs font-bold text-slate-500 rounded-full border border-slate-100 uppercase tracking-tighter">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
