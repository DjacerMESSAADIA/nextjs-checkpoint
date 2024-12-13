'use client';

import dynamic from 'next/dynamic';

// Dynamically import components with no SSR to avoid hydration issues
const Navigation = dynamic(() => import('../components/Navigation'), { ssr: false });
const Hero = dynamic(() => import('../components/Hero'), { ssr: false });
const About = dynamic(() => import('../components/About'), { ssr: false });
const Projects = dynamic(() => import('../components/Projects'), { ssr: false });
const Skills = dynamic(() => import('../components/Skills'), { ssr: false });
const Contact = dynamic(() => import('../components/Contact'), { ssr: false });

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
