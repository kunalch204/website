import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Intro } from "./components/Intro";

export default function page() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto p-5 ">
        <BackgroundBeams />
        <Navbar />
        <HeroSection />
        <Intro />

        <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full"></div>
      </div>

      <div className="max-w-7xl mx-auto p-5 mt-20 ">
        <Skills />

        <Projects />

        <Footer />
      </div>
    </div>
  );
}
