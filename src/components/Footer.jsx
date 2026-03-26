import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, ChevronUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-slate-900 pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Top gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container px-4 md:px-8 grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20 relative">
        {/* Column 1: Brand & Tagline */}
        <div className="flex flex-col items-start px-4">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-3xl font-black tracking-tighter text-white">
              Inkwell<span className="text-primary">&</span>Code
            </span>
          </div>
          <p className="text-slate-400 max-w-sm mb-8 text-[15px] leading-relaxed font-medium">
            Nairobi's premier creative studio blending high-performance web development 
            with world-class graphic design and precision print solutions.
          </p>
          <div className="flex gap-4">
            {[Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="w-11 h-11 bg-white/[0.03] border border-white/10 rounded-xl flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group"
              >
                <Icon size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="lg:pl-16 px-4">
          <h4 className="text-white font-black mb-8 text-sm uppercase tracking-[0.2em] flex items-center gap-3">
            <span className="w-6 h-px bg-primary" />
            Quick Links
          </h4>
          <ul className="grid grid-cols-2 gap-y-4 gap-x-12">
            {['Home', 'About', 'Services', 'Projects', 'Testimonials', 'Contact'].map(link => (
              <li key={link}>
                <a 
                  href={`#${link.toLowerCase()}`} 
                  className="text-slate-400 hover:text-primary transition-all duration-300 text-[15px] font-medium flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-primary group-hover:scale-125 transition-all" />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Info & Back to Top */}
        <div className="relative px-4">
          <h4 className="text-white font-black mb-8 text-sm uppercase tracking-[0.2em] flex items-center gap-3">
            <span className="w-6 h-px bg-primary" />
            Reach Out
          </h4>
          <ul className="flex flex-col gap-6">
            <li className="flex items-start gap-4 group cursor-default">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                <Mail size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-black tracking-widest text-slate-500 mb-1">Email</span>
                <span className="text-slate-300 font-medium truncate">inkwellcode@gmail.com</span>
              </div>
            </li>
            <li className="flex items-start gap-4 group cursor-default">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                <Phone size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-black tracking-widest text-slate-500 mb-1">WhatsApp</span>
                <span className="text-slate-300 font-medium">+254 714 524 430</span>
              </div>
            </li>
          </ul>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="absolute top-0 right-4 w-12 h-12 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-xl flex items-center justify-center transition-all duration-500 group border border-primary/20"
            aria-label="Back to top"
          >
            <ChevronUp size={22} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="container px-4 md:px-8">
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[13px] font-medium text-slate-500">
          <p className="tracking-tight px-4 text-center md:text-left">
            &copy; {new Date().getFullYear()} <span className="text-slate-300">Inkwell&Code Studio</span>. All rights reserved. Built in Nairobi.
          </p>
          <div className="flex gap-8 px-4 opacity-80 hover:opacity-100 transition-opacity">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
