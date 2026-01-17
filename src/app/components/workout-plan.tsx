import { motion } from "motion/react";
import { Dumbbell, Calendar, ChevronLeft, ChevronRight, CheckCircle2, Circle, Trophy, ArrowRight, Plus } from "lucide-react";

// Mock Data
const exercises = [
    { id: 1, name: "Bench Press", sets: "3", reps: "12", completed: true },
    { id: 2, name: "Incline DB Fly", sets: "3", reps: "12", completed: true },
    { id: 3, name: "Tricep Pushdown", sets: "4", reps: "15", completed: false },
    { id: 4, name: "Lateral Raises", sets: "3", reps: "15", completed: false },
];

const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const dates = Array.from({ length: 31 }, (_, i) => i + 1);

export function WorkoutPlan() {
    return (
        <section className="py-24 px-6 relative overflow-hidden bg-[#161821]">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Left Side: Replicated App UI */}
                <div className="order-2 lg:order-1 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/10 rounded-[40px] blur-3xl -z-10"></div>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-[#13141c] border border-white/5 rounded-[40px] overflow-hidden shadow-2xl shadow-blue-900/20 max-w-[400px] mx-auto lg:mr-auto h-[800px] flex flex-col relative"
                    >
                        {/* Status Bar Mockup */}
                        <div className="h-12 w-full flex justify-between items-center px-6 pt-2">
                            <span className="text-xs font-medium text-white">9:41</span>
                            <div className="flex gap-1.5">
                                <div className="w-4 h-2.5 bg-white rounded-[2px]"></div>
                                <div className="w-3 h-2.5 bg-white rounded-[2px]"></div>
                                <div className="w-5 h-2.5 bg-white rounded-[2px]"></div>
                            </div>
                        </div>

                        {/* Header */}
                        <div className="px-6 pb-6 pt-2 flex justify-between items-end">
                            <div>
                                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">Your Training</p>
                                <h1 className="text-2xl font-extrabold text-white">Workout Plan</h1>
                            </div>
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white shadow-sm">
                                <Dumbbell size={18} />
                            </div>
                        </div>

                        {/* Calendar Card */}
                        <div className="mx-6 mb-6 bg-[#1a1c26] border border-white/5 rounded-2xl p-4 shadow-sm">
                            <div className="flex justify-between items-center mb-4 text-white">
                                <div className="flex items-center gap-2">
                                    <Calendar size={14} className="text-blue-400" />
                                    <span className="text-xs font-bold uppercase tracking-wide">January 2026</span>
                                </div>
                                <div className="flex gap-1">
                                    <ChevronLeft size={16} className="text-gray-500" />
                                    <ChevronRight size={16} className="text-gray-500" />
                                </div>
                            </div>
                            <div className="grid grid-cols-7 gap-1 mb-2 text-center">
                                {days.map(d => <span key={d} className="text-[10px] font-bold text-gray-500">{d}</span>)}
                            </div>
                            <div className="grid grid-cols-7 gap-1">
                                {dates.slice(0, 14).map((d) => (
                                    <div key={d} className={`aspect-square flex flex-col items-center justify-center rounded-lg text-xs relative ${d === 12 ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'text-gray-400'}`}>
                                        {d}
                                        {(d === 10 || d === 8) && <div className="absolute top-1 right-1 w-1 h-1 bg-blue-500 rounded-full"></div>}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Workout Content */}
                        <div className="flex-1 bg-[#1a1c26] rounded-t-[32px] p-6 overflow-hidden flex flex-col">
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <h2 className="text-lg font-extrabold text-white">Today's Workout</h2>
                                    <p className="text-[10px] text-gray-500 font-bold uppercase mt-0.5">Chest & Triceps</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xl font-extrabold text-blue-400">50%</p>
                                    <p className="text-[10px] text-gray-500 uppercase font-bold">Completed</p>
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="h-1.5 w-full bg-gray-800 rounded-full mb-6">
                                <div className="h-full w-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                            </div>

                            {/* Exercises */}
                            <div className="space-y-3 overflow-y-auto no-scrollbar pb-20">
                                {exercises.map((ex) => (
                                    <div key={ex.id} className={`p-4 rounded-2xl border transition-all ${ex.completed ? 'bg-blue-500/10 border-blue-500/20' : 'bg-[#13141c] border-white/5'}`}>
                                        <div className="flex gap-3">
                                            <div className={`mt-0.5 ${ex.completed ? 'text-blue-400' : 'text-gray-600'}`}>
                                                {ex.completed ? <CheckCircle2 size={20} /> : <Circle size={20} />}
                                            </div>
                                            <div>
                                                <h3 className={`font-bold text-sm mb-1 ${ex.completed ? 'text-gray-400 line-through' : 'text-white'}`}>{ex.name}</h3>
                                                <div className="flex gap-3 text-[10px] text-gray-500 font-medium">
                                                    <span>Sets: <span className="text-gray-300">{ex.sets}</span></span>
                                                    <span>Reps: <span className="text-gray-300">{ex.reps}</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Floating Action Button Mockup */}
                            <div className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg shadow-white/10">
                                <Plus className="text-gray-900" size={24} />
                            </div>
                        </div>

                    </motion.div>
                </div>

                {/* Right Side: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="order-1 lg:order-2"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold text-sm mb-6">
                        <Trophy className="w-4 h-4" />
                        <span>Complete Fitness Tracking</span>
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                        Smart Workout <br />
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Integration
                        </span>
                    </h2>

                    <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                        Stop switching between apps. Seamlessly connect your nutrition data with your training for a holistic view of your health.
                    </p>

                    <div className="space-y-6 mb-10">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                                <Calendar className="w-5 h-5 text-blue-400" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold mb-1">Custom Plans</h3>
                                <p className="text-gray-400 text-sm">Build routines or get AI-generated plans.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                                <Dumbbell className="w-5 h-5 text-cyan-400" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold mb-1">Detailed Tracking</h3>
                                <p className="text-gray-400 text-sm">Log sets, reps, and weights with ease.</p>
                            </div>
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors"
                    >
                        Explore Workout Features <ArrowRight className="w-4 h-4" />
                    </motion.button>
                </motion.div>

            </div>
        </section>
    );
}
