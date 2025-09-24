'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SectionHeader } from './section-header/section-header';

const Testimonials = () => {
  const testimonials = [
    {
      text: "ZenG delivered exceptional work. He's professional, fast, and extremely easy to work with. I'd definitely hire him again for future projects!",
      author: "Lincoln Press",
      position: "CEO Themesfalt",
    },
    {
      text: "ZenG managed our project with impressive efficiency and clarity. Deadlines were met, communication was smooth, and the outcome was exactly what we hoped for.",
      author: "Cheyenne Mango",
      position: "CEO Themesfalt",
    },
    {
      text: "ZenG managed our project with impressive efficiency and clarity. Deadlines were met, communication was smooth, and the outcome was exactly what we hoped for.",
      author: "Cheyenne Mango",
      position: "CEO Themesfalt",
    },
    {
      text: "ZenG managed our project with impressive efficiency and clarity. Deadlines were met, communication was smooth, and the outcome was exactly what we hoped for.",
      author: "Mas Shin",
      position: "DEV Themesfalt",
    },
  ];

  return (
    <section id="testimonials">
      <div>
        <SectionHeader title="Testimonials" subTitle="Trusted By Clients" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Image key={i} src="/assets/icons/star.svg" alt="Star" width={16} height={16} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>
                
                <div className="pt-4 border-t border-gray-700">
                  <h4 className="font-semibold text-white">{testimonial.author}</h4>
                  <p className="text-sm text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
