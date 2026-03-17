import { motion } from 'framer-motion'
import { Code, Palette, Smartphone, Printer, Layout, Database } from 'lucide-react'

const services = [
  {
    title: 'Web Development',
    description: 'Custom, high-performance web applications built with React, Node, and Supabase.',
    icon: <Code className="text-primary" size={32} />,
    color: 'var(--primary)'
  },
  {
    title: 'Graphic Design',
    description: 'Logo design, branding, and marketing materials that capture your brand essence.',
    icon: <Palette className="text-primary" size={32} />,
    color: 'var(--primary)'
  },
  {
    title: 'UI/UX Design',
    description: 'Intuitive and beautiful interfaces designed for the best possible user experience.',
    icon: <Layout className="text-primary" size={32} />,
    color: 'var(--primary)'
  },
  {
    title: 'Premium Printing',
    description: 'High-quality printing services for businesses, from stationery to large scale banners.',
    icon: <Printer className="text-primary" size={32} />,
    color: 'var(--primary)'
  },
  {
    title: 'Fullstack Systems',
    description: 'Custom management systems (Hospital, Home, ERP) tailored to your needs.',
    icon: <Database className="text-primary" size={32} />,
    color: 'var(--primary)'
  },
  {
    title: 'App Development',
    description: 'Responsive and robust mobile-first applications for all platforms.',
    icon: <Smartphone className="text-primary" size={32} />,
    color: 'var(--primary)'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="container px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-primary">Services</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-dim max-w-2xl mx-auto">
            We provide a comprehensive suite of creative and technical services to help your business grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 group hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary/20 transition-all">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-dim leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
