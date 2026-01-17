"use client";

import React, { useState } from "react";
import { ChevronRight, Info, Calendar as CalendarIcon, ChevronLeft } from "lucide-react";
import { Card } from "./card";

const mockDays = [
    { day: "Mon", date: "12", fullDate: "2026-01-12", hasData: true },
    { day: "Tue", date: "13", fullDate: "2026-01-13", hasData: true },
    { day: "Wed", date: "14", fullDate: "2026-01-14", hasData: true },
    { day: "Thu", date: "15", fullDate: "2026-01-15", hasData: true },
    { day: "Fri", date: "16", fullDate: "2026-01-16", hasData: true },
    { day: "Sat", date: "17", fullDate: "2026-01-17", hasData: true, selected: true },
    { day: "Sun", date: "18", fullDate: "2026-01-18", hasData: false },
];

export function ReportPreview() {
    const [viewMode, setViewMode] = useState<'week' | 'month'>('week');
    const [selectedDate, setSelectedDate] = useState("2026-01-17");

    return (
        <div className="flex-1 flex flex-col min-h-0 bg-[#0f1016] text-white overflow-hidden relative h-full">
            {/* Scrollable Content */}
            <div className="overflow-y-auto no-scrollbar flex-1 pb-20">

                {/* Header */}
                <div className="px-6 pt-8 pb-4">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-black text-white tracking-tight">Report</h1>
                        <div className="flex p-1 bg-[#1a1c26] rounded-xl border border-white/5 shadow-sm">
                            <button
                                onClick={() => setViewMode('week')}
                                className={`px-3 py-1 rounded-lg text-[10px] font-bold transition-all ${viewMode === 'week' ? 'bg-violet-600 text-white shadow-sm' : 'text-gray-500 hover:text-violet-500'}`}
                            >
                                Weekly
                            </button>
                            <button
                                onClick={() => setViewMode('month')}
                                className={`px-3 py-1 rounded-lg text-[10px] font-bold transition-all ${viewMode === 'month' ? 'bg-violet-600 text-white shadow-sm' : 'text-gray-500 hover:text-violet-500'}`}
                            >
                                Monthly
                            </button>
                        </div>
                    </div>

                    {/* Date Selector */}
                    <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 px-1 mb-8">
                        {mockDays.map((d) => (
                            <div
                                key={d.date}
                                className={`flex-shrink-0 flex flex-col items-center justify-center w-12 py-3 rounded-2xl transition-all ${d.selected
                                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-900/40 transform scale-110'
                                    : 'bg-[#1a1c26] text-gray-500 border border-white/5'}`}
                            >
                                <span className={`text-[9px] font-bold uppercase mb-1 ${d.selected ? 'text-white/70' : 'text-gray-500'}`}>{d.day}</span>
                                <span className="text-sm font-extrabold">{d.date}</span>
                                {d.hasData && !d.selected && <div className="w-1 h-1 rounded-full bg-violet-500 mt-1"></div>}
                            </div>
                        ))}
                    </div>

                    {/* Total Macros Card */}
                    <div className="mb-8">
                        <div className="bg-[#1a1c26] rounded-[28px] p-6 shadow-sm border border-white/5 flex flex-col items-center relative overflow-hidden">
                            <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1">Daily Total</span>
                            <div className="flex flex-col items-center mb-6 z-10">
                                <span className="text-5xl font-black text-white tracking-tighter">2,150</span>
                                <span className="text-[10px] font-black text-violet-400 uppercase tracking-widest mt-0.5">KCAL</span>
                            </div>

                            <div className="grid grid-cols-3 gap-2.5 w-full z-10">
                                <MacroItem label="Protein" value="180g" color="emerald" />
                                <MacroItem label="Carbs" value="210g" color="amber" />
                                <MacroItem label="Fat" value="65g" color="rose" />
                            </div>
                        </div>
                    </div>

                    {/* Grid Stats */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* Weekly Review Card */}
                        <div className="p-5 flex flex-col justify-between h-36 bg-gradient-to-br from-violet-600 to-indigo-700 rounded-2xl">
                            <div>
                                <p className="text-[10px] font-bold text-white/70 uppercase mb-1">Coach Tips</p>
                                <h3 className="text-lg font-black leading-tight text-white">Weekly Review</h3>
                            </div>
                            <div className="mt-2 py-2 bg-white/20 rounded-xl text-[10px] font-bold backdrop-blur-sm flex items-center justify-center gap-2 text-white cursor-pointer hover:bg-white/30 transition-colors">
                                VIEW DETAILS <ChevronRight size={12} />
                            </div>
                        </div>

                        {/* Goal Status */}
                        <div className="grid grid-rows-2 gap-4 h-36">
                            <div className="p-4 flex flex-col justify-center bg-[#1a1c26] rounded-2xl border border-white/5">
                                <div className="flex justify-between items-center mb-1">
                                    <p className="text-[9px] font-bold text-gray-500 uppercase">Meals</p>
                                    <ChevronRight size={10} className="text-gray-600" />
                                </div>
                                <p className="text-xs font-black text-white">4 Meals</p>
                            </div>

                            <div className="p-4 flex flex-col justify-center bg-[#1a1c26] rounded-2xl border border-white/5">
                                <div className="flex justify-between items-center mb-1">
                                    <p className="text-[9px] font-bold text-gray-500 uppercase">Goal</p>
                                    <Info size={10} className="text-gray-600" />
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-violet-500 w-[100%] rounded-full"></div>
                                    </div>
                                    <span className="text-[10px] font-black text-white">108%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

function MacroItem({ label, value, color }: { label: string, value: string, color: string }) {
    const colorMap: Record<string, string> = {
        emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/10",
        amber: "text-amber-400 bg-amber-500/10 border-amber-500/10",
        rose: "text-rose-400 bg-rose-500/10 border-rose-500/10"
    };
    const textColorMap: Record<string, string> = {
        emerald: "text-emerald-400",
        amber: "text-amber-400",
        rose: "text-rose-400"
    };

    return (
        <div className={`flex flex-col items-center py-2.5 rounded-2xl border transition-colors ${colorMap[color]}`}>
            <span className={`text-[8px] font-bold uppercase mb-0.5 opacity-60 ${textColorMap[color]}`}>{label}</span>
            <span className={`text-sm font-black ${textColorMap[color]}`}>{value}</span>
        </div>
    );
}
