import React from 'react';
import Sidebar from '@/components/Sidebar';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <a
        href="#content"
        className="absolute left-0 top-0 z-[100] -translate-x-full rounded bg-teal px-4 py-3 text-sm font-bold uppercase tracking-widest text-navy transition focus:translate-x-0"
      >
        Skip to Content
      </a>
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Sidebar />
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
          <About />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}
