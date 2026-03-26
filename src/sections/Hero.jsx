import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Monitor, Palette, Printer } from 'lucide-react'

const floatingCards = [
  { icon: <Monitor size={18} className="text-indigo-500" />, label: 'Web Development', sub: 'React & Node.js' },
  { icon: <Palette size={18} className="text-purple-500" />, label: 'Graphic Design', sub: 'Brand Identity' },
  { icon: <Printer size={18} className="text-sky-500" />, label: 'Print Services', sub: 'High Quality' },
]

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
    },
  }

  const visionText = "Vision"

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-bg-dark transition-colors duration-300">
      {/* Grid background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:48px_48px] -z-20" />
      
      {/* Gradient blobs */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full blur-3xl opacity-60 -z-10" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="container px-4 md:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-[1.1] text-slate-900 dark:text-white"
            >
              Crafting Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 inline-block">
                {visionText.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ 
                      duration: 0.2,
                      delay: 0.8 + index * 0.1,
                      ease: "easeIn"
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              <br />
              <span className="text-slate-400 dark:text-slate-500">Pixel by Print</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-lg"
            >
              Inkwell&Code is a premier creative studio in Nairobi. We blend cutting-edge 
              web development with world-class graphic design to build brands that stand out.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a href="#projects" className="neon-btn flex items-center justify-center gap-2 group">
                Explore Our Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="px-7 py-3.5 rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary font-semibold transition-all duration-300 text-center">
                Get a Quote
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-8"
            >
              {[
                { value: '50+', label: 'Projects Done' },
                { value: '30+', label: 'Happy Clients' },
                { value: '5+', label: 'Years Experience' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Visual mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="hidden lg:flex flex-col items-center justify-center relative"
          >
            {/* Browser frame mockup */}
            <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden">
              {/* Browser chrome */}
              <div className="bg-slate-50 dark:bg-slate-800 border-b border-slate-100 dark:border-slate-700 px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400 dark:bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400 dark:bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-indigo-400 dark:bg-indigo-500" />
                </div>
                <div className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md px-3 py-1 text-xs text-slate-400 dark:text-slate-500">
                  inkwellandcode.com
                </div>
              </div>
              {/* Mock content */}
              <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 min-h-[220px]">
                <div className="h-4 w-2/3 bg-indigo-200 rounded-full mb-3" />
                <div className="h-3 w-full bg-slate-200 rounded-full mb-2" />
                <div className="h-3 w-5/6 bg-slate-200 rounded-full mb-6" />
                <div className="flex gap-3 mb-6">
                  <div className="h-8 w-28 bg-indigo-500 rounded-lg" />
                  <div className="h-8 w-24 bg-white border border-slate-200 rounded-lg" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-3 border border-slate-100 dark:border-slate-700 shadow-sm">
                      <div className="w-6 h-6 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg mb-2" />
                      <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating service cards */}
            {floatingCards.map((card, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }}
                className={`absolute bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-100/50 dark:border-slate-700/50 shadow-xl shadow-indigo-500/5 hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300 rounded-xl px-4 py-3 flex items-center gap-3 ${
                  i === 0 ? '-left-8 top-8' : i === 1 ? '-right-4 top-1/2' : '-left-6 bottom-8'
                }`}
              >
                <div className="w-8 h-8 bg-slate-50 dark:bg-slate-700 rounded-lg flex items-center justify-center">{card.icon}</div>
                <div>
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">{card.label}</p>
                  <p className="text-[10px] text-slate-400 dark:text-slate-400">{card.sub}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-5 h-9 border-2 border-slate-300 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-slate-400 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
