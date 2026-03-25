import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ZoomIn } from 'lucide-react'

const webProjects = [
  {
    id: 'keslp',
    title: 'Kenya Science Leadership Program',
    category: 'Web Development',
    image: '/images/keslp1.png',
    description: 'A professional platform for the Kenya Science Leadership Program (KeSLP).',
    link: 'https://www.kenyascienceleadershipprogram.co.ke/',
    tags: ['React', 'Business', 'Education']
  },
  {
    id: 'afrifood',
    title: 'AfriFood',
    category: 'Web Development',
    image: '/images/afri1.png',
    description: 'A culinary platform for African recipes with auth and database storage.',
    link: 'https://afrifood.vercel.app/',
    tags: ['React', 'Supabase', 'Auth']
  },
  {
    id: 'hsm',
    title: 'Hospital Management System',
    category: 'Web Development',
    image: '/images/hsm1.png',
    description: 'A comprehensive HSM with multi-role access control.',
    link: 'https://hsm-five.vercel.app/',
    tags: ['Fullstack', 'Hospital', 'Management']
  },
  {
    id: 'tinder-house',
    title: 'Tinder for Houses',
    category: 'Web Development',
    image: '/images/t1.png',
    description: 'A home management system with M-Pesa integration and Tinder-style UI.',
    link: 'https://realestate-nu-gray.vercel.app/',
    tags: ['React', 'M-Pesa', 'Systems']
  }
]

// Graphics projects images 1-14
const graphicsProjects = Array.from({ length: 14 }, (_, i) => ({
  id: `graphics-${i + 1}`,
  title: `Graphic Design Project ${i + 1}`,
  category: 'Graphic Design',
  image: `/images/${i + 1}.${(i + 1) === 14 ? 'jpg' : 'jpeg'}`,
  description: 'Graphic design showcasing branding and creative skills.',
  tags: ['Design', 'Branding', 'Print']
}))

export default function Projects() {
  const [filter, setFilter] = useState('Web')
  const [graphicsCount, setGraphicsCount] = useState(6)

  // Reset pagination when switching tabs
  useEffect(() => {
    if (filter === 'Web') setGraphicsCount(6)
  }, [filter])

  const displayedProjects = filter === 'Web' ? webProjects : graphicsProjects.slice(0, graphicsCount)

  return (
    <section id="projects" className="py-28 bg-white dark:bg-bg-dark overflow-hidden transition-colors duration-300">
      <div className="container px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Our Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Featured <span className="text-primary">Projects</span></h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl">
              From sophisticated web systems to creative graphic masterpieces, we deliver excellence in every pixel.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex bg-slate-100 dark:bg-slate-800/50 p-1.5 rounded-xl relative"
          >
            <motion.div 
              className="absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-white dark:bg-slate-700 shadow-sm rounded-lg"
              animate={{ left: filter === 'Web' ? '6px' : 'calc(50% + 2px)' }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
            <button 
              onClick={() => setFilter('Web')}
              className={`relative z-10 w-32 py-2.5 rounded-lg transition-colors font-medium text-sm ${filter === 'Web' ? 'text-primary dark:text-white font-semibold' : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'}`}
            >
              Web Dev
            </button>
            <button 
              onClick={() => setFilter('Graphics')}
              className={`relative z-10 w-32 py-2.5 rounded-lg transition-colors font-medium text-sm ${filter === 'Graphics' ? 'text-primary dark:text-white font-semibold' : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'}`}
            >
              Graphics
            </button>
          </motion.div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-sm rounded-2xl group overflow-hidden hover:shadow-md dark:hover:shadow-xl dark:shadow-slate-900/50 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='600' height='400' fill='%23eef2ff'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%236366f1' font-family='sans-serif' font-size='18'%3EImage Coming Soon%3C/text%3E%3C/svg%3E"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {project.link && project.link !== '#' && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:scale-110 hover:bg-indigo-400 transition-all shadow-xl shadow-indigo-500/30">
                          <ExternalLink size={20} />
                        </a>
                      )}
                      <button className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full flex items-center justify-center hover:scale-110 hover:bg-white/30 transition-all">
                        <ZoomIn size={20} />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest text-indigo-700 dark:text-indigo-300 font-bold px-3 py-1 bg-indigo-50/80 dark:bg-indigo-500/20 border border-indigo-100/50 dark:border-indigo-500/30 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2">
                    {project.description}
                  </p>
                  {project.link && project.link !== '#' && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="md:hidden mt-5 inline-flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 transition-colors bg-indigo-50 dark:bg-indigo-500/20 px-4 py-2 rounded-lg w-full justify-center"
                    >
                      View Live Project <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filter === 'Graphics' && graphicsCount < graphicsProjects.length && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center"
          >
            <button 
              onClick={() => setGraphicsCount(prev => prev + 6)}
              className="px-8 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary font-semibold transition-all duration-300"
            >
              Load More Graphics
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
