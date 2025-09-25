"use client";

import { SectionHeader } from "@/components/section-header/section-header";
import { stats } from "@/mockup/common";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="pt-20 md:py-20">
      <div>
        <SectionHeader title="About" />

        <div className="grid lg:grid-cols-3 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 lg:col-span-2"
          >
            <div className="space-y-5 md:space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-300">
                Hello! I&apos;m Web Developer
              </h3>
              <h4 className="text-lg md:text-2xl text-blue-400">
                ReactJS • NextJS • Full Stack Developer
              </h4>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight">
              Build Modern Web Solutions
            </h1>

            <p className="text-sm md:text-xl flex flex-col gap-3 md:gap-4 text-gray-400 leading-relaxed">
              <span>
                Hi there, I’m a Frontend Developer with 3 years of
                experience building responsive and high-performance web
                applications using modern technologies such as React.js and
                Next.js.
              </span>
              <span>
                Currently, as a Web Developer at BIN Corporation Group, I work
                closely with product, SEO, and marketing teams to develop and
                optimize websites in the fields of finance, e-commerce, and
                payment gateways. I’m responsible for implementing new features,
                maintaining system stability, and ensuring SEO optimization to
                drive traffic and business growth.{" "}
              </span>
              <span>
                Previously, I contributed to projects like papmall, payCEC, and
                DNBC, where I transformed designs from Figma into responsive
                websites, integrated APIs, and optimized performance across
                devices. These experiences have strengthened my skills in
                frontend development, cross-functional collaboration, and
                delivering user-centric solutions that support both business and
                customer needs.
              </span>
              <span className="font-bold">
                My goal in the next 3 years is to become a Senior Frontend
                Developer, taking on greater responsibilities in architecture,
                performance optimization, and mentoring junior developers.
              </span>
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
                <div className="text-3xl md:text-5xl font-bold text-blue-400 mb-2 md:mb-3">
                  {stat.number}
                </div>
                <div className="text-sm md:text-lg text-gray-300 font-medium">
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
