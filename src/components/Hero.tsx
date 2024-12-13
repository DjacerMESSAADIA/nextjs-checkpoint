"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useAnimationControls,
  useMotionValue,
  useTransform,
} from "framer-motion";

export default function Hero() {
  const controls = useAnimationControls();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    });

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [controls, mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden relative"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-r from-accent/10 via-purple-500/10 to-accent/10 blur-2xl opacity-50" />
      </div>

      <motion.div
        className="text-center relative z-10"
        style={{ perspective: 1000, rotateX, rotateY }}
        initial={{ opacity: 0, y: 100 }}
        animate={controls}
      >
        <motion.h1
          className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 relative cursor-default group"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="relative inline-block">
            Software Developer
            <motion.span className="absolute inset-0 bg-gradient-to-r from-accent via-purple-500 to-accent opacity-0 group-hover:opacity-100 blur-2xl -z-10 transition-opacity duration-500" />
          </span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.span
            className="inline-block"
            whileHover={{
              scale: 1.1,
              color: "#fff",
              transition: { duration: 0.2 },
            }}
          >
            Crafting
          </motion.span>{" "}
          <motion.span
            className="inline-block"
            whileHover={{
              scale: 1.1,
              color: "#fff",
              transition: { duration: 0.2 },
            }}
          >
            digital
          </motion.span>{" "}
          <motion.span
            className="inline-block"
            whileHover={{
              scale: 1.1,
              color: "#fff",
              transition: { duration: 0.2 },
            }}
          >
            experiences
          </motion.span>{" "}
          <motion.span
            className="inline-block"
            whileHover={{
              scale: 1.1,
              color: "#fff",
              transition: { duration: 0.2 },
            }}
          >
            through
          </motion.span>{" "}
          <motion.span
            className="inline-block"
            whileHover={{
              scale: 1.1,
              color: "#fff",
              transition: { duration: 0.2 },
            }}
          >
            code
          </motion.span>{" "}
          <motion.span
            className="inline-block"
            whileHover={{
              scale: 1.1,
              color: "#fff",
              transition: { duration: 0.2 },
            }}
          >
            and
          </motion.span>{" "}
          <motion.span
            className="inline-block"
            whileHover={{
              scale: 1.1,
              color: "#fff",
              transition: { duration: 0.2 },
            }}
          >
            design
          </motion.span>
        </motion.p>

        <motion.div
          className="mt-8 flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            onClick={() => scrollToSection("projects")}
            className="px-6 py-3 bg-accent rounded-lg font-medium relative z-10"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(255,90,95,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.button>
          <motion.button
            onClick={() => scrollToSection("contact")}
            className="px-6 py-3 border border-white/20 rounded-lg font-medium relative z-10"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
