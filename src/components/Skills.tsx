"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "Frontend Development", level: 90 },
  { name: "Backend Development", level: 95 },
  { name: "UI/UX Design", level: 80 },
  { name: "Mobile Development", level: 85 },
];

export default function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-bar", {
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top center+=100",
        },
        width: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.2,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          Skills
        </h2>
        <div className="space-y-8">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="text-lg">{skill.name}</span>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="skill-bar h-full bg-accent rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
