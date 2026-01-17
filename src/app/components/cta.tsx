import { motion } from "motion/react";
import { Camera, Smartphone, ArrowRight, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CTA() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                Eating Journey?
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Start eating well with AI-powered nutrition insights. Join thousands who've embraced smarter tracking.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                </div>
                <span className="text-gray-300">No credit card required to start</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                </div>
                <span className="text-gray-300">Free forever for basic features</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                </div>
                <span className="text-gray-300">Cancel anytime, no questions asked</span>
              </div>
            </div>

            <motion.a
              href="https://snap-cal-ai-mu.vercel.app/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-[28px] font-semibold shadow-lg shadow-purple-500/40 hover:shadow-xl hover:shadow-purple-500/60 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Camera className="w-5 h-5" />
              Start Eating Well Free
              <ArrowRight className="w-5 h-5" />
            </motion.a>

            <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                <span>iOS & Android</span>
              </div>
              <div className="w-px h-4 bg-white/10"></div>
              <div>Available Worldwide</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl shadow-black/60">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1627488722530-e422193ffee6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWFsJTIwcHJlcCUyMGluZ3JlZGllbnRzfGVufDF8fHx8MTc2ODE1MDA0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Meal prep ingredients"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 via-purple-900/30 to-transparent"></div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-6 -left-6 bg-black/40 backdrop-blur-xl border border-white/20 rounded-[24px] p-6 shadow-2xl max-w-xs"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-violet-600 rounded-[16px] flex items-center justify-center shadow-lg shadow-purple-500/50">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Daily Goal</div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">1,847 / 2,000</div>
                </div>
              </div>
              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "92%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-emerald-500 via-emerald-500 to-amber-500 rounded-full"
                ></motion.div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="text-xs text-gray-400">153 kcal remaining</div>
                <div className="text-xs font-semibold text-emerald-400">On Track! 🎯</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <footer className="mt-20 pt-12 border-t border-white/10">
          <div className="text-center text-gray-500">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-violet-600 rounded-[14px] flex items-center justify-center shadow-lg shadow-purple-500/30">
                <Camera className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-gray-200">SnapCal AI</span>
            </div>
            <p className="text-sm">
              © 2026 SnapCal AI. All rights reserved. Powered by Google Gemini AI.
            </p>
            <div className="mt-4 flex items-center justify-center gap-6 text-sm">
              <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}