import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Projects from './sections/Projects'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import ChatBot from './components/ChatBot'

const WHATSAPP_NUMBER = '254727908419'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%27d%20like%20to%20get%20a%20quote!`

function WhatsAppBubble() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="whatsapp-bubble"
    >
      {/* WhatsApp SVG icon */}
      <svg viewBox="0 0 32 32" width="28" height="28" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.003 2C8.28 2 2 8.28 2 16.003c0 2.478.648 4.805 1.776 6.823L2 30l7.368-1.742A13.94 13.94 0 0 0 16.003 30C23.72 30 30 23.718 30 16.003 30 8.28 23.72 2 16.003 2zm7.076 19.907c-.3.842-1.76 1.61-2.427 1.663-.624.05-1.214.247-4.09-.853-3.448-1.316-5.655-4.823-5.826-5.047-.17-.224-1.385-1.84-1.385-3.51 0-1.672.875-2.493 1.185-2.834.31-.34.675-.424.9-.424l.648.012c.208.01.487-.08.763.58.3.69 1.015 2.46 1.106 2.64.09.177.15.385.03.614-.12.23-.18.374-.355.575-.176.2-.37.447-.527.6-.176.172-.36.358-.154.7.205.343.914 1.507 1.96 2.44 1.347 1.2 2.483 1.57 2.828 1.745.345.175.547.147.748-.088.2-.234.865-.995 1.096-1.338.23-.344.46-.286.773-.172.315.114 2.002.942 2.347 1.114.344.172.574.258.66.4.086.143.086.826-.214 1.669z" />
      </svg>
      <span className="whatsapp-tooltip">Chat on WhatsApp</span>
    </a>
  )
}

function App() {
  return (
    <div className="min-h-screen selection:bg-indigo-100 selection:text-indigo-700 dark:selection:bg-primary-glow dark:selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppBubble />
      <ChatBot />
    </div>
  )
}

export default App
