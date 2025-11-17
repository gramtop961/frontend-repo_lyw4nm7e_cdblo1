import Hero from './components/Hero'
import Services from './components/Services'
import Booking from './components/Booking'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-extrabold text-xl">Salon Élégance</div>
          <nav className="hidden sm:flex gap-6 text-sm text-gray-600">
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#booking" className="hover:text-gray-900">Rendez-vous</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <Booking />
      </main>

      <Footer />
    </div>
  )
}

export default App
