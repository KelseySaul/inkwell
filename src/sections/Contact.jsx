import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Mail, Phone, MapPin, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react'
import { supabase } from '../lib/supabase'
import emailjs from '@emailjs/browser'
import confetti from 'canvas-confetti'

// ─── Pricing data ───────────────────────────────────────────────
const websiteTypes = [
  {
    label: 'Portfolio Website',
    price: 'KES 20,000 – 35,000',
    description: 'A visual-first lookbook with high-quality image galleries & case studies. Ideal for designers wanting to get hired by agencies or brands.',
    includes: 'Mobile responsiveness, gallery, contact form',
  },
  {
    label: 'Business / Service Website',
    price: 'KES 40,000 – 85,000',
    description: 'Explains services, packages & process. Includes a blog and testimonials. Best for studios with structured service offerings.',
    includes: 'CMS for self-editing, SEO setup, blog, WhatsApp integration',
  },
  {
    label: 'E-commerce Store',
    price: 'KES 70,000 – 150,000+',
    description: 'Full shop functionality for digital or physical products — templates, fonts, mockups or branded merchandise.',
    includes: 'M-Pesa integration, product catalog, inventory management',
  },
  {
    label: 'One-Page / Landing Page',
    price: 'KES 20,000 – 35,000',
    description: 'A single scrolling page that summarises everything. Great for designers with a very specific niche (e.g. logo-only designers).',
    includes: 'Mobile responsiveness, gallery, contact form',
  },
]

const extras = [
  { label: 'Domain (.co.ke or .com)', price: 'KES 1,000 – 2,500 / year' },
  { label: 'Hosting (Shared / Standard)', price: 'KES 3,000 – 8,000 / year' },
]

