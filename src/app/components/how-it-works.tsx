import { motion } from "motion/react";
import { Camera, Sparkles, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Camera,
    title: "Snap or Describe",
    description: "Take a photo of your meal or simply type what you're eating. No database searching required.",
    color: "from-purple-600 to-violet-600",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20"
  },
  {
    number: "02",
    icon: Sparkles,
    title: "AI Analyzing",
    description: "Google's Gemini AI instantly identifies ingredients, estimates portions, and calculates nutrition.",
    color: "from-violet-600 to-fuchsia-600",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20"
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Review & Track",
    description: "Get your detailed ingredient receipt, make corrections if needed, and watch your progress.",
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20"
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 relative overflow-hidden bg-[#181920]">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-gray-700 bg-gray-800/50 text-gray-300 text-sm font-medium mb-6">
            Simple Process
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            From Photo to Macros in{" "}
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Seconds
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We've removed the friction from food tracking. No simpler way to stay on top of your nutrition.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid lg:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-purple-500/20 via-violet-500/20 to-emerald-500/20 -z-10"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="relative flex flex-col items-center text-center">

                  {/* Icon Hexagon/Circle Wrapper */}
                  <div className="w-24 h-24 mb-8 relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-20 blur-xl rounded-full group-hover:opacity-40 transition-opacity`}></div>
                    <div className={`relative w-full h-full bg-[#1a1c26] border border-white/10 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-xl`}>
                      <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                        {step.number}
                      </div>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors`}>
                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>

                  {/* Mobile Connecting Arrow */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden my-6">
                      <ArrowRight className="w-6 h-6 text-gray-600 rotate-90" />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}