import { Navbar } from "../sections/Navbar";
import { Hero } from "../sections/Hero";
import { WhatWeDo } from "../sections/WhatWeDo";
import { ProjectsCarousel } from "../sections/ProjectsCarousel";
import { VideoGrid } from "../sections/VideoGrid";
import { Testimonials } from "../sections/Testimonials";
import { ContactForm } from "../sections/ContactForm";
import { Footer } from "../sections/Footer";

interface HomePageProps {
    onMenuClick: () => void;
}

export const HomePage = ({ onMenuClick }: HomePageProps) => {
    return (
        <div className="min-h-screen bg-stone-50 font-switzer">
            <Navbar onMenuClick={onMenuClick} />

            <main className="relative">
                <Hero />

                <div className="relative z-10">
                    <section id="what-we-do"><WhatWeDo /></section>
                    <section id="projects"><ProjectsCarousel /></section>
                    <section id="video-grid"><VideoGrid /></section>
                    <section id="testimonials"><Testimonials /></section>
                    <section id="contact"><ContactForm /></section>
                </div>

                <Footer />
            </main>
        </div>
    );
};
