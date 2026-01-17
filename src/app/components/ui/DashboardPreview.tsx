"use client";

import React, { useState, useEffect } from "react";
import { Plus, User, PenTool, Edit2, AlertTriangle, Utensils, TrendingUp, Sparkles } from "lucide-react";
import { Card } from "./card"; // Using shadcn card
import { AreaChart, Area, ResponsiveContainer } from "recharts";

// Mock Data
const mockEntries = [
    { id: 1, food_item: "Grilled Chicken Salad", calories: 450, time: "12:30 PM", confidence: 0.98, imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&h=200&fit=crop" },
    { id: 2, food_item: "Oatmeal & Berries", calories: 320, time: "8:15 AM", confidence: 0.95, imageUrl: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=200&h=200&fit=crop" },
    { id: 3, food_item: "Protein Shake", calories: 180, time: "10:00 AM", confidence: 0.99, imageUrl: null },
];

const mockWeeklyData = [
    { cal: 1800 }, { cal: 2100 }, { cal: 1950 }, { cal: 2000 }, { cal: 1850 }, { cal: 2200 }, { cal: 1450 }
];

export function DashboardPreview() {
    const [progress, setProgress] = useState(0);
    const todayCalories = 1450;
    const dailyGoal = 2000;

    useEffect(() => {
        // Animate progress on mount
        const timer = setTimeout(() => {
            setProgress((todayCalories / dailyGoal) * 100);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const getBarStyle = () => {
        // Simplified gradient equivalent to snapcal-ai logic
        return {
            background: `linear-gradient(90deg, #10b981 0%, #10b981 60%, #facc15 80%, #f97316 100%)`,
            boxShadow: '0 0 12px rgba(249, 115, 22, 0.3)'
        };
    };

    return (
        <div className="flex-1 flex flex-col min-h-0 bg-[#0f1016] text-white overflow-hidden relative h-full">
            {/* Scrollable Content */}
            <div className="overflow-y-auto no-scrollbar flex-1 pb-20"> {/* pb-20 for FAB space */}

                {/* Header */}
                <div className="px-6 pt-8 pb-4">
                    <header className="flex justify-between items-end mb-6">
                        <div>
                            <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-1">Today, Jan 17</p>
                            <h1 className="text-2xl font-extrabold text-white tracking-tight leading-none">
                                Hello Vex, <br />Let's Eat Well.
                            </h1>
                        </div>
                        <div className="w-10 h-10 bg-violet-900/30 rounded-full flex items-center justify-center text-violet-400 shadow-sm border border-white/5">
                            <Utensils size={18} />
                        </div>
                    </header>

                    {/* Hero Stats Card */}
                    <div className="relative rounded-[32px] p-6 text-white overflow-hidden shadow-xl shadow-violet-900/20 bg-violet-600 mb-4 transition-all hover:scale-[1.02] duration-300">
                        {/* Background Blurs */}
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-black/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">Calories Consumed</p>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-bold tracking-tighter">{todayCalories}</span>
                                        <span className="text-sm text-white/60 font-medium">kcal</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center justify-end gap-2 text-white/80">
                                        <span className="text-[10px] font-semibold">Goal: {dailyGoal}</span>
                                        <div className="p-1 rounded-full bg-white/20 backdrop-blur-sm">
                                            <Edit2 size={8} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="w-full bg-black/20 rounded-full h-3 mb-3 overflow-hidden backdrop-blur-sm">
                                <div
                                    className="h-full rounded-full transition-all duration-1000 ease-out flex items-center justify-center overflow-hidden relative"
                                    style={{
                                        width: `${progress}%`,
                                        ...getBarStyle()
                                    }}
                                >
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <p className="text-[10px] font-medium text-white/80">
                                    {dailyGoal - todayCalories} kcal remaining
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Weekly Sparkline Card */}
                    <div className="rounded-[24px] bg-[#1a1c26] border border-white/5 p-4 relative overflow-hidden flex items-center justify-between mb-2">
                        <div className="z-10 relative">
                            <div className="flex items-center gap-2 mb-1">
                                <TrendingUp size={12} className="text-violet-400" />
                                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Weekly Trend</span>
                            </div>
                            <p className="text-sm font-bold text-white">Consistent Tracking</p>
                        </div>
                        <div className="absolute right-0 bottom-0 top-0 w-32 opacity-30">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={mockWeeklyData}>
                                    <defs>
                                        <linearGradient id="colorCal" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.5} />
                                            <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <Area type="monotone" dataKey="cal" stroke="#7c3aed" strokeWidth={2} fillOpacity={1} fill="url(#colorCal)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Entries List */}
                <div className="px-6 pb-4">
                    <div className="flex items-center justify-between px-1 mb-3">
                        <h2 className="text-md font-bold text-white">Recent Meals</h2>
                        <span className="text-[10px] font-medium text-gray-500 bg-white/5 px-2 py-1 rounded-lg">3 items</span>
                    </div>

                    <div className="space-y-3">
                        {mockEntries.map((entry) => (
                            <div key={entry.id} className="flex gap-3 items-center p-3 rounded-2xl bg-[#1a1c26] border border-white/5 active:scale-95 transition-transform">
                                <div className="w-12 h-12 bg-white/5 rounded-xl overflow-hidden flex-shrink-0 relative">
                                    {entry.imageUrl ? (
                                        <img src={entry.imageUrl} alt={entry.food_item} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gray-600">
                                            <User size={16} />
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <h3 className="font-bold text-gray-200 text-sm truncate">{entry.food_item}</h3>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <p className="text-[10px] font-semibold text-gray-500">{entry.time}</p>
                                        <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[8px] font-bold">
                                            <Sparkles size={8} /> {Math.round(entry.confidence * 100)}% AI
                                        </span>
                                    </div>
                                </div>
                                <div className="text-right pl-1">
                                    <span className="block font-extrabold text-white text-sm">{entry.calories}</span>
                                    <span className="text-[8px] font-bold text-gray-600 uppercase">kcal</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Floating Action Button */}
            <div className="absolute bottom-6 right-6 z-20">
                <div className="w-14 h-14 bg-violet-600 text-white rounded-[20px] shadow-lg shadow-violet-600/30 flex items-center justify-center">
                    <Plus size={24} strokeWidth={2.5} />
                </div>
            </div>
        </div>
    );
}
