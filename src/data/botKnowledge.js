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
    fallback: "I'm sorry, I mainly know about Inkwell & Code's services, pricing, timelines, and projects. Please ask about our website development or design services!"
};

export const findMatch = (input) => {
    const query = input.toLowerCase().trim();

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
        ...KNOWLEDGE_BASE.timelines
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
