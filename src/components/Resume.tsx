"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const Resume = () => {
  const experiences = [
    {
      title: "Web Developer",
      company: "BIN Corporation Group",
      period: "September 2022 - Present",
      location: "Ho Chi Minh City, Vietnam",
      description:
        "Developed and maintained financial, e-commerce, and payment gateway platforms using NextJS. Ensured SEO optimization and improved loading speed with Next.js techniques. Collaborated with Product, SEO, Ad, and Marketing teams to deliver new features.",
    },
  ];

  const education = [
    {
      degree: "Engineering of Information Technology",
      school: "NONG LAM UNIVERSITY",
      period: "2018 - 2023",
      location: "Ho Chi Minh City",
      description:
        "Foundation in computer science, mathematics, and software engineering.",
    },
  ];

  return (
    <section id="resume" className="py-10 lg:py-20">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-white">Experience</h3>
            <div className="h-full">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-blue-500 h-full"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors duration-300 h-full flex flex-col">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {exp.title}
                    </h4>
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="text-blue-400 font-medium">
                        {exp.company}
                      </span>
                      <div className="flex items-center space-x-1 text-gray-400">
                        <Calendar size={16} />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-400 mb-3">
                      <MapPin size={16} />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-white">Education</h3>
            <div className="h-full">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-purple-500 h-full"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors duration-300 h-full flex flex-col">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {edu.degree}
                    </h4>
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="text-purple-400 font-medium">
                        {edu.school}
                      </span>
                      <div className="flex items-center space-x-1 text-gray-400">
                        <Calendar size={16} />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-400 mb-3">
                      <MapPin size={16} />
                      <span className="text-sm">{edu.location}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
