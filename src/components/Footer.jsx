import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#05080e] border-t border-glass-border pt-16 pb-8">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-bg-dark font-bold text-sm">I&C</span>
            </div>
            <span className="text-xl font-bold tracking-tight glow-text">Inkwell&Code</span>
          </div>
          <p className="text-dim max-w-sm mb-6">
            Leading creative agency in Nairobi specializing in premium web development, 
            high-end graphic design, and custom printing solutions.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-primary hover:text-bg-dark transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-primary hover:text-bg-dark transition-all">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-primary hover:text-bg-dark transition-all">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="flex flex-col gap-4 text-dim">
            <li><a href="#home" className="hover:text-primary">Home</a></li>
            <li><a href="#services" className="hover:text-primary">Services</a></li>
            <li><a href="#projects" className="hover:text-primary">Projects</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Contact Us</h4>
          <ul className="flex flex-col gap-4 text-dim">
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-primary" />
              <span>info@inkwellcode.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-primary" />
              <span>+254 700 000 000</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-primary" />
              <span>Nairobi, Kenya</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container border-t border-glass-border pt-8 text-center text-dim text-sm">
        <p>&copy; {new Date().getFullYear()} Inkwell&Code Studio. All rights reserved.</p>
      </div>
    </footer>
  )
}
