import { motion } from 'framer-motion'
import { CheckCircle, Users, Lightbulb, Award } from 'lucide-react'

const pillars = [
  { icon: <Lightbulb size={20} className="text-indigo-500" />, text: 'Creative-first thinking' },
  { icon: <CheckCircle size={20} className="text-green-500" />, text: 'On-time delivery' },
  { icon: <Users size={20} className="text-purple-500" />, text: 'Client-centred approach' },
  { icon: <Award size={20} className="text-amber-500" />, text: 'Premium quality output' },
]

export default function About() {
  return (
    <section id="about" className="py-28 bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />

      <div className="container px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main card */}
            <div className="bg-gradient-to-br from-slate-800 via-indigo-950 to-slate-900 rounded-3xl p-10 text-white shadow-2xl shadow-indigo-900/20 border border-slate-700/50">
              <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-2">5+</div>
              <div className="text-slate-300 text-lg mb-8">Years crafting digital excellence</div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { n: '50+', l: 'Projects' },
                  { n: '30+', l: 'Clients' },
                  { n: '6', l: 'Services' },
                  { n: '100%', l: 'Dedication' },
                ].map(item => (
                  <div key={item.l} className="bg-white/5 hover:bg-white/10 transition-colors rounded-2xl p-4 border border-white/10 group cursor-default">
                    <div className="mb-1">
                      <div className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">{item.n}</div>
                    </div>
                    <div className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">{item.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating accent */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -right-6 bg-indigo-500 text-white rounded-2xl px-5 py-4 shadow-xl"
            >
              <div className="text-2xl font-bold">Nairobi</div>
              <div className="text-indigo-200 text-sm">Kenya 🇰🇪</div>
            </motion.div>
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Who We Are</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              A Studio Built for <span className="text-primary">Bold Brands</span>
            </h2>
            <p className="text-slate-500 leading-relaxed mb-6 font-medium text-lg">
              Inkwell&Code is a Nairobi-based creative studio that blends the precision of 
              code with the artistry of design. We partner with startups, SMEs, and 
              established businesses to create compelling digital experiences and brand identities.
            </p>
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-r-xl mb-6">
              <h3 className="text-indigo-900 font-bold mb-2">Our Story</h3>
              <p className="text-indigo-700/80 leading-relaxed text-sm">
                What started as a shared passion for beautiful interfaces and robust systems quickly grew into Inkwell&Code. 
                We believe that every brand has a unique voice, and our mission is to translate that voice into experiences 
                that resonate and drive growth.
              </p>
            </div>
            <p className="text-slate-500 leading-relaxed mb-10">
              From your first website to a complete brand overhaul, we bring the same 
              level of craft and dedication to every project — no matter the size.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3 border border-slate-100"
                >
                  {p.icon}
                  <span className="text-slate-700 font-medium text-sm">{p.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
