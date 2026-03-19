import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Michel Eliz',
    role: 'Founder, AfriFood',
    avatar: 'ME',
    color: 'bg-orange-500',
    review: 'Inkwell&Code delivered a stunning web platform for AfriFood that exceeded every expectation. Professional, fast, and incredibly talented team.',
    stars: 5,
  },
  {
    name: 'Dr. Annette Okoth',
    role: 'President',
    avatar: 'AO',
    color: 'bg-indigo-500',
    review: 'Our new website gave the Kenya Science Leadership Program the professional online presence it deserved. The team understood our vision perfectly.',
    stars: 5,
  },
  {
    name: 'James Mwangi',
    role: 'CEO, Realty Kenya',
    avatar: 'JM',
    color: 'bg-emerald-500',
    review: 'The Tinder for Houses app they built is exactly what our real estate business needed. Sleek, intuitive, and packed with features. Highly recommend.',
    stars: 5,
  },
  {
    name: 'Amina Hassan',
    role: 'Brand Manager, StyleKe',
    avatar: 'AH',
    color: 'bg-purple-500',
    review: 'Our brand identity package from Inkwell&Code was world-class. The logo, colours, and print materials came together beautifully.',
    stars: 5,
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />

      {/* Decorative large quote */}
      <div className="absolute top-12 left-8 text-slate-100 pointer-events-none select-none">
        <Quote size={160} strokeWidth={1} />
      </div>

      <div className="container px-4 md:px-8 relative">
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Don't just take our word for it — hear from the businesses we've helped grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <StarRating count={t.stars} />
              <p className="text-slate-600 leading-relaxed my-5 text-sm">"{t.review}"</p>
              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <div className={`w-11 h-11 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
    </section>
  )
}
