'use client';

import { motion } from 'framer-motion';

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
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Testimonials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <h3 className="text-2xl font-semibold text-gray-300">
            Trusted By Clients
          </h3>
        </motion.div>

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
                    <img key={i} src="/assets/icons/star.svg" alt="Star" className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  "{testimonial.text}"
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
