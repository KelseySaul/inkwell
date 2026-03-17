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
    link: '#',
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
    <section id="projects" className="py-24 bg-[#0a0f18]/50 overflow-hidden">
      <div className="container px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-primary">Projects</span></h2>
            <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
            <p className="text-dim max-w-xl">
              From sophisticated web systems to creative graphic masterpieces, we deliver excellence in every pixel.
            </p>
          </div>
          
          <div className="flex glass p-1 rounded-xl">
            <button 
              onClick={() => setFilter('Web')}
              className={`px-6 py-2 rounded-lg transition-all ${filter === 'Web' ? 'bg-primary text-bg-dark font-bold' : 'text-white'}`}
            >
              Web Dev
            </button>
            <button 
              onClick={() => setFilter('Graphics')}
              className={`px-6 py-2 rounded-lg transition-all ${filter === 'Graphics' ? 'bg-primary text-bg-dark font-bold' : 'text-white'}`}
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
                className="glass group overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/600x400?text=Project+Image'
                    }}
                  />
                  <div className="absolute inset-0 bg-bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    {project.link && project.link !== '#' && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-primary text-bg-dark rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                        <ExternalLink size={20} />
                      </a>
                    )}
                    <button className="w-12 h-12 glass text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <ZoomIn size={20} />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider text-primary px-2 py-1 glass rounded-md border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-dim text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
