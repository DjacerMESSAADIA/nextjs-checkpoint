"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-square relative rounded-2xl overflow-hidden"
          >
            <Image
              src="/profile.jpg"
              alt="Profile picture"
              width={500}
              height={500}
              className="object-cover w-full h-full"
              priority
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-300 mb-6">
              I'm a passionate developer with expertise in building modern web
              applications. My journey in tech has led me to work on diverse
              projects, from e-commerce platforms to AI-powered applications.
            </p>
            <p className="text-gray-300">
              I believe in creating intuitive, user-friendly experiences that
              solve real-world problems. When I'm not coding, you can find me
              exploring new technologies and contributing to other projects.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
