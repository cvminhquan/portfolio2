import { Project } from "@/mockup/common";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export interface PortfolioCardProps {
  project: Project;
}

export const PortfolioCard = ({ project }: PortfolioCardProps) => {
  return (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
      className="group bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300"
    >
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 overflow-hidden">
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        )}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-600/30 flex items-center justify-center">
          <div className="text-6xl font-bold text-white/20">
            {project.title.charAt(0)}
          </div>
        </div> */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <a
            href={project.liveUrl}
            className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-200"
            aria-label="View live project"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={20} className="text-white" />
          </a>
          {/* <a
                    href={project.githubUrl}
                    className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-200"
                    aria-label="View source code"
                  >
                    <Github size={20} className="text-white" />
                  </a> */}
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
          {project.technologies.map((tech: string, techIndex: number) => (
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
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
          {/* <a
                    href={project.githubUrl}
                    className="px-4 py-2 border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white rounded-lg text-sm font-medium transition-colors duration-200"
                  >
                    <Github size={16} />
                  </a> */}
        </div>
      </div>
    </motion.div>
  );
};
