'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'DNBC Financial Group',
      category: 'Fintech Platform',
      description: 'Intelligent digital banking system, convenient payment platform, and global money transfer services.',
      image: '/api/placeholder/400/300',
      technologies: ['NextJS', 'React', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Tailwind'],
      liveUrl: 'https://dnbcgroup.com/',
      githubUrl: '#',
    },
    {
      title: 'Backoffice DNBC Group',
      category: 'Admin Dashboard',
      description: 'Payment service provider backoffice for individuals and businesses on a global scope.',
      image: '/api/placeholder/400/300',
      technologies: ['PHP', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'MySQL'],
      liveUrl: 'https://backoffice.dnbcnet.com/',
      githubUrl: '#',
    },
    {
      title: 'secure-hk.dnbcnet.com',
      category: 'Fintech Platform',
      description: 'Global payment service provider for individuals and businesses.',
      image: '/api/placeholder/400/300',
      technologies: ['NextJS', 'React', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Tailwind', 'Docker'],
      liveUrl: 'https://secure-hk.dnbcnet.com/',
      githubUrl: '#',
    },
    {
      title: 'secure.dnbcnet.com',
      category: 'Fintech Platform',
      description: 'Global payment platform for convenient and secure online transactions.',
      image: '/api/placeholder/400/300',
      technologies: ['PHP', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'MySQL'],
      liveUrl: 'https://secure.dnbcnet.com/',
      githubUrl: '#',
    },
    {
      title: 'papmall',
      category: 'E-commerce',
      description: 'Global e-commerce platform for customers and suppliers to optimize sales revenue.',
      image: '/api/placeholder/400/300',
      technologies: ['WordPress', 'HTML', 'SCSS', 'JavaScript', 'PHP', 'Bootstrap', 'jQuery'],
      liveUrl: 'https://papmall.com/',
      githubUrl: '#',
    },
    {
      title: 'PayCEC',
      category: 'Payment Platform',
      description: 'Global online payment platform for transactions, transfers, payments, and top-ups.',
      image: '/api/placeholder/400/300',
      technologies: ['HTML', 'CSS', 'JavaScript', 'SASS', 'PHP', 'jQuery', 'Bootstrap'],
      liveUrl: 'https://www.paycec.com/',
      githubUrl: '#',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <h3 className="text-2xl font-semibold text-gray-300">
            Featured Projects
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-600/30 flex items-center justify-center">
                  <div className="text-6xl font-bold text-white/20">
                    {project.title.charAt(0)}
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.liveUrl}
                    className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-200"
                    aria-label="View live project"
                  >
                    <ExternalLink size={20} className="text-white" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-200"
                    aria-label="View source code"
                  >
                    <Github size={20} className="text-white" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-sm font-medium text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h4>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs text-gray-300 bg-gray-700 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.liveUrl}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-center"
                  >
                    View Project
                  </a>
                  <a
                    href={project.githubUrl}
                    className="px-4 py-2 border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white rounded-lg text-sm font-medium transition-colors duration-200"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
