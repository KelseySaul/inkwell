import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Volume2, VolumeX, User, Cpu, Play, Send, Mic, Tablet, MessageCircle, Home, LayoutGrid } from 'lucide-react'
import { findMatch } from '../data/botKnowledge'

const BOT_SCRIPT = [
    { text: "Hello there! Welcome to Inkwell & Code. I'm your virtual assistant, here to show you around.", scrollId: 'hero' },
    { text: "We are a premium creative studio based in Nairobi, specialized in building high-end digital experiences.", scrollId: 'hero' },
    { text: "Our core expertise includes custom Web Development, Graphic Design, and Fullstack Systems. We use React, Node, Python, and PostgreSQL.", scrollId: 'services' },
    { text: "Whether you need a simple Portfolio Website, a Standard Business Site, or a full E-commerce Store, we've got you covered.", scrollId: 'projects' },
    { text: "Our pricing is transparent and competitive, starting from as low as KES 20,000 for basic portfolios.", scrollId: 'contact' },
    { text: "You can see our latest projects and what our satisfied clients have to say about us just here.", scrollId: 'testimonials' },
    { text: "Ready to start your project? Fill the form here or reach out via WhatsApp just below me!", scrollId: 'contact' }
]

export default function ChatBot() {
    console.log("Inkwell Bot 2.1 - Home Button Added");
    const [isOpen, setIsOpen] = useState(false)
    const [isSpeaking, setIsSpeaking] = useState(false)
    const [currentMessageIndex, setCurrentMessageIndex] = useState(-1)
    const [useSpeech, setUseSpeech] = useState(true)
    const [messages, setMessages] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [isRecording, setIsRecording] = useState(false)
    const [mode, setMode] = useState('menu')
    const [isMobile, setIsMobile] = useState(false)
    const speechSynthesisRef = useRef(null)
    const messagesEndRef = useRef(null)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    useEffect(() => {
        speechSynthesisRef.current = window.speechSynthesis
        return () => {
            if (speechSynthesisRef.current) {
                speechSynthesisRef.current.cancel()
            }
        }
    }, [])

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    const addMessage = (text, sender = 'bot') => {
        setMessages(prev => [...prev, { text, sender, id: Date.now() }])
    }

    // --- Modern Humanized Speech Function ---
    const speakText = async (text, onComplete = () => { }) => {
        if (!useSpeech || !speechSynthesisRef.current) {
            onComplete()
            return
        }

        // Split by punctuation for natural pauses
        const sentences = text.split(/(?<=[.!?])\s+/)

        for (let i = 0; i < sentences.length; i++) {
            const sentence = sentences[i].trim()
            if (!sentence) continue

            await new Promise((resolve) => {
                const utterance = new SpeechSynthesisUtterance(sentence)
                const voices = speechSynthesisRef.current.getVoices()

                // Prioritize better voices
                const naturalVoice = voices.find(v => v.name.includes('Natural') || v.name.includes('Premium'))
                const googleMale = voices.find(v => v.lang === 'en-US' && v.name.includes('Google') && !v.name.includes('Female'))
                const maleVoice = voices.find(v => v.lang === 'en-US' && /David|Mark|Guy|Thomas/i.test(v.name))
                const fallback = voices.find(v => v.lang === 'en-US' && !/Female/i.test(v.name))

                utterance.voice = naturalVoice || googleMale || maleVoice || fallback || voices[0]

                // Normal, natural human speech rate
                utterance.rate = 1.0 // Decreased rate to match how a normal human speaks
                utterance.pitch = 1.0 // Normal pitch sounds much less artificial
                utterance.volume = 1.0

                utterance.onstart = () => setIsSpeaking(true)
                utterance.onend = () => {
                    // Small "breathing" pause between sentences
                    setTimeout(resolve, 200 + Math.random() * 100)
                }

                speechSynthesisRef.current.speak(utterance)
            })
        }

        setIsSpeaking(false)
        onComplete()
    }

    const startTourStep = (index) => {
        if (index >= BOT_SCRIPT.length) {
            setCurrentMessageIndex(-2)
            if (isMobile && mode === 'tour') {
                setIsOpen(true)
                setMode('menu')
            }
            return
        }

        const item = BOT_SCRIPT[index]
        setCurrentMessageIndex(index)
        if (mode === 'chat' || !isMobile) addMessage(item.text)
        scrollToSection(item.scrollId)

        speakText(item.text, () => {
            setTimeout(() => startTourStep(index + 1), 1000)
        })
    }

    const handleStartTour = () => {
        if (speechSynthesisRef.current) speechSynthesisRef.current.cancel()
        setMode('tour')
        if (isMobile) setIsOpen(false)
        setMessages([])
        startTourStep(0)
    }

    const handleSendMessage = (e) => {
        e.preventDefault()
        if (!inputValue.trim()) return

        addMessage(inputValue, 'user')
        const reply = findMatch(inputValue)
        setInputValue('')

        setTimeout(() => {
            addMessage(reply, 'bot')
            speakText(reply)
        }, 600)
    }

    const toggleOpen = () => {
        setIsOpen(!isOpen)
        if (mode === 'tour' && isOpen) {
            if (speechSynthesisRef.current) speechSynthesisRef.current.cancel()
            setIsSpeaking(false)
            setCurrentMessageIndex(-1)
        }
    }

    const resetToMenu = () => {
        setMode('menu')
        if (speechSynthesisRef.current) speechSynthesisRef.current.cancel()
        setIsSpeaking(false)
        setCurrentMessageIndex(-1)
    }

    return (
        <div className="fixed z-[9999]">
            {/* Mobile Tour Bar */}
            <AnimatePresence>
                {isMobile && !isOpen && mode === 'tour' && isSpeaking && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed top-20 left-1/2 -translate-x-1/2 bg-slate-900/90 text-white px-6 py-3 rounded-full shadow-2xl backdrop-blur-md flex items-center gap-4 border border-indigo-500/30"
                    >
                        <div className="flex gap-1">
                            <motion.span animate={{ height: [4, 12, 4] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-1 bg-indigo-400 rounded-full" />
                            <motion.span animate={{ height: [8, 16, 8] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.1 }} className="w-1 bg-indigo-500 rounded-full" />
                        </div>
                        <span className="text-xs font-bold tracking-widest uppercase">Guided Tour Active</span>
                        <button onClick={() => { setIsOpen(true); setMode('menu'); speechSynthesisRef.current.cancel(); }} className="p-1 hover:bg-white/10 rounded-full">
                            <X size={14} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleOpen}
                className={`fixed bottom-[84px] sm:bottom-[96px] right-6 sm:right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors wa-float ${isOpen ? 'bg-slate-800 text-white' : 'bg-indigo-600 text-white'
                    }`}
            >
                {isOpen ? <X size={24} /> : <Cpu size={28} />}
                {!isOpen && isSpeaking && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-indigo-500"></span>
                    </span>
                )}
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: 'bottom right' }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="fixed bottom-[150px] sm:bottom-[165px] right-4 sm:right-6 w-[calc(100vw-32px)] sm:w-[380px] max-w-[400px] bg-white dark:bg-bg-dark rounded-2xl shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800 z-50 flex flex-col max-h-[calc(100vh-160px)]"
                    >
                        <div className="bg-slate-900 px-5 py-4 flex items-center justify-between text-white">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center shadow-inner relative">
                                    <Cpu size={22} />
                                    <div className={`absolute -bottom-1 -right-1 w-3 h-3 border-2 border-slate-900 rounded-full ${isSpeaking ? 'bg-indigo-500' : 'bg-slate-500'}`}></div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm leading-none mb-1">Inkwell Assistant</h4>
                                    <p className="text-[10px] text-slate-400 uppercase tracking-widest leading-none">
                                        {isSpeaking ? 'Talking...' : 'Online & Ready'}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                {mode !== 'menu' && (
                                    <button
                                        onClick={resetToMenu}
                                        className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                                        title="Back to Menu"
                                    >
                                        <Home size={20} />
                                    </button>
                                )}
                                <button 
                                    onClick={() => {
                                        const nextState = !useSpeech
                                        setUseSpeech(nextState)
                                        if (!nextState && speechSynthesisRef.current) {
                                            speechSynthesisRef.current.cancel()
                                            setIsSpeaking(false)
                                        }
                                    }} 
                                    className={`p-2 rounded-lg transition-colors ${useSpeech ? 'text-indigo-400 bg-white/5' : 'text-slate-500 hover:text-white'}`}
                                >
                                    {useSpeech ? <Volume2 size={18} /> : <VolumeX size={18} />}
                                </button>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto min-h-[50vh] max-h-[60vh] sm:min-h-[380px] sm:max-h-[500px] p-5 bg-slate-50/50 dark:bg-slate-900/50 flex flex-col gap-4">
                            {mode === 'menu' ? (
                                <div className="h-full flex flex-col items-center justify-center text-center p-4">
                                    <div className="w-16 h-16 bg-indigo-100 text-indigo-500 rounded-2xl flex items-center justify-center mb-4">
                                        <Cpu size={32} />
                                    </div>
                                    <h5 className="font-bold text-slate-900 dark:text-white mb-2">How can I help you?</h5>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                                        Experience Inkwell & Code through a guided tour or ask any questions!
                                    </p>
                                    <div className="w-full flex flex-col gap-3">
                                        <button
                                            onClick={handleStartTour}
                                            className="flex items-center justify-center gap-3 bg-primary text-white py-4 rounded-xl font-bold hover:bg-slate-900 transition-all shadow-lg shadow-indigo-200"
                                        >
                                            <Tablet size={20} />
                                            Start Guided Tour
                                        </button>
                                        <button
                                            onClick={() => setMode('chat')}
                                            className="flex items-center justify-center gap-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 py-4 rounded-xl font-bold hover:border-indigo-300 dark:hover:border-indigo-500 transition-all"
                                        >
                                            <MessageCircle size={20} className="text-indigo-500" />
                                            Chat with me
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    {messages.length === 0 && mode === 'chat' && (
                                        <div className="p-4 bg-indigo-50 dark:bg-primary-glow/20 border border-indigo-100 dark:border-indigo-500/30 rounded-xl text-center">
                                            <p className="text-xs text-indigo-700 dark:text-indigo-300 font-medium">I'm ready! Ask about our work, tech, or pricing.</p>
                                        </div>
                                    )}
                                    {messages.map((m) => (
                                        <motion.div key={m.id} initial={{ opacity: 0, x: m.sender === 'user' ? 20 : -20 }} animate={{ opacity: 1, x: 0 }} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                            <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${m.sender === 'user' ? 'bg-indigo-600 text-white rounded-tr-none' : 'bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-tl-none'}`}>
                                                {m.text}
                                            </div>
                                        </motion.div>
                                    ))}
                                    {isSpeaking && mode === 'chat' && (
                                        <div className="flex gap-1 p-1">
                                            <motion.span animate={{ height: [4, 12, 4] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-1 bg-indigo-400 rounded-full" />
                                            <motion.span animate={{ height: [8, 16, 8] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.1 }} className="w-1 bg-indigo-500 rounded-full" />
                                        </div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </>
                            )}
                        </div>

                        <form onSubmit={handleSendMessage} className={`p-4 bg-white dark:bg-bg-dark border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 ${mode !== 'chat' ? 'opacity-30 pointer-events-none' : ''}`}>
                            <button type="button" className="p-2 text-slate-400 dark:text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full"><Mic size={20} /></button>
                            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Type a message..." className="flex-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 dark:text-white rounded-xl px-4 py-2 text-sm focus:outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500" />
                            <button type="submit" disabled={!inputValue.trim()} className={`p-2 rounded-full ${inputValue.trim() ? 'bg-indigo-600 text-white' : 'text-slate-300'}`}><Send size={20} /></button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
