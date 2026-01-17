import { Hero } from "./components/hero";
import { Features } from "./components/features";
import { HowItWorks } from "./components/how-it-works";
import { WhySnapCal } from "./components/why-snapcal";
import { CTA } from "./components/cta";
import { Header } from "./components/header";

export default function App() {
  return (
    <div className="min-h-screen bg-[#1a1c26] relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-fuchsia-500/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        <Hero />
        <Features />
        <HowItWorks />
        <WhySnapCal />
        <CTA />
      </div>
    </div>
  );
}