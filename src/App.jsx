import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Contact />
        <footer className="py-12 border-t border-slate-200 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600">© {new Date().getFullYear()} Delta Removal. All rights reserved.</p>
            <div className="text-sm text-slate-600">Fully licensed • Compliant • Eco‑conscious</div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
