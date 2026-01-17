import { Camera } from "lucide-react";
import { motion } from "motion/react";

export function Header() {
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
            Features
          </a>
          <a href="#how-it-works" className="text-gray-300 hover:text-purple-400 transition-colors">
            How It Works
          </a>
          <a href="#why" className="text-gray-300 hover:text-purple-400 transition-colors">
            Why SnapCal
          </a>
        </nav>
        <a
          href="https://snap-cal-ai-mu.vercel.app/"
          className="px-6 py-2 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-[24px] hover:shadow-lg hover:shadow-purple-500/50 transition-all cursor-pointer"
        >
          Get Started
        </a>
      </div>
    </motion.header>
  );
}