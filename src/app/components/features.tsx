import { motion } from "motion/react";
import { Camera, BarChart3, Calculator, History, Zap, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

const getFeatures = (t: any) => [
  {
    icon: Camera,
    title: t('features.items.analysis.title'),
    description: t('features.items.analysis.description'),
    color: "from-purple-600 to-violet-600",
    features: t('features.items.analysis.list', { returnObjects: true }) as string[]
  },
  {
    icon: Zap,
    title: t('features.items.coach.title'),
    description: t('features.items.coach.description'),
    color: "from-pink-500 to-rose-600",
    features: t('features.items.coach.list', { returnObjects: true }) as string[]
  },
  {
    icon: BarChart3,
    title: t('features.items.dashboard.title'),
    description: t('features.items.dashboard.description'),
    color: "from-emerald-500 to-teal-600",
    features: t('features.items.dashboard.list', { returnObjects: true }) as string[]
  },
  {
    icon: Sparkles,
    title: t('features.items.workout.title'),
    description: t('features.items.workout.description'),
    color: "from-blue-500 to-indigo-600",
    features: t('features.items.workout.list', { returnObjects: true }) as string[]
  },
  {
    icon: Calculator,
    title: t('features.items.recipe.title'),
    description: t('features.items.recipe.description'),
    color: "from-violet-500 to-fuchsia-600",
    features: t('features.items.recipe.list', { returnObjects: true }) as string[]
  },
  {
    icon: History,
    title: t('features.items.cloud.title'),
    description: t('features.items.cloud.description'),
    color: "from-amber-500 to-orange-600",
    features: t('features.items.cloud.list', { returnObjects: true }) as string[]
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
  const { t } = useTranslation();
  const featuresList = getFeatures(t);

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
            {t('features.title')}{" "}
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              {t('features.titleHighlight')}
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {featuresList.map((feature, index) => {
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