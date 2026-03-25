import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Michel Eliz',
    role: 'Founder, AfriFood',
    avatar: 'ME',
    color: 'bg-gradient-to-br from-orange-400 to-pink-500',
    review: 'Inkwell&Code delivered a stunning web platform for AfriFood that exceeded every expectation. Professional, fast, and incredibly talented team.',
    stars: 5,
  },
  {
    name: 'Dr. Annette Okoth',
    role: 'President',
    avatar: 'AO',
    color: 'bg-gradient-to-br from-indigo-400 to-purple-600',
    review: 'Our new website gave the Kenya Science Leadership Program the professional online presence it deserved. The team understood our vision perfectly.',
    stars: 5,
  },
  {
    name: 'James Mwangi',
    role: 'CEO, Realty Kenya',
    avatar: 'JM',
    color: 'bg-gradient-to-br from-purple-400 to-teal-600',
    review: 'The Tinder for Houses app they built is exactly what our real estate business needed. Sleek, intuitive, and packed with features. Highly recommend.',
    stars: 5,
  },
  {
    name: 'Amina Hassan',
    role: 'Brand Manager, StyleKe',
    avatar: 'AH',
    color: 'bg-gradient-to-br from-purple-400 to-pink-600',
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

  function TestimonialCard({ t }) {
    return (
      <div className="testimonial-card bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(99,102,241,0.12)] w-[320px] shrink-0 mx-4 flex flex-col justify-between">
        <div>
          <StarRating count={t.stars} />
          <p className="text-slate-600 dark:text-slate-300 leading-snug my-4 text-[14px] italic">"{t.review}"</p>
        </div>
        <div className="flex items-center gap-3 pt-4 border-t border-slate-50 dark:border-slate-700/50 mt-auto">
          <div className={`w-12 h-12 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-inner ring-4 ring-slate-50 dark:ring-slate-800`}>
            {t.avatar}
          </div>
          <div>
            <p className="font-bold text-slate-900 dark:text-white">{t.name}</p>
            <p className="text-slate-500 dark:text-slate-400 text-[11px] font-bold uppercase tracking-wider mt-0.5">{t.role}</p>
          </div>
        </div>
      </div>
    )
  }

export default function Testimonials() {
  // Duplicate twice for seamless infinite loop
  const looped = [...testimonials, ...testimonials, ...testimonials]

  return (
    <section id="testimonials" className="py-28 bg-slate-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-200 dark:via-indigo-500/30 to-transparent" />

      {/* Decorative large quote */}
      <div className="absolute top-12 left-8 text-slate-100 dark:text-slate-800/50 pointer-events-none select-none">
        <Quote size={160} strokeWidth={1} />
      </div>

      <div className="relative">
        <div className="text-center mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              Don't just take our word for it — hear from the businesses we've helped grow.
            </p>
          </motion.div>
        </div>

        {/* Marquee track — full width, no container constraint */}
        <div className="marquee-wrapper">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-slate-50 dark:from-slate-900 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-slate-50 dark:from-slate-900 to-transparent" />

          <div className="marquee-track">
            {looped.map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-200 dark:via-indigo-500/30 to-transparent" />
    </section>
  )
}
