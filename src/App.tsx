import { MobileMenu } from "@/sections/MobileMenu";
import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { WhatWeDo } from "@/sections/WhatWeDo";
import { ProjectsCarousel } from "@/sections/ProjectsCarousel";
import { VideoGrid } from "@/sections/VideoGrid";
import { Testimonials } from "@/sections/Testimonials";
import { NewsSection } from "@/sections/NewsSection";
import { ContactForm } from "@/sections/ContactForm";
import { Footer } from "@/sections/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { useEffect } from 'react';

export const App = () => {
  useEffect(() => {
    // Reset any default margins/padding and improve scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 font-switzer">
      <CustomCursor />

      {/* Navigation */}
      <MobileMenu />
      <Navbar />

      {/* Main Content */}
      <main className="relative">
        <Hero />

        {/* Content Sections */}
        <div className="relative z-10">
          <section id="what-we-do"><WhatWeDo /></section>
          <section id="projects"><ProjectsCarousel /></section>
          <section id="video-grid"><VideoGrid /></section>
          <Testimonials />
          <section id="news"><NewsSection /></section>
          <section id="contact"><ContactForm /></section>
        </div>

        <Footer />
      </main>
    </div>
  );
};
