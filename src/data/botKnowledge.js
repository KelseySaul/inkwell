export const KNOWLEDGE_BASE = {
    greetings: [
        {
            keywords: ['hello', 'hi', 'hey', 'greetings', 'jambo', 'habari'],
            response: "Hello there! I'm the Inkwell Assistant. How can I help you today? You can ask about our services, pricing, or project timelines!"
        }
    ],
    intents: [
        {
            keywords: ['want a website', 'need a website', 'order', 'book', 'get a site', 'buy'],
            response: "That's great! To start your website project, you can fill out the 'Get a Quote' form on this page, or click the WhatsApp button to chat with our team directly. We'd love to help you build your digital presence!"
        }
    ],
    services: [
        {
            keywords: ['web', 'website', 'development', 'react', 'site'],
            response: "We build premium, high-performance websites using React, Vite, and Supabase. Whether it's a portfolio or a complex web app, we've got you covered."
        },
        {
            keywords: ['design', 'graphic', 'logo', 'branding'],
            response: "Our graphic design services include logo creation, full brand identity, and marketing materials that make your business stand out."
        },
        {
            keywords: ['system', 'erp', 'hospital', 'management', 'fullstack'],
            response: "We develop custom management systems like Hospital Management, ERPs, and Home management systems tailored to your specific business needs."
        },
        {
            keywords: ['print', 'printing', 'banners', 'cards'],
            response: "We offer premium printing services for everything from business cards and stationery to large-scale banners and marketing collateral."
        }
    ],
    timelines: [
        {
            keywords: ['time', 'how long', 'duration', 'weeks', 'days', 'timeline'],
            response: "Project timelines vary by complexity: Portfolios usually take 1-2 weeks, Business/Service sites take 3-5 weeks, and full E-commerce stores or custom systems take 6-10 weeks."
        }
    ],
    pricing: [
        {
            keywords: ['price', 'cost', 'how much', 'cheap', 'expensive', 'kes'],
            response: "Our pricing is tiered: Portfolio websites start at KES 20,000, Business sites at KES 40,000, and E-commerce stores at KES 70,000. Custom systems are quoted based on requirements."
        },
        {
            keywords: ['portfolio price'],
            response: "Portfolio websites range from KES 20,000 to 35,000 depending on the number of case studies and features."
        },
        {
            keywords: ['business price', 'service price'],
            response: "Business and Service websites range from KES 40,000 to 85,000, including blog features and testimonials."
        },
        {
            keywords: ['ecommerce price', 'shop price', 'store price'],
            response: "E-commerce stores start at KES 70,000 and can go up to 150,000+ for advanced features like complex inventory and multi-vendor support."
        }
    ],
    company: [
        {
            keywords: ['who', 'you', 'inkwell', 'about', 'company', 'nairobi', 'kenya'],
            response: "Inkwell & Code is a Nairobi-based premium creative studio and tech firm. We bridge the gap between stunning design and robust engineering."
        },
        {
            keywords: ['tech', 'stack', 'languages', 'use', 'python', 'node', 'javascript', 'typescript', 'postgresql'],
            response: "We use modern technologies like React.js, Vite, Tailwind CSS, and Supabase. Additionally, we are experts in Python, PostgreSQL, Node.js, JavaScript, and TypeScript for robust backend and frontend engineering."
        },
        {
            keywords: ['contact', 'email', 'phone', 'whatsapp', 'reach'],
            response: "You can reach us via the WhatsApp button in the corner, fill out the quote form on this page, or email us at inkwellcode@gmail.com."
        }
    ],
    smalltalk: [
        {
            keywords: ['how are you', 'how do you do', 'how are things', 'how is your day', 'how have you been', "how's it going", "how's everything"],
            response: "I'm doing great, thanks for asking! I'm here and ready to help you build something amazing. How can I assist you today?"
        },
        {
            keywords: ['thank you', 'thanks', 'appreciate it', 'gracias', 'cheers', 'thx', 'thank u'],
            response: "You're very welcome! It's my pleasure to help. Is there anything else you'd like to know?"
        },
        {
            keywords: ['goodbye', 'bye', 'see you', 'cya', 'adios', 'good night', 'good morning', 'good afternoon', 'have a good day'],
            response: "Take care and have a wonderful day! Feel free to reach out via WhatsApp when you're ready to start your project."
        },
        {
            keywords: ['are you a human', 'are you a bot', 'are you ai', 'who are you', 'what are you', 'are you real', 'robot'],
            response: "I'm the virtual assistant for Inkwell & Code! While I'm an AI, I'm designed to help you just as well as a human would. What can I tell you about our services?"
        },
        {
            keywords: ['what are you doing', 'what do you do', 'how can you help', 'what do you know', 'what is your job', 'what can you do'],
            response: "I help visitors learn about Inkwell & Code's services, pricing, and projects! I'm basically your personal digital guide here. What would you like to explore?"
        },
        {
            keywords: ['tell me a joke', 'make me laugh', 'funny', 'joke'],
            response: "Why do programmers prefer dark mode? Because light attracts bugs! Anyway, want to talk about building a bug-free website? 😄"
        },
        {
            keywords: ['good', 'great', 'awesome', 'nice', 'cool', 'amazing', 'perfect', 'ok', 'okay', 'fine', 'sounds good'],
            response: "Awesome! So, what brought you to Inkwell & Code today? Are you interested in a new website or perhaps a custom system?"
        },
        {
            keywords: ['who created you', 'who made you', 'who is your creator', 'who built you', 'your boss'],
            response: "I was created by the brilliant development team right here at Inkwell & Code to assist our clients and visitors."
        },
        {
            keywords: ['yes', 'yeah', 'yep', 'absolutely', 'sure', 'ok', 'okay'],
            response: "Great! Feel free to ask me specifics about our pricing, timelines, or the types of projects we build."
        },
        {
            keywords: ['no', 'nope', 'nah', 'not really', 'nothing'],
            response: "No worries at all! I'll be here if you think of any questions. You can also just browse the site at your own pace."
        }
    ],
    fallback: "I'm not exactly sure what you mean, but I'm learning every day! I mainly know about Inkwell & Code's services, pricing, timelines, and projects. Can I help you with one of those?"
};

export const findMatch = (input) => {
    // Sanitize input: remove punctuation and extra spaces to match how humans actually type
    const query = input.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, ' ').trim();

    // 1. Check for basic greetings first (High Priority)
    for (const item of KNOWLEDGE_BASE.greetings) {
        if (item.keywords.some(k => query === k || query.startsWith(k + ' ') || query.includes(' ' + k))) {
            return item.response;
        }
    }

    // 2. Check for Intents (High Priority)
    for (const item of KNOWLEDGE_BASE.intents) {
        if (item.keywords.some(k => query.includes(k))) {
            return item.response;
        }
    }

    // 3. Combined search for all other items
    const allItems = [
        ...KNOWLEDGE_BASE.services,
        ...KNOWLEDGE_BASE.pricing,
        ...KNOWLEDGE_BASE.company,
        ...KNOWLEDGE_BASE.timelines,
        ...(KNOWLEDGE_BASE.smalltalk || [])
    ];

    let bestMatch = null;
    let maxMatches = 0;

    for (const item of allItems) {
        let matches = 0;
        for (const keyword of item.keywords) {
            if (query.includes(keyword)) {
                // Boost for exact or multi-word matches
                matches += keyword.includes(' ') ? 2 : 1;
            }
        }
        if (matches > maxMatches) {
            maxMatches = matches;
            bestMatch = item.response;
        }
    }

    return bestMatch || KNOWLEDGE_BASE.fallback;
};
