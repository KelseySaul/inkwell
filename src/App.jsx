import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="bg-bg-dark min-h-screen text-white selection:bg-primary selection:text-bg-dark">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
