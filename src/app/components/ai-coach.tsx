import { motion } from "motion/react";
import { Sparkles, Send, Bot, ArrowRight, Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";

// Mock data to simulate the real app state
const getChatMessages = (t: any) => [
    {
        id: 'welcome',
        role: 'assistant',
        content: t('aiCoach.mock.chat.welcome')
    },
    {
        id: 'user-1',
        role: 'user',
        content: t('aiCoach.mock.chat.user1')
    },
    {
        id: 'ai-1',
        role: 'assistant',
        content: t('aiCoach.mock.chat.ai1')
    }
];

const getSuggestionCards = (t: any) => [
    { title: t('aiCoach.mock.cards.nutrition'), desc: t('aiCoach.mock.cards.nutritionDesc'), icon: "📊", color: "from-blue-500/30 to-purple-500/30", baseBg: "bg-blue-500/5", iconBg: "bg-blue-500/10", iconBorder: "border-blue-500/20" },
    { title: t('aiCoach.mock.cards.workout'), desc: t('aiCoach.mock.cards.workoutDesc'), icon: "💪", color: "from-purple-500/30 to-indigo-500/30", baseBg: "bg-purple-500/5", iconBg: "bg-purple-500/10", iconBorder: "border-purple-500/20" },
    { title: t('aiCoach.mock.cards.tdee'), desc: t('aiCoach.mock.cards.tdeeDesc'), icon: "🔥", color: "from-orange-500/30 to-purple-500/30", baseBg: "bg-orange-500/5", iconBg: "bg-orange-500/10", iconBorder: "border-orange-500/20" },
];

export function AiCoach() {
    const { t } = useTranslation();
    const chatMessages = getChatMessages(t);
    const suggestionCards = getSuggestionCards(t);

    return (
        <section className="py-24 px-6 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute center right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Left Side: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-semibold text-sm mb-6">
                        <Bot className="w-4 h-4" />
                        <span>{t('aiCoach.badge')}</span>
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                        {t('aiCoach.title')} <br />
                        <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                            {t('aiCoach.titleHighlight')}
                        </span>
                    </h2>

                    <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-xl">
                        {t('aiCoach.description')}
                    </p>

                    <div className="flex flex-col gap-4 mb-10">
                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400"><Sparkles size={16} /></div>
                            <span>{t('aiCoach.points.analysis')}</span>
                        </div>
                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400"><Bot size={16} /></div>
                            <span>{t('aiCoach.points.plans')}</span>
                        </div>
                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400"><ArrowRight size={16} /></div>
                            <span>{t('aiCoach.points.answers')}</span>
                        </div>
                    </div>


                </motion.div>

                {/* Right Side: Replicated App UI */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent rounded-[40px] blur-3xl -z-10"></div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-[#13141c] border border-white/5 rounded-[40px] overflow-hidden shadow-2xl shadow-purple-900/20 max-w-[400px] mx-auto lg:ml-auto h-[700px] flex flex-col relative"
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

                        {/* App Header */}
                        <div className="px-6 pb-4 pt-2 flex justify-between items-end border-b border-white/5">
                            <div>
                                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">{t('aiCoach.mock.status')}</p>
                                <h1 className="text-2xl font-extrabold text-white">Cal Coach</h1>
                            </div>
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-700 rounded-full flex items-center justify-center text-white shadow-sm">
                                <Sparkles size={18} />
                            </div>
                        </div>

                        {/* Chat Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-gradient-to-b from-[#13141c] to-[#0f1016]">
                            {chatMessages.map((msg) => (
                                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] ${msg.role === 'user'
                                        ? 'bg-purple-600 text-white rounded-[24px] rounded-tr-sm px-5 py-3 shadow-lg text-sm leading-relaxed'
                                        : 'bg-[#1a1c26] border border-white/5 rounded-[24px] rounded-tl-sm p-4 text-gray-200 text-sm leading-relaxed shadow-md'}`}>
                                        {msg.role === 'assistant' ? (
                                            <div dangerouslySetInnerHTML={{ __html: msg.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>') }} />
                                        ) : (
                                            msg.content
                                        )}
                                    </div>
                                </div>
                            ))}

                            {/* Suggestion Cards Scroll */}
                            <div className="flex gap-3 overflow-x-hidden pt-2">
                                {suggestionCards.map((card, idx) => (
                                    <div key={idx} className={`flex-shrink-0 p-3 w-[160px] ${card.baseBg} border border-white/10 rounded-2xl relative overflow-hidden group`}>
                                        <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                                        <div className={`w-8 h-8 ${card.iconBg} ${card.iconBorder} border rounded-lg flex items-center justify-center text-lg mb-2`}>
                                            {card.icon}
                                        </div>
                                        <h3 className="font-bold text-white text-xs mb-0.5">{card.title}</h3>
                                        <p className="text-[10px] text-gray-400 leading-tight">{card.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-[#1a1c26] border-t border-white/5">
                            <div className="bg-[#0f1016] rounded-[24px] p-2 border border-white/5 flex gap-2 items-center pl-4">
                                <span className="text-gray-500 text-sm flex-1">{t('aiCoach.mock.input')}</span>
                                <div className="w-9 h-9 bg-purple-600 rounded-[18px] flex items-center justify-center text-white shadow-lg shadow-purple-900/40">
                                    <Send size={16} />
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>

            </div>
        </section>
    );
}
