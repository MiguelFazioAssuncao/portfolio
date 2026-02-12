"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 bg-[#1a1d22] border border-[#3d9df3]/30 rounded-lg px-3 py-2 hover:border-[#3d9df3] transition-all duration-300"
      aria-label={`Switch to ${language === 'pt' ? 'English' : 'Portuguese'}`}
    >
      <span className="text-2xl" role="img" aria-label={language === 'pt' ? 'Brazilian flag' : 'US flag'}>
        {language === 'pt' ? '🇧🇷' : '🇺🇸'}
      </span>
      <span className="text-sm font-medium text-white hidden sm:inline">
        {language === 'pt' ? 'PT' : 'EN'}
      </span>
    </motion.button>
  );
};

export default LanguageToggle;
