import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-16 pb-8">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl font-bold tracking-tight text-white">
              Inkwell<span className="text-primary">&</span>Code
            </span>
          </div>
          <p className="text-slate-400 max-w-sm mb-6 text-sm leading-relaxed">
            Leading creative agency in Nairobi specializing in premium web development, 
            high-end graphic design, and custom printing solutions.
          </p>
          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-slate-400 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-slate-400 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-all">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-slate-400 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-all">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
          <ul className="flex flex-col gap-3">
            {['Home', 'About', 'Services', 'Projects', 'Testimonials', 'Contact'].map(link => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Contact Us</h4>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-indigo-400 shrink-0" />
              <span className="text-slate-400 text-sm">inkwellcode@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-indigo-400 shrink-0" />
              <span className="text-slate-400 text-sm">+254 714 524 430</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-indigo-400 shrink-0" />
              <span className="text-slate-400 text-sm">Nairobi, Kenya</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Inkwell&Code Studio. All rights reserved.</p>
      </div>
    </footer>
  )
}
