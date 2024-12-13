'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Pet Store',
    description: 'Modern e-commerce platform for pet supplies',
    image: '/petstore.jpg',
    tags: ['React', 'Javascript', 'Tailwind'],
    link: '#',
  },
  {
    title: 'ChatGPT Clone',
    description: 'AI-powered conversational interface',
    image: '/chatgpts.png',
    tags: ['React', 'OpenAI', 'Node.js'],
    link: '#',
  },
  {
    title: 'Task Manager',
    description: 'Intuitive project and task management system',
    image: '/taskmanager.png',
    tags: ['NextJs', 'Express', 'MongoDB'],
    link: '#',
  },
];

export default function Projects() {
  const projectsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top center+=100',
          toggleActions: 'play none none reverse',
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={projectsRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card group relative overflow-hidden rounded-lg bg-neutral-900"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <motion.a
              href={project.link}
              className="block"
              whileHover="hover"
              initial="initial"
            >
              <div className="aspect-w-16 aspect-h-9 relative bg-neutral-800 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <motion.div
                  className="absolute inset-0 bg-accent/20 opacity-0 transition-opacity"
                  variants={{
                    initial: { opacity: 0 },
                    hover: { opacity: 1 }
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-white/5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <motion.div
                className="absolute top-4 right-4 bg-accent/90 rounded-full p-2 opacity-0"
                variants={{
                  initial: { opacity: 0, scale: 0.8 },
                  hover: { opacity: 1, scale: 1 }
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.div>
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 