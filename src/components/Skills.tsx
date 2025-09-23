'use client';

import { motion } from 'framer-motion';

const Skills = () => {
  const skillUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/';
  const skills = [
    // Front-End
    { name: 'HTML5', iconUrl: `${skillUrl}html5/html5-original.svg` },
    { name: 'CSS3', iconUrl: `${skillUrl}css3/css3-original.svg` },
    { name: 'JavaScript', iconUrl: `${skillUrl}javascript/javascript-original.svg` },
    { name: 'TypeScript', iconUrl: `${skillUrl}typescript/typescript-original.svg` },
    { name: 'React', iconUrl: `${skillUrl}react/react-original.svg` },
    { name: 'Next.js', iconUrl: `${skillUrl}nextjs/nextjs-original.svg` },
    { name: 'Tailwind CSS', iconUrl: `${skillUrl}tailwindcss/tailwindcss-plain.svg` },
    { name: 'Bootstrap', iconUrl: `${skillUrl}bootstrap/bootstrap-original.svg` },
    { name: 'jQuery', iconUrl: `${skillUrl}jquery/jquery-original.svg` },

    // Back-End
    { name: 'Node.js', iconUrl: `${skillUrl}nodejs/nodejs-original.svg` },
    { name: 'NestJS', iconUrl: `${skillUrl}nestjs/nestjs-plain.svg` },
    { name: 'WordPress', iconUrl: `${skillUrl}wordpress/wordpress-plain.svg` },

    // Tools
    { name: 'Git', iconUrl: `${skillUrl}git/git-original.svg` },
    { name: 'GitHub', iconUrl: `${skillUrl}github/github-original.svg` },
    { name: 'VS Code', iconUrl: `${skillUrl}vscode/vscode-original.svg` },
    { name: 'Postman', iconUrl: `${skillUrl}postman/postman-original.svg` },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <h3 className="text-2xl font-semibold text-gray-300">
            Technologies I Work With
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 text-center group-hover:scale-105">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 bg-gray-800">
                  {skill.iconUrl ? (
                    <img src={skill.iconUrl} alt={skill.name} className="w-8 h-8 object-contain" />
                  ) : (
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded flex items-center justify-center text-white font-bold text-sm">
                      {skill.name.charAt(0)}
                    </div>
                  )}
                </div>
                <p className="text-gray-300 font-medium text-sm group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
