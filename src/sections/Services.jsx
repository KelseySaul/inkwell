import { motion } from 'framer-motion'
import { Code, Palette, Smartphone, Printer, Layout, Database } from 'lucide-react'

const services = [
  {
    title: 'Web Development',
    description: 'Custom, high-performance web applications built with React, Node, and Supabase.',
    icon: <Code size={26} />,
    bg: 'bg-indigo-500',
  },
  {
    title: 'Graphic Design',
    description: 'Logo design, branding, and marketing materials that capture your brand essence.',
    icon: <Palette size={26} />,
    bg: 'bg-purple-500',
  },
  {
    title: 'UI/UX Design',
    description: 'Intuitive and beautiful interfaces designed for the best possible user experience.',
    icon: <Layout size={26} />,
    bg: 'bg-blue-500',
  },
  {
    title: 'Premium Printing',
    description: 'High-quality printing services for businesses, from stationery to large scale banners.',
    icon: <Printer size={26} />,
    bg: 'bg-violet-500',
  },
  {
    title: 'Fullstack Systems',
    description: 'Custom management systems (Hospital, Home, ERP) tailored to your needs.',
    icon: <Database size={26} />,
    bg: 'bg-purple-500',
  },
  {
    title: 'App Development',
    description: 'Responsive and robust mobile-first applications for all platforms.',
    icon: <Smartphone size={26} />,
    bg: 'bg-sky-500',
  }
]

export default function Services() {
  return (
    <section id="services" className="py-28 bg-slate-50 dark:bg-slate-900 relative transition-colors duration-300">
      {/* Decorative top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-200 dark:via-indigo-500/30 to-transparent" />

      <div className="container px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            We provide a comprehensive suite of creative and technical services to help your business grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8, boxShadow: '0 25px 50px rgba(99,102,241,0.15)' }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-indigo-100 dark:hover:border-indigo-500/50 transition-all duration-300 group cursor-default relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${service.bg} opacity-[0.03] dark:opacity-[0.05] rounded-bl-full transition-transform duration-500 group-hover:opacity-[0.08] group-hover:scale-110 -z-10`} />
              <div className={`w-14 h-14 ${service.bg} text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-200 dark:via-indigo-500/30 to-transparent" />
    </section>
  )
}
