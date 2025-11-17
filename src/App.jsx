import FAQ from './components/FAQ'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-indigo-50 to-fuchsia-50">
      <header className="px-6 sm:px-10 py-6">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-blue-600 text-white grid place-items-center font-bold">IC</div>
            <div>
              <p className="text-slate-900 font-semibold leading-tight">International Courier</p>
              <p className="text-xs text-slate-500 -mt-0.5">Fast. Secure. Worldwide.</p>
            </div>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
            <a href="#services" className="hover:text-blue-700 transition-colors">Services</a>
            <a href="#pricing" className="hover:text-blue-700 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-blue-700 transition-colors">FAQ</a>
            <a href="#contact" className="rounded-lg bg-blue-600 text-white px-4 py-2 font-medium hover:bg-blue-700 transition-colors">Get a quote</a>
          </nav>
        </div>
      </header>

      <main id="faq" className="mx-auto max-w-6xl px-6 sm:px-10">
        <FAQ />
      </main>

      <footer className="mt-10 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} International Courier. All rights reserved.
      </footer>
    </div>
  )
}
