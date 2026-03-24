import { useState } from 'react'
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

  const displayedProjects = filter === 'Web' ? webProjects : graphicsProjects

  return (
    <section id="projects" className="py-28 bg-white overflow-hidden">
      <div className="container px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="section-label">Our Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Featured <span className="text-primary">Projects</span></h2>
            <p className="text-slate-500 max-w-xl">
              From sophisticated web systems to creative graphic masterpieces, we deliver excellence in every pixel.
            </p>
          </div>
          
          <div className="flex bg-slate-100 p-1 rounded-xl">
            <button 
              onClick={() => setFilter('Web')}
              className={`px-6 py-2 rounded-lg transition-all font-medium text-sm ${filter === 'Web' ? 'bg-white text-primary shadow-sm font-semibold' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Web Dev
            </button>
            <button 
              onClick={() => setFilter('Graphics')}
              className={`px-6 py-2 rounded-lg transition-all font-medium text-sm ${filter === 'Graphics' ? 'bg-white text-primary shadow-sm font-semibold' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Graphics
            </button>
          </div>
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
                className="bg-white border border-gray-100 shadow-sm rounded-2xl group overflow-hidden hover:shadow-md transition-all duration-300"
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
                      <span key={tag} className="text-[10px] uppercase tracking-widest text-indigo-700 font-bold px-3 py-1 bg-indigo-50/80 border border-indigo-100/50 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-slate-500 text-sm line-clamp-2">
                    {project.description}
                  </p>
                  {project.link && project.link !== '#' && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="md:hidden mt-5 inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors bg-indigo-50 px-4 py-2 rounded-lg w-full justify-center"
                    >
                      View Live Project <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
