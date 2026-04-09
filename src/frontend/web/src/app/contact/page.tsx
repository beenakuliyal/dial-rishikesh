'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid lg:grid-cols-2 gap-20">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-block text-[10px] text-secondary font-black tracking-[0.3em] uppercase mb-4">Get In Touch</div>
              <h1 className="text-5xl lg:text-7xl font-black text-primary-dark mb-8 leading-tight">
                Let's Start a <br />
                <span className="text-secondary italic">Conversation</span>
              </h1>
              <p className="text-slate-500 text-lg leading-relaxed mb-12 font-medium">
                Whether you have a question about our services, pricing, or just want to say hi, our team is ready to answer all your questions.
              </p>

              <div className="space-y-8">
                <div className="flex items-center space-x-6 group">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Email Us</div>
                    <div className="text-xl font-black text-primary-dark italic">hello@dialrishikesh.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 group">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Call Us</div>
                    <div className="text-xl font-black text-primary-dark italic">+91 98765 43210</div>
                  </div>
                </div>

                <div className="flex items-center space-x-6 group">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Locate Us</div>
                    <div className="text-xl font-black text-primary-dark italic">Engineers Enclave, Rishikesh, UK</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-10 lg:p-16 rounded-[64px] shadow-2xl border border-slate-50"
            >
              <h2 className="text-3xl font-black text-primary-dark mb-10 italic">Send us a message</h2>
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Your Name</label>
                    <input type="text" className="w-full bg-slate-50 border-none py-4 px-6 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Email Address</label>
                    <input type="email" className="w-full bg-slate-50 border-none py-4 px-6 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Subject</label>
                  <input type="text" className="w-full bg-slate-50 border-none py-4 px-6 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Inquiry about Services" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Your Message</label>
                  <textarea rows={6} className="w-full bg-slate-50 border-none py-6 px-8 rounded-[32px] focus:ring-2 focus:ring-primary outline-none transition-all resize-none" placeholder="Tell us more about your project..."></textarea>
                </div>
                <button className="w-full bg-primary text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 flex items-center justify-center space-x-3">
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </motion.div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
