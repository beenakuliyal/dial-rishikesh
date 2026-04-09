import React from 'react';
import { Send } from 'lucide-react';
import Link from 'next/link';

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#f3f4f6] pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          
          <div className="col-span-1">
            <Link href="/" className="text-2xl font-black text-primary mb-6 block">
              Dial <span className="text-secondary italic">Rishikesh</span>
            </Link>
            <p className="text-slate-500 font-medium leading-relaxed mb-8">
              Uttarakhand's leading digital marketing partner, bridging tradition with futuristic technology.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="p-2 bg-white rounded-lg text-primary hover:bg-primary hover:text-white transition-all">
                <FacebookIcon className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 bg-white rounded-lg text-primary hover:bg-primary hover:text-white transition-all">
                <InstagramIcon className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 bg-white rounded-lg text-primary hover:bg-primary hover:text-white transition-all">
                <LinkedinIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-black text-primary-dark mb-6 uppercase tracking-widest text-sm">Headquarters</h4>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li>Engineers Enclave</li>
              <li>Haridwar Road, Rishikesh</li>
              <li>Uttarakhand</li>
              <li><Link href="mailto:info@dialrishikesh.com" className="hover:text-primary transition-colors">hello@dialrishikesh.com</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-primary-dark mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Locate us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-primary-dark mb-6 uppercase tracking-widest text-sm">Newsletter</h4>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white border-none py-4 px-6 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all pr-14"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-primary text-white p-2.5 rounded-lg hover:bg-primary-dark transition-all">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-200 text-center">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.3em]">
            © 2026 Dial Rishikesh. Rooted in Tradition, Powered by Tech.
          </p>
        </div>
      </div>
    </footer>
  );
}

