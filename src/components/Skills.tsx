'use client';

import { SectionHeader } from '@/components/section-header';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Skills = () => {
  const skillUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/';
  const skillGroups = [
    {
      title: "Front-End",
      items: [
        { name: "HTML5", iconUrl: `${skillUrl}html5/html5-original.svg` },
        { name: "CSS3", iconUrl: `${skillUrl}css3/css3-original.svg` },
        {
          name: "JavaScript",
          iconUrl: `${skillUrl}javascript/javascript-original.svg`,
        },
        {
          name: "TypeScript",
          iconUrl: `${skillUrl}typescript/typescript-original.svg`,
        },
        { name: "React", iconUrl: `${skillUrl}react/react-original.svg` },
        { name: "Next.js", iconUrl: `${skillUrl}nextjs/nextjs-original.svg` },
        {
          name: "Tailwind CSS",
          iconUrl: `${skillUrl}tailwindcss/tailwindcss-original.svg`,
        },
        {
          name: "Bootstrap",
          iconUrl: `${skillUrl}bootstrap/bootstrap-original.svg`,
        },
        { name: "jQuery", iconUrl: `${skillUrl}jquery/jquery-original.svg` },
        { name: "NestJS", iconUrl: `${skillUrl}nestjs/nestjs-original.svg` },
      ],
    },
    {
      title: "Back-End",
      items: [
        {
          name: "WordPress",
          iconUrl: `${skillUrl}wordpress/wordpress-plain.svg`,
        },
        { name: "Node.js", iconUrl: `${skillUrl}nodejs/nodejs-original.svg` },
      ],
    },
    {
      title: "Tools",
      items: [
        { name: "Git", iconUrl: `${skillUrl}git/git-original.svg` },
        { name: "GitHub", iconUrl: `${skillUrl}github/github-original.svg` },
        { name: "VS Code", iconUrl: `${skillUrl}vscode/vscode-original.svg` },
        { name: "Postman", iconUrl: `${skillUrl}postman/postman-original.svg` },
      ],
    },
  ];

  return (
      <section id="skills">
      <div>
        <SectionHeader title="Skills" />
        
        <div className="grid gap-12 md:gap-16 grid-cols-1 md:grid-cols-2">
          {skillGroups.map((group, groupIdx) => (
            <div key={group.title} className={`${groupIdx === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}>
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-white">{group.title}</h4>
                <div className="mt-3 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>
              <div className="flex flex-wrap items-start justify-center gap-4">
                {group.items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: (groupIdx * 0.1) + (index * 0.05) }}
                    viewport={{ once: true }}
                    className="group md:w-[88px]"
                  >
                    <div className="bg-gray-900 p-2 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 text-center group-hover:scale-105">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2 bg-gray-600">
                        {skill.iconUrl ? (
                          <Image src={skill.iconUrl} alt={skill.name} width={32} height={32} className="w-8 h-8 object-contain" />
                        ) : (
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded flex items-center justify-center text-white font-bold text-sm">
                            {skill.name.charAt(0)}
                          </div>
                        )}
                      </div>
                      <p className="text-gray-300 font-medium text-xs leading-tight group-hover:text-white transition-colors duration-300" aria-label={skill.name}>
                        {skill.name}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
