'use client';

import Header from "@/components/Header";
import Home from "@/sections/Home";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function Page() {
  return (
    <LanguageProvider>
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </LanguageProvider>
  );
}
