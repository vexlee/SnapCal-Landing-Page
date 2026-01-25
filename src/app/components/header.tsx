import { Camera, Globe } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export function Header() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language.startsWith('zh') ? 'en' : 'zh';
    i18n.changeLanguage(nextLang);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-violet-600 rounded-[20px] flex items-center justify-center shadow-lg shadow-purple-500/30">
            <Camera className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
            SnapCal AI
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-300 hover:text-purple-400 transition-colors">
            {t('header.features')}
          </a>
          <a href="#how-it-works" className="text-gray-300 hover:text-purple-400 transition-colors">
            {t('header.howItWorks')}
          </a>
          <a href="#why" className="text-gray-300 hover:text-purple-400 transition-colors">
            {t('header.whySnapCal')}
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="p-2 text-gray-400 hover:text-purple-400 transition-colors cursor-pointer flex items-center gap-2 group"
            title={i18n.language.startsWith('zh') ? 'Switch to English' : '切换至中文'}
          >
            <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span className="text-sm font-medium hidden sm:inline">
              {i18n.language.startsWith('zh') ? 'EN' : '中'}
            </span>
          </button>
          <a
            href="https://snap-cal-ai-mu.vercel.app/"
            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-[24px] hover:shadow-lg hover:shadow-purple-500/50 transition-all cursor-pointer text-sm font-medium"
          >
            {t('header.getStarted')}
          </a>
        </div>
      </div>
    </motion.header>
  );
}