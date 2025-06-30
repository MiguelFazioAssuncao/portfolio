'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaLaptopCode } from 'react-icons/fa';

const About = () => {
  return (
    <motion.section id='sobre'
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.5 }}
      className="min-h-screen bg-[#0f1115] text-white px-6 py-24 flex items-center justify-center"
    >
      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-bold mb-6 text-[#3d9df3] drop-shadow-md"
          >
            Quem sou eu?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-gray-300 leading-relaxed"
          >
            Sou <span className="text-[#3d9df3] font-semibold">Miguel Fazio</span>, desenvolvedor fullstack com
            paixão por transformar ideias em experiências digitais modernas e eficientes.
            Atuo com <span className="text-[#3d9df3]">React, Node.js, TypeScript</span> e outras tecnologias que fazem meus olhos brilhar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 flex justify-center md:justify-start gap-6 text-[#3d9df3] text-3xl"
          >
            <FaReact className="hover:text-cyan-400 transition-transform duration-300 hover:scale-110" />
            <FaNodeJs className="hover:text-green-500 transition-transform duration-300 hover:scale-110" />
            <FaLaptopCode className="hover:text-pink-500 transition-transform duration-300 hover:scale-110" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 1, ease: 'backOut' }}
          className="flex-1 w-full h-80 bg-gradient-to-br from-[#3d9df3] via-[#2f88dc] to-[#1f3b6c] rounded-3xl shadow-[0_0_40px_rgba(61,157,243,0.4)] flex items-center justify-center relative overflow-hidden"
        >
          <div className="absolute inset-0 blur-3xl opacity-20 bg-gradient-to-br from-[#3d9df3] to-[#1f3b6c]" />
          <p className="text-white text-xl text-center px-6 z-10">
            "Transformar códigos em soluções reais é o que me motiva todos os dias."
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
