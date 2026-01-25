import { motion } from "motion/react";
import { Zap, Eye, TrendingUp, Shield, Clock, Target } from "lucide-react";
import { useTranslation } from "react-i18next";

const getBenefits = (t: any) => [
  {
    icon: Zap,
    title: t('why.benefits.frictionless.title'),
    description: t('why.benefits.frictionless.description'),
    stat: t('why.benefits.frictionless.stat'),
    color: "from-purple-600 to-violet-600"
  },
  {
    icon: Eye,
    title: t('why.benefits.transparent.title'),
    description: t('why.benefits.transparent.description'),
    stat: t('why.benefits.transparent.stat'),
    color: "from-violet-600 to-fuchsia-600"
  },
  {
    icon: TrendingUp,
    title: t('why.benefits.adaptive.title'),
    description: t('why.benefits.adaptive.description'),
    stat: t('why.benefits.adaptive.stat'),
    color: "from-emerald-500 to-teal-600"
  },
  {
    icon: Shield,
    title: t('why.benefits.secure.title'),
    description: t('why.benefits.secure.description'),
    stat: t('why.benefits.secure.stat'),
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: Clock,
    title: t('why.benefits.time.title'),
    description: t('why.benefits.time.description'),
    stat: t('why.benefits.time.stat'),
    color: "from-amber-500 to-orange-600"
  },
  {
    icon: Target,
    title: t('why.benefits.accurate.title'),
    description: t('why.benefits.accurate.description'),
    stat: t('why.benefits.accurate.stat'),
    color: "from-pink-500 to-rose-600"
  }
];

export function WhySnapCal() {
  const { t } = useTranslation();
  const benefitsList = getBenefits(t);

  return (
    <section id="why" className="py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('why.title')}{" "}
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              {t('why.titleHighlight')}
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('why.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitsList.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[28px] p-6 group-hover:border-purple-400/50 group-hover:bg-white/10 transition-all group-hover:shadow-xl">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${benefit.color} rounded-[16px] flex items-center justify-center shadow-lg shadow-purple-500/30`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}>{benefit.stat}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-gradient-to-br from-purple-600 to-violet-600 rounded-[32px] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl shadow-purple-500/40"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {t('why.footer.title')}
            </h3>
            <p className="text-xl text-white/90 mb-8">
              {t('why.footer.description')}
            </p>

          </div>
        </motion.div>
      </div>
    </section>
  );
}