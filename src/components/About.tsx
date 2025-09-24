"use client";

import { SectionHeader } from "@/components/section-header/section-header";
import { stats } from "@/mockup/common";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about">
      <div>
        <SectionHeader title="About" subTitle="Hello! I&amp;m Web Developer" />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-gray-300">
                Hello! I&amp;m Web Developer
              </h3>
              <h4 className="text-2xl text-blue-400">
                ReactJS • NextJS • Full Stack Developer
              </h4>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight">
              Build Modern Web Solutions
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed">
              As a Web Developer with nearly 3 years of experience, I specialize
              in building responsive, high-performance web applications using
              modern frontend frameworks like ReactJS/NextJS and backend
              technologies including PHP and Node.js/NestJS. I am passionate
              about code quality, system performance, and user experience, and I
              continuously improve my skills to deliver robust and scalable web
              solutions.
            </p>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gray-900 rounded-2xl border border-gray-700 hover:border-blue-500 transition-colors duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-3">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
