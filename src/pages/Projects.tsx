"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

import busAppImage from "@/assets/busApp.png";
import cli from "@/assets/cli.png";
import chatweb from "@/assets/chatweb.png";
import trustpay from "@/assets/trusty.png";

const projects = [
  {
    title: "ChatWeb",
    image: chatweb,
    description:
      "Aplicação web de chat em tempo real, com autenticação, salas privadas e integração entre frontend React, backend Java Spring Boot e WebSocket.",
    repo: "https://github.com/MiguelFazioAssuncao/chat-web",
    tech: ["TypeScript", "Java Spring Boot", "React"],
  },
  {
    title: "TrustPay - Digital Banking API",
    image: trustpay,
    description:
      "API RESTful completa de banking digital com gestão de contas, transações, cartões, empréstimos e loja virtual integrada, construída com Spring Boot 4 e PostgreSQL.",
    repo: "https://github.com/MiguelFazioAssuncao/trustpay",
    tech: ["Java", "Spring Boot", "PostgreSQL"],
  },
  {
    title: "Bus App",
    image: busAppImage,
    description:
      "Aplicação para transporte público com frontend React e backend Node.js/Express. Integra SPTrans (Olho Vivo) e GraphHopper para planejamento de rotas, autenticação e posições de linhas em tempo real com mapa Leaflet.",
    repo: "https://github.com/MiguelFazioAssuncao/bus-app-sa.git",
    tech: ["JavaScript", "React", "Node.js"],
  },
  {
    title: "FileManagerCli",
    image: cli,
    description: "CLI para manipulação de arquivos de texto",
    repo: "https://github.com/MiguelFazioAssuncao/FileManagerCli.git",
    tech: ["Java", "picocli"],
  },
];

const Projects = () => {
  return (
    <section
      id="projetos"
      className="min-h-screen w-full bg-[#0f1115] text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#3d9df3] mb-12 text-center"
        >
          Projetos
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-xl overflow-hidden group border border-[#3d9df3]/30 shadow-lg"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={600}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#0f1115]/90 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center px-6">
                <h3 className="text-2xl font-semibold text-[#3d9df3] mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#3d9df3]/20 text-[#3d9df3] px-3 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 bg-[#3d9df3] text-black font-medium px-4 py-2 rounded-full hover:bg-[#2563eb] transition"
                >
                  <FaGithub /> Ver no GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
