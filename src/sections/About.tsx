'use client';

import { motion } from 'framer-motion';
import { FaJava, FaAngular, FaNodeJs, FaDocker } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { language } = useLanguage();

  const translations = {
    pt: {
      title: "Quem sou eu?",
      intro: "Sou ",
      description: ", desenvolvedor full stack focado em aplicações web. Trabalho principalmente com",
      stack: " Java, Spring Boot e Angular",
      outro: ", desenvolvendo soluções bem estruturadas, com código organizado e foco em boas práticas.",
      quote: "\"Gosto de transformar regras de negócio em código limpo e soluções funcionais.\"",
    },
    en: {
      title: "Who am I?",
      intro: "I'm ",
      description: ", a full stack developer focused on web applications. I mainly work with",
      stack: " Java, Spring Boot and Angular",
      outro: ", developing well-structured solutions, with organized code and focus on best practices.",
      quote: "\"I like to transform business rules into clean code and functional solutions.\"",
    },
  };

  const t = translations[language];

  return (
    <motion.section
      id="sobre"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.5 }}
      className="min-h-screen bg-[#0f1115] text-white px-6 py-24 flex items-center justify-center"
    >
      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-16 items-center">
        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-bold mb-6 text-[#3d9df3] drop-shadow-md"
          >
            {t.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-gray-300 leading-relaxed"
          >
            {t.intro}<span className="text-[#3d9df3] font-semibold">Miguel Fazio</span>{t.description}
            <span className="text-[#3d9df3] font-medium">
              {t.stack}
            </span>
            {t.outro}
          </motion.p>

          {/* Ícones da stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 flex justify-center md:justify-start gap-6 text-4xl"
          >
            <FaJava className="text-orange-500 hover:scale-110 transition-transform" />
            <SiSpringboot className="text-green-500 hover:scale-110 transition-transform" />
            <FaAngular className="text-red-500 hover:scale-110 transition-transform" />
            <FaNodeJs className="text-green-400 hover:scale-110 transition-transform" />
            <FaDocker className="text-blue-400 hover:scale-110 transition-transform" />
          </motion.div>
        </div>

        {/* Card lateral */}
        <motion.div
          initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 1, ease: 'backOut' }}
          className="flex-1 w-full h-80 bg-gradient-to-br from-[#3d9df3] via-[#2f88dc] to-[#1f3b6c] rounded-3xl shadow-[0_0_40px_rgba(61,157,243,0.4)] flex items-center justify-center relative overflow-hidden"
        >
          <div className="absolute inset-0 blur-3xl opacity-20 bg-gradient-to-br from-[#3d9df3] to-[#1f3b6c]" />
          <p className="text-white text-xl text-center px-6 z-10">
            {t.quote}
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
