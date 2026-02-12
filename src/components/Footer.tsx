"use client";

import { motion, Variants } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";
import { interpolate } from "@/utils/interpolate";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Footer = () => {
  const { t } = useLanguage();

  return (
    <motion.footer
      className="bg-transparent border-t border-t-[#3d9df3]/40 backdrop-blur-md text-gray-300 px-6 py-12"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm md:text-base select-none">
          {interpolate(t.footer.copyright, { year: new Date().getFullYear() })}
        </p>

        <div className="flex gap-6">
          <SocialLink href="mailto:miguelfaziodeassuncao@gmail.com" label="Email">
            <FaEnvelope />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/miguel-fazio-de-assun%C3%A7%C3%A3o/" label="LinkedIn">
            <FaLinkedin />
          </SocialLink>
          <SocialLink href="https://github.com/MiguelFazioAssuncao" label="GitHub">
            <FaGithub />
          </SocialLink>
          <SocialLink href="https://www.instagram.com/miguel_fazio_/" label="Instagram">
            <FaInstagram />
          </SocialLink>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

const SocialLink = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-[#6366f1] hover:text-[#3d9df3] transition-colors text-2xl"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);
