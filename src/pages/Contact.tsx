"use client";

import { Variants } from "framer-motion";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setFeedbackMessage("Por favor, preencha todos os campos.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFeedbackMessage("Por favor, insira um email válido.");
      return;
    }

    setLoading(true);
    setFeedbackMessage(null);

    const formUrl = "https://getform.io/f/ayvyoyyb";

    const data = new FormData();
    data.append("email", formData.email);
    data.append("subject", formData.subject);
    data.append("message", formData.message);

    try {
      const response = await fetch(formUrl, {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setFeedbackMessage("Mensagem enviada com sucesso!");
        setFormData({ email: "", subject: "", message: "" });
      } else {
        setFeedbackMessage("Erro ao enviar mensagem, tente novamente.");
      }
    } catch (error) {
      setFeedbackMessage("Erro ao enviar mensagem, tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      id="contato"
      className="min-h-screen text-white px-6 py-24 flex items-center justify-center"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.div
        className="max-w-6xl w-full bg-[#1a1d22] rounded-3xl p-10 shadow-[0_0_60px_rgba(61,157,243,0.2)] flex flex-col md:flex-row gap-12"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex-1 space-y-8">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3d9df3] to-[#6366f1]"
            variants={fadeInUp}
            custom={0}
          >
            Entre em Contato<span className="text-[#6366f1]">.</span>
          </motion.h2>
          <motion.p
            className="text-gray-400 leading-relaxed"
            variants={fadeInUp}
            custom={1}
          >
            Ficarei feliz em te responder! Me mande uma mensagem para ideias de
            projetos, colaborações ou qualquer pergunta.
          </motion.p>

          <div className="space-y-2 sm:space-y-4">
            <ContactItem
              icon={<FaEnvelope className="text-lg sm:text-xl text-white" />}
              label="Email"
              value="miguelfaziodeassuncao@gmail.com"
              href="mailto:miguelfaziodeassuncao@gmail.com"
              index={2}
            />
            <ContactItem
              icon={<FaLinkedin className="text-lg sm:text-xl text-white" />}
              label="LinkedIn"
              value="miguel-fazio-de-assunção"
              href="https://www.linkedin.com/in/miguel-fazio-de-assun%C3%A7%C3%A3o/"
              index={3}
            />
            <ContactItem
              icon={<FaInstagram className="text-lg sm:text-xl text-white" />}
              label="Instagram"
              value="miguel_fazio_"
              href="https://www.instagram.com/miguel_fazio_/"
              index={4}
            />
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col gap-6"
          variants={fadeInUp}
          custom={5}
        >
          <InputField
            id="email"
            label="Email"
            placeholder="Digite seu email"
            value={formData.email}
            onChange={handleChange}
          />
          <InputField
            id="subject"
            label="Assunto"
            placeholder="Sobre o que deseja falar?"
            value={formData.subject}
            onChange={handleChange}
          />
          <TextAreaField
            id="message"
            label="Mensagem"
            placeholder="Sua mensagem..."
            value={formData.message}
            onChange={handleChange}
          />

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-to-r from-[#6366f1] to-[#3d9df3] text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300 hover:shadow-[0_0_25px_#3d9df3] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Enviando..." : "Enviar Mensagem"}
          </motion.button>

          {feedbackMessage && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`mt-2 text-sm ${
                feedbackMessage.includes("sucesso")
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {feedbackMessage}
            </motion.p>
          )}
        </motion.form>
      </motion.div>
    </motion.section>
  );
};

export default Contact;

const ContactItem = ({
  icon,
  label,
  value,
  href,
  index,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  index: number;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 sm:gap-4 group hover:scale-[1.03] transition-all"
    variants={fadeInUp}
    custom={index}
  >
    <div className="bg-[#6366f1] w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg shadow-md group-hover:shadow-xl transition-all">
      {icon}
    </div>
    <div>
      <p className="text-xs sm:text-sm font-medium">{label}</p>
      <p className="text-xs sm:text-sm text-gray-400">{value}</p>
    </div>
  </motion.a>
);

const InputField = ({
  id,
  label,
  placeholder,
  value,
  onChange,
}: {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <motion.div
    className="flex flex-col gap-2"
    whileHover={{ scale: 1.01 }}
    transition={{ duration: 0.3 }}
  >
    <label htmlFor={id} className="text-sm text-gray-300">
      {label}
    </label>
    <input
      type="text"
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="bg-[#0f1115] border border-[#3d9df3] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3d9df3] transition duration-300 text-sm placeholder-gray-500"
    />
  </motion.div>
);

const TextAreaField = ({
  id,
  label,
  placeholder,
  value,
  onChange,
}: {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => (
  <motion.div
    className="flex flex-col gap-2"
    whileHover={{ scale: 1.01 }}
    transition={{ duration: 0.3 }}
  >
    <label htmlFor={id} className="text-sm text-gray-300">
      {label}
    </label>
    <textarea
      id={id}
      rows={5}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="bg-[#0f1115] border border-[#3d9df3] rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#3d9df3] transition duration-300 text-sm placeholder-gray-500"
    ></textarea>
  </motion.div>
);
