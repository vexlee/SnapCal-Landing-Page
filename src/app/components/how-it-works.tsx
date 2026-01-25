"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { Camera, Sparkles, CheckCircle, ArrowRight } from "lucide-react";
import { DashboardPreview } from "./ui/DashboardPreview";
import { ReportPreview } from "./ui/ReportPreview";
import { useTranslation } from "react-i18next";

// Mock Input Screen for Step 1
function InputScreen() {
  const { t } = useTranslation();
  return (
    <div className="flex-1 bg-[#0f1016] relative flex flex-col items-center justify-center p-6 text-center">
      <div className="w-full max-w-[280px] aspect-[3/4] rounded-3xl border-2 border-dashed border-white/20 flex flex-col items-center justify-center bg-white/5 mb-8">
        <Camera className="w-12 h-12 text-gray-400 mb-4" />
        <p className="text-gray-400 text-sm">{t('howItWorks.steps.input.mock.tap')}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-[#1a1c26] rounded-t-[32px] border-t border-white/5">
        <div className="w-16 h-16 rounded-full bg-violet-600 mx-auto flex items-center justify-center shadow-lg shadow-violet-600/40 mb-4 animate-pulse">
          <Camera className="w-8 h-8 text-white" />
        </div>
        <p className="text-white font-bold mb-1">{t('howItWorks.steps.input.mock.snap')}</p>
        <p className="text-xs text-gray-400">{t('howItWorks.steps.input.mock.type')}</p>
      </div>
    </div>
  );
}


const getSteps = (t: any) => [
  {
    id: "input",
    number: "01",
    title: t('howItWorks.steps.input.title'),
    description: t('howItWorks.steps.input.description'),
    component: InputScreen,
    color: "from-purple-600 to-violet-600"
  },
  {
    id: "dashboard",
    number: "02",
    title: t('howItWorks.steps.analysis.title'),
    description: t('howItWorks.steps.analysis.description'),
    component: DashboardPreview,
    color: "from-violet-600 to-fuchsia-600"
  },
  {
    id: "report",
    number: "03",
    title: t('howItWorks.steps.progress.title'),
    description: t('howItWorks.steps.progress.description'),
    component: ReportPreview,
    color: "from-emerald-500 to-teal-600"
  }
];

export function HowItWorks() {
  const { t } = useTranslation();
  const stepsList = getSteps(t);
  const [activeStep, setActiveStep] = useState(0);

  // Use a callback ref to safely access the container
  const containerRef = useRef<HTMLDivElement>(null);

  // Handling scroll to update active step is tricky with standard scroll listeners on window vs sticky.
  // We'll use IntersectionObservers on the text sections.

  return (
    <section id="how-it-works" className="py-24 relative bg-[#181920]" ref={containerRef}>
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('howItWorks.title')}{" "}
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              {t('howItWorks.titleHighlight')}
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Left Column: Sticky Phone */}
          <div className="lg:sticky lg:top-32 order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-[380px] aspect-[9/19.5]">
              {/* Phone Frame */}
              <div className="absolute inset-0 bg-[#000000] rounded-[50px] shadow-2xl overflow-hidden border-[8px] border-[#1f212b] z-20">

                {/* Status Bar Mockup */}
                <div className="h-10 w-full bg-[#0f1016] flex justify-between items-center px-6 relative z-50">
                  <span className="text-[10px] font-medium text-white">9:41</span>
                  <div className="flex gap-1.5">
                    <div className="w-4 h-2.5 bg-white rounded-[2px]"></div>
                    <div className="w-[3px] h-2.5 bg-white rounded-[2px]"></div>
                  </div>
                </div>

                {/* Screen Content - Animate transitions */}
                <div className="absolute top-10 bottom-0 left-0 right-0 bg-[#0f1016] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full"
                    >
                      {stepsList[activeStep] && (() => {
                        const Component = stepsList[activeStep].component;
                        return <Component />;
                      })()}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Shadow/Glow behind phone */}
              <div className={`absolute -inset-4 bg-gradient-to-tr ${stepsList[activeStep].color} opacity-20 blur-3xl -z-10 transition-colors duration-700`}></div>
            </div>
          </div>

          {/* Right Column: Scrollable Steps */}
          <div className="order-1 lg:order-2 py-12 lg:py-24 space-y-32">
            {stepsList.map((step, index) => (
              <StepItem
                key={step.id}
                step={step}
                index={index}
                isActive={index === activeStep}
                onInView={() => setActiveStep(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepItem({ step, index, isActive, onInView }: { step: any, index: number, isActive: boolean, onInView: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.5, margin: "-100px" }}
      onViewportEnter={onInView}
      className={`transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-30'}`}
    >
      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold shadow-lg mb-6`}>
        {step.number}
      </div>
      <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
      <p className="text-xl text-gray-400 leading-relaxed max-w-md">
        {step.description}
      </p>
    </motion.div>
  );
}