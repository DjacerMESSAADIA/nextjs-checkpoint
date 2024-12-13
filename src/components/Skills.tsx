"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "Frontend Development", level: 90 },
  { name: "Backend Development", level: 95 },
  { name: "UI/UX Design", level: 80 },
  { name: "Mobile Development", level: 85 },
];

const languages = [
  { name: "JavaScript", icon: "/icons/javascript.svg", color: "#F7DF1E" },
  { name: "TypeScript", icon: "/icons/typescript.svg", color: "#3178C6" },
  { name: "React", icon: "/icons/react.svg", color: "#61DAFB" },
  { name: "Next.js", icon: "/icons/nextdotjs.svg", color: "#000000" },
  { name: "Node.js", icon: "/icons/nodedotjs.svg", color: "#339933" },
  { name: "MongoDB", icon: "/icons/mongodb.svg", color: "#47A248" },
  { name: "SQL", icon: "/icons/sqlite.svg", color: "#4479A1" },
  { name: "Docker", icon: "/icons/docker.svg", color: "#2496ED" },
  { name: "HTML", icon: "/icons/html5.svg", color: "#E34F26" },
  { name: "CSS", icon: "/icons/css3.svg", color: "#1572B6" },
  { name: ".NET", icon: "/icons/dotnet.svg", color: "#512BD4" },
  { name: "Dart", icon: "/icons/dart.svg", color: "#0175C2" },
  { name: "Express.js", icon: "/icons/express.svg", color: "#000000" },
  { name: "Bootstrap", icon: "/icons/bootstrap.svg", color: "#7952B3" },
  { name: "p5.js", icon: "/icons/p5dotjs.svg", color: "#ED225D" },
  { name: "Tailwind", icon: "/icons/tailwindcss.svg", color: "#06B6D4" }
];

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollWidth = carouselRef.current?.scrollWidth || 0;
    const clientWidth = carouselRef.current?.clientWidth || 0;
    const maxScroll = scrollWidth - clientWidth;

    const autoScroll = gsap.to(carouselRef.current, {
      scrollLeft: maxScroll,
      duration: 30,
      ease: "none",
      repeat: -1,
      repeatDelay: 0,
      yoyo: true,
      paused: true,
    });

    if (!isPaused) {
      autoScroll.play();
    } else {
      autoScroll.pause();
    }

    return () => {
      autoScroll.kill();
    };
  }, [isPaused]);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center">
          Skills & Technologies
        </h2>

        {/* Professional Skills */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-10 text-center">Professional Skills</h3>
          <div className="max-w-3xl mx-auto grid gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="relative">
                <div className="flex justify-between mb-3">
                  <span className="text-lg font-medium">{skill.name}</span>
                  <span className="text-accent font-medium">{skill.level}%</span>
                </div>
                <div className="h-3 bg-black/40 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
                    className="h-full bg-accent rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div>
          <h3 className="text-2xl font-bold mb-10 text-center">Technologies & Tools</h3>
          <div className="relative">
            {/* Background blur effects */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-accent/30 rounded-full blur-xl" />
              <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-purple-500/30 rounded-full blur-xl" />
            </div>
            
            <div className="relative overflow-hidden rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10">
              <div 
                ref={carouselRef}
                className="overflow-x-scroll scrollbar-hide"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="flex gap-4 p-6">
                  {languages.map((lang, index) => (
                    <motion.div
                      key={lang.name}
                      className="flex-shrink-0 relative flex flex-col items-center justify-center w-28 h-28 bg-black/40 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors"
                      onHoverStart={() => setHoveredIndex(index)}
                      onHoverEnd={() => setHoveredIndex(null)}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="relative w-12 h-12 mb-3">
                        <Image
                          src={lang.icon}
                          alt={lang.name}
                          fill
                          className="object-contain"
                          style={{ filter: 'brightness(0) invert(1)', opacity: 0.9 }}
                          onLoadingComplete={(img) => {
                            img.style.filter = 'none';
                            img.style.opacity = '1';
                          }}
                        />
                      </div>
                      <span className="text-sm font-medium text-center px-2">{lang.name}</span>
                      
                      {hoveredIndex === index && (
                        <motion.div
                          layoutId="glow"
                          className="absolute inset-0 -z-10 rounded-xl"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          style={{
                            boxShadow: `0 0 25px ${lang.color}40, inset 0 0 25px ${lang.color}30`,
                            border: `1px solid ${lang.color}`,
                          }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
