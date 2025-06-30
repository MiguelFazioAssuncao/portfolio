"use client";

import { motion } from "framer-motion";
import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaAngular,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiJavascript,
} from "react-icons/si";

const skills = [
  { icon: FaJava, name: "Java", color: "#f89820" },
  { icon: SiSpringboot, name: "Spring Boot", color: "#6DB33F" },
  { icon: FaReact, name: "React", color: "#61DAFB" },
  { icon: FaNodeJs, name: "Node.js", color: "#83CD29" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiJavascript, name: "JavaScript", color: "#f7df1e" },
  { icon: FaHtml5, name: "HTML", color: "#E34F26" },
  { icon: FaCss3Alt, name: "CSS", color: "#1572B6" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#38BDF8" },
  { icon: FaBootstrap, name: "Bootstrap", color: "#7952B3" },
  { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
  { icon: FaAngular, name: "Angular", color: "#DD0031" },
  { icon: FaGitAlt, name: "Git", color: "#F05032" },
];

const grid = Array(10 * 4).fill(null);
const filledIndexes = [12, 13, 14, 15, 16, 17, 18, 22, 23, 24, 25, 26, 27, 28];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
};

const Skills = () => {
  return (
    <section
      id="habilidades"
      className="relative bg-[#0f1115] text-white px-6 py-32 flex flex-col items-center overflow-hidden"
    >
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3d9df3] drop-shadow-md mb-12 sm:mb-16 z-10 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        Habilidades & Tecnologias
      </motion.h2>

      <div className="absolute left-0 top-0 h-full w-48 bg-gradient-to-r from-[#0f1115] via-[#0f1115cc] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-48 bg-gradient-to-l from-[#0f1115] via-[#0f1115cc] to-transparent z-20 pointer-events-none" />

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4 sm:gap-6 max-w-[1200px] z-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
      >
        {grid.map((_, i) => {
          const skillIndex = filledIndexes.indexOf(i);
          const skill = skills[skillIndex];

          if (!skill) {
            return (
              <div
                key={i}
                className="hidden sm:flex w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-transparent rounded-2xl border border-[#2a2d33] opacity-30"
              />
            );
          }

          return (
            <motion.div
              key={i}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#1a1d22] rounded-2xl border border-[#2a2d33] flex items-center justify-center relative group"
              variants={item}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="absolute -inset-2 rounded-2xl blur-2xl opacity-0 group-hover:opacity-60 z-0"
                animate={{ opacity: [0.4, 0.2, 0.4] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 2,
                }}
                style={{
                  background: skill.color,
                }}
              />
              <div className="z-10 flex flex-col items-center justify-center px-1">
                <skill.icon
                  className="text-xl sm:text-2xl md:text-3xl"
                  style={{ color: skill.color }}
                />
                <span className="text-[10px] sm:text-xs text-gray-400 mt-1 text-center">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Skills;
