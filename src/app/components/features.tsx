import { motion } from "motion/react";
import { Camera, BarChart3, Calculator, History, Zap, Sparkles } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "AI-Powered Food Analysis",
    description: "Instant photo recognition or natural text entry. SnapCal's AI identifies food items, breaks down ingredients, estimates portions, and calculates calories & macros.",
    color: "from-purple-600 to-violet-600",
    features: [
      "Instant photo recognition",
      "Natural text entry",
      "Precision correction mode"
    ]
  },
  {
    icon: BarChart3,
    title: "Smart Dashboard",
    description: "Real-time progress tracking with dynamic visual indicators. Watch your intake change from green to orange to red as you approach your daily limit.",
    color: "from-emerald-500 to-teal-600",
    features: [
      "Real-time progress tracking",
      "7-day trend analysis",
      "Smart alert system"
    ]
  },
  {
    icon: Calculator,
    title: "Recipe & Meal Calculator",
    description: "Input ingredients and servings to get complete nutritional breakdown per serving—perfect for home cooks and meal preppers.",
    color: "from-violet-500 to-fuchsia-600",
    features: [
      "Recipe analysis",
      "Per-serving breakdown",
      "Meal prep optimization"
    ]
  },
  {
    icon: History,
    title: "History & Cloud Sync",
    description: "Keep a detailed log of everything you've eaten, organized by date. Your data is securely stored and accessible anytime, anywhere.",
    color: "from-amber-500 to-orange-600",
    features: [
      "Detailed food log",
      "Cloud synchronization",
      "Cross-device access"
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function Features() {
  return (
    <section id="features" className="py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Eat Well
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Leverage the power of Google's Gemini AI to transform how you track nutrition
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-30 transition-opacity rounded-[32px] blur-2xl from-purple-500 to-violet-600"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 hover:border-purple-400/50 hover:bg-white/10 transition-all hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-[20px] flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.color}`}></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}