"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import profile from "@/assets/profile.jpg";
import SplitText from "@/components/SplitText";
import CircularText from "@/components/CircularText";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <motion.div
      id="inicio"
      className="min-h-screen w-full bg-[#0f1115] text-white flex flex-col items-center justify-center px-4 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="flex-1 text-center md:text-left">
          <p className="text-xl text-gray-400">Olá, eu sou</p>
          <h1 className="text-6xl md:text-7xl font-bold text-[#3d9df3] leading-tight drop-shadow-md">
            Miguel Fazio
          </h1>

          <SplitText
            text="Fullstack Developer"
            className="text-2xl mt-3 text-gray-300 font-medium"
          />

          <p className="mt-6 text-base text-gray-400 max-w-md md:max-w-lg leading-relaxed mx-auto md:mx-0">
            Jovem apaixonado por tecnologia, sempre em busca de aprender e
            evoluir.
          </p>

          <div className="mt-8">
            <button className="bg-[#3d9df3] text-black font-semibold px-6 py-3 rounded-full hover:bg-[#2563eb] transition cursor-pointer text-lg shadow-md">
              <a
                href="/Curriculo%20-%20Miguel%20Fazio.docx.pdf"
                download="Miguel_Fazio_Curriculo.pdf"
              >
                Baixar currículo
              </a>
            </button>
          </div>

          <div className="flex items-center gap-4 mt-8 flex-wrap justify-center md:justify-start">
            <SocialIcon
              href="mailto:miguelfaziodeassuncao@gmail.com"
              bg="violet-400"
              border="violet-400"
              label="Email"
            >
              <FaEnvelope className="text-white text-lg" />
            </SocialIcon>
            <SocialIcon
              href="https://github.com/MiguelFazioAssuncao"
              bg="black"
              border="black"
              label="GitHub"
            >
              <FaGithub className="text-white text-lg" />
            </SocialIcon>
            <SocialIcon
              href="https://www.linkedin.com/in/miguel-fazio-de-assun%C3%A7%C3%A3o/"
              bg="blue-500"
              border="blue-500"
              label="LinkedIn"
            >
              <FaLinkedin className="text-white text-lg" />
            </SocialIcon>
            <SocialIcon
              href="https://www.instagram.com/miguel_fazio_/"
              bg="red-400"
              border="red-400"
              label="Instagram"
            >
              <FaInstagram className="text-white text-lg" />
            </SocialIcon>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative group w-72 h-72 md:w-80 md:h-80">
            <div className="absolute inset-0 z-0 flex items-center justify-center">
              <CircularText
                text="Java typescript"
                onHover="speedUp"
                spinDuration={20}
                className="w-full h-full custom-class"
              />
            </div>

            <div className="relative z-10 w-full h-full bg-[#3d9df3] rounded-[30%] shadow-[0_0_50px_rgba(61,157,243,0.4)] overflow-hidden transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-[0_0_80px_rgba(61,157,243,0.6)]">
              <img
                src={profile.src}
                alt="Profile"
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition duration-700"
              />
              <div className="absolute -inset-1 bg-gradient-to-br from-[#3d9df3] to-transparent opacity-30 blur-xl rounded-[30%] group-hover:opacity-50 group-hover:blur-2xl transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SocialIcon = ({
  href,
  bg,
  border,
  label,
  children,
}: {
  href: string;
  bg: string;
  border: string;
  label: string;
  children: ReactNode;
}) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`relative w-12 h-12 rounded-full group`}
    >
      <div
        className={`floater w-full h-full absolute top-0 left-0 bg-${bg} rounded-full duration-300`}
      ></div>
      <div
        className={`cursor-pointer icon relative z-10 w-full h-full flex items-center justify-center border-2 border-${border} rounded-full`}
      >
        {children}
      </div>
    </motion.a>
  );
};

export default Home;
