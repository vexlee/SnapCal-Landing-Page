import { motion } from "motion/react";
import { Camera, Sparkles, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const steps = [
  {
    number: "01",
    icon: Camera,
    title: "Snap or Describe",
    description: "Take a photo of your meal or simply type what you're eating. No database searching required.",
    color: "from-purple-600 to-violet-600"
  },
  {
    number: "02",
    icon: Sparkles,
    title: "AI Analyzes",
    description: "Google's Gemini AI instantly identifies ingredients, estimates portions, and calculates nutrition.",
    color: "from-violet-600 to-fuchsia-600"
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Review & Track",
    description: "Get your detailed ingredient receipt, make corrections if needed, and watch your progress.",
    color: "from-emerald-500 to-teal-600"
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-violet-500/20 rounded-full blur-[120px]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            How It{" "}
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Three simple steps to frictionless nutrition tracking
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="text-center">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex w-20 h-20 bg-gradient-to-br ${step.color} rounded-[28px] items-center justify-center mb-6 relative shadow-xl shadow-purple-500/30`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-sm font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                        {step.number}
                      </span>
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-white/20 to-transparent">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                      className={`h-full bg-gradient-to-r ${step.color}`}
                    ></motion.div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[32px] overflow-hidden shadow-2xl shadow-black/60 max-w-4xl mx-auto group"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1553813881-5e74278a18ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwZm9vZCUyMHBob3RvfGVufDF8fHx8MTc2ODE1MDA0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Smartphone food photography"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-[24px] p-6">
              <h3 className="text-2xl font-bold mb-2">See It In Action</h3>
              <p className="text-gray-300 mb-4">Watch how SnapCal transforms a simple photo into detailed nutritional insights</p>
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-[20px] font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                Watch Demo Video
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}