// ─── Pricing accordion ──────────────────────────────────────────
function PricingPanel() {
  const [open, setOpen] = useState(null)

  return (
    <div className="flex flex-col gap-3">
      {websiteTypes.map((type, i) => (
        <div key={i} className="rounded-xl border border-white/10 overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/5 transition-colors"
          >
            <div>
              <p className="font-semibold text-white text-sm">{type.label}</p>
              <p className="text-indigo-300 text-xs font-medium mt-0.5">{type.price}</p>
            </div>
            {open === i
              ? <ChevronUp size={16} className="text-indigo-400 shrink-0" />
              : <ChevronDown size={16} className="text-slate-400 shrink-0" />}
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-4 border-t border-white/10 pt-3">
                  <p className="text-slate-300 text-xs leading-relaxed mb-2">{type.description}</p>
                  <p className="text-slate-400 text-xs"><span className="text-indigo-300 font-medium">Includes:</span> {type.includes}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}

      <div className="mt-2 rounded-xl border border-white/10 px-5 py-4">
        <p className="text-slate-400 text-xs uppercase tracking-wider mb-3 font-medium">Add-ons</p>
        {extras.map((e, i) => (
          <div key={i} className="flex items-center justify-between py-1">
            <p className="text-slate-300 text-xs">{e.label}</p>
            <p className="text-indigo-300 text-xs font-medium">{e.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Main component ─────────────────────────────────────────────
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Portfolio Website',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    // ── 1. Send email silently via EmailJS ──────────────────────
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          name: formData.name,      // used by {{name}} in From Name field
          email: formData.email,    // used by {{email}} in Reply To field
          subject: formData.subject,
          message: formData.message,
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
    } catch (emailErr) {
      const reason = emailErr?.text || emailErr?.message || 'Unknown error'
      console.error('EmailJS error:', reason, emailErr)
      setError(`Could not send message (${reason}). Please email us directly at inkwellcode@gmail.com`)
      setIsSubmitting(false)
      return
    }

    // ── 2. Also log to Supabase as backup ──────────────────────
    try {
      await supabase.from('contacts').insert([formData])
    } catch (dbErr) {
      console.error('Supabase log error:', dbErr)
    }

    // ── 3. Show success, confetti & toast ──────────────────────
    setIsSubmitting(false)
    setIsSubmitted(true)
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#6366f1', '#a855f7', '#ffffff']
    })
    // Show toast after a short delay
    setTimeout(() => {
      setShowToast(true)
      setTimeout(() => setShowToast(false), 6000)
    }, 800)
  }

  return (
    <>
      <section id="contact" className="py-28 relative overflow-hidden bg-slate-50">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
        <div className="container px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="section-label">Let's Talk</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Get a <span className="text-primary">Quote</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Ready to bring your vision to life? Browse our pricing below, then send us a message.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* LEFT — contact info + pricing */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-10 text-white"
            >
              <h3 className="text-2xl font-bold mb-1 text-white">Website Pricing</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">Tap a type to see what's included.</p>

              <PricingPanel />

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 border border-white/10 flex items-center justify-center rounded-xl shrink-0">
                    <Mail className="text-indigo-400" size={18} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-wider">Email</p>
                    <p className="text-white font-medium text-sm">inkwellcode@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 border border-white/10 flex items-center justify-center rounded-xl shrink-0">
                    <Phone className="text-indigo-400" size={18} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-wider">Call</p>
                    <p className="text-white font-medium text-sm">+254 714 524 430</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 border border-white/10 flex items-center justify-center rounded-xl shrink-0">
                    <MapPin className="text-indigo-400" size={18} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-wider">Studio</p>
                    <p className="text-white font-medium text-sm">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT — form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 shadow-sm rounded-2xl p-8 md:p-12"
            >
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-primary" size={48} />
                  </div>
                  <h3 className="text-3xl font-bold mb-3">Message Sent!</h3>
                  <p className="text-dim mb-2 text-sm">
                    Thank you for reaching out. We'll review your project details and get back to you within 24 hours.
                  </p>
                  <p className="text-indigo-500 text-sm font-medium mb-8">
                    📬 A confirmation email is on its way to your inbox.
                  </p>
                  <button
                    onClick={() => { setIsSubmitted(false); setShowToast(false); setFormData({ name: '', email: '', subject: 'Portfolio Website', message: '' }) }}
                    className="neon-btn"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-dim">Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="bg-gray-50 border border-gray-200 p-3 rounded-lg focus:border-primary outline-none transition-all"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-dim">Email Address</label>
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="bg-gray-50 border border-gray-200 p-3 rounded-lg focus:border-primary outline-none transition-all"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-dim">Website Type</label>
                    <select
                      className="bg-gray-50 border border-gray-200 p-3 rounded-lg focus:border-primary outline-none transition-all appearance-none"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option>Portfolio Website</option>
                      <option>Business / Service Website</option>
                      <option>E-commerce Store</option>
                      <option>One-Page / Landing Page</option>
                      <option>Logo Design</option>
                      <option>Printing Services</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-dim">Tell us about your project</label>
                    <textarea
                      required
                      rows="4"
                      placeholder="Describe your project, budget, timeline..."
                      className="bg-gray-50 border border-gray-200 p-3 rounded-lg focus:border-primary outline-none transition-all resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  {error && <p className="text-red-400 text-sm">{error}</p>}

                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="neon-btn flex items-center justify-center gap-2 mt-2 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send size={18} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Confirmation toast ── */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 flex items-start gap-3 bg-slate-900 text-white rounded-2xl shadow-2xl px-5 py-4 max-w-sm"
          >
            <div className="w-9 h-9 bg-indigo-500/20 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
              <Mail className="text-indigo-400" size={18} />
            </div>
            <div>
              <p className="font-semibold text-sm mb-0.5">Confirmation on its way!</p>
              <p className="text-slate-400 text-xs leading-relaxed">
                You'll receive a confirmation email about your project shortly. We'll be in touch within 24 hours.
              </p>
            </div>
            <button
              onClick={() => setShowToast(false)}
              className="text-slate-500 hover:text-slate-300 transition-colors shrink-0 ml-1 text-lg leading-none"
              aria-label="Dismiss"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
