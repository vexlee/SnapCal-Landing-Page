import { motion } from "motion/react";
import { Camera, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 overflow-hidden relative">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 -right-40 w-96 h-96 bg-purple-500/30 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-violet-500/30 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-[24px] text-purple-300 mb-6 border border-purple-400/30"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Powered by Google Gemini AI</span>
            </motion.div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Snap & Track{" "}
              <br></br>
              <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                SnapCal AI
              </span>
            </h1>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Your premium nutrition assistant that makes healthy eating effortless. 
              Transform meals into insights with AI-powered intelligence.
            </p>

           

            <div className="mt-12 flex items-center gap-8">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">1M+</div>
                <div className="text-sm text-gray-500">Meals Analyzed</div>
              </div>
              <div className="w-px h-12 bg-white/10"></div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">98%</div>
                <div className="text-sm text-gray-500">Accuracy Rate</div>
              </div>
              <div className="w-px h-12 bg-white/10"></div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">50K+</div>
                <div className="text-sm text-gray-500">Active Users</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-8 -right-8 w-72 h-72 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full blur-3xl opacity-30"
              ></motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 20, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-8 -left-8 w-72 h-72 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full blur-3xl opacity-30"
              ></motion.div>

              <div className="relative rounded-[32px] overflow-hidden shadow-2xl shadow-black/60">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1722607571891-7ab5396a1b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2ODE1MDA0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Healthy food photography"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                
                {/* Glassmorphic AI Receipt Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-6 left-6 right-6 bg-black/40 backdrop-blur-xl border border-white/20 rounded-[24px] p-4 shadow-2xl"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        <div className="text-sm text-gray-400">Meal Analysis</div>
                      </div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">487 kcal</div>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-violet-600 rounded-[16px] flex items-center justify-center shadow-lg shadow-purple-500/50">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="text-center p-2 bg-emerald-500/20 backdrop-blur-sm rounded-[12px] border border-emerald-400/30">
                      <div className="text-xs text-emerald-300">Protein</div>
                      <div className="font-semibold text-emerald-100">32g</div>
                    </div>
                    <div className="text-center p-2 bg-amber-500/20 backdrop-blur-sm rounded-[12px] border border-amber-400/30">
                      <div className="text-xs text-amber-300">Carbs</div>
                      <div className="font-semibold text-amber-100">45g</div>
                    </div>
                    <div className="text-center p-2 bg-purple-500/20 backdrop-blur-sm rounded-[12px] border border-purple-400/30">
                      <div className="text-xs text-purple-300">Fat</div>
                      <div className="font-semibold text-purple-100">18g</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}