"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SectionHeader } from "./section-header/section-header";

const Contact = () => {
  const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email"),
    message: z.string().min(10, "Message must be at least 10 characters"),
  });

  type ContactForm = z.infer<typeof contactSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (_data: ContactForm) => {
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <section id="contact">
      <div>
        <SectionHeader
          title="Contact"
          subTitle="Open to Front-End roles, freelance work, and collaboration. Let’s connect!"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 md:col-span-1"
          >
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Email</h4>
                  <p className="text-gray-400">cvminhquan@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Location</h4>
                  <p className="text-gray-400">District 4, Ho Chi Minh City</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <h4 className="text-xl font-semibold text-white mb-4">
                Let’s Work Together
              </h4>
              <p className="text-gray-400 mb-6">
                I’m a Frontend Developer (React/Next.js, TypeScript, Tailwind).
                I’m interested in full-time roles, internships, and freelance
                projects. If you think I’m a good fit, feel free to reach out.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-gray-800 p-8 rounded-xl border border-gray-700"
          >
            {isSubmitted && (
              <div
                role="status"
                aria-live="polite"
                className="mb-4 rounded-lg border border-green-700 bg-green-900/40 px-4 py-3 text-sm text-green-200"
                tabIndex={0}
              >
                Thank you for your message! I will get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name")}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-200"
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <p className="mt-2 text-xs text-red-400" role="alert">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-xs text-red-400" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Enter your message..."
                />
                {errors.message && (
                  <p className="mt-2 text-xs text-red-400" role="alert">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-60 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
