'use client';

import { motion } from 'framer-motion';
import { BarChart3, Code, Globe, Smartphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Modern, responsive web applications built with ReactJS, NextJS, and cutting-edge frontend technologies.',
      features: ['ReactJS/NextJS', 'TypeScript', 'TailwindCSS', 'Responsive Design'],
    },
    {
      icon: Globe,
      title: 'Full Stack Development',
      description: 'Complete web solutions from frontend to backend, ensuring seamless integration and optimal performance.',
      features: ['Node.js/NestJS', 'PHP', 'MySQL', 'RESTful APIs'],
    },
    {
      icon: BarChart3,
      title: 'SEO & Performance Optimization',
      description: 'Optimize your website for search engines and improve loading speed with modern techniques.',
      features: ['SEO Optimization', 'Performance Tuning', 'Analytics Integration', 'Schema Markup'],
    },
    {
      icon: Smartphone,
      title: 'E-commerce Solutions',
      description: 'Build robust e-commerce platforms and payment gateway systems with modern web technologies.',
      features: ['E-commerce Platforms', 'Payment Gateways', 'User Management', 'Order Processing'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <h3 className="text-2xl font-semibold text-gray-300">
            AI Solutions That Matter
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 h-full flex flex-col">
                {/* Number */}
                <div className="text-6xl font-bold text-blue-500/20 mb-4">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon size={32} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
