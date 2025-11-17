import { useState } from 'react'
import { HelpCircle, Globe, Package, ShieldCheck, Clock, Truck, ChevronDown, Mail } from 'lucide-react'

const faqs = [
  {
    question: 'What countries do you ship to?',
    answer:
      'We offer door-to-door delivery to over 220 countries and territories worldwide through our trusted global network. Enter your destination at checkout to see available services and transit times.',
    icon: <Globe className="h-5 w-5 text-blue-600" />,
  },
  {
    question: 'How long does international delivery take?',
    answer:
      'Express services deliver in 2–5 business days to major cities. Economy services typically arrive in 6–10 business days. Transit times vary by destination, customs clearance, and service level.',
    icon: <Clock className="h-5 w-5 text-blue-600" />,
  },
  {
    question: 'How are shipping rates calculated?',
    answer:
      'Rates are based on destination, service level, package dimensions (volumetric weight), and actual weight. You’ll get an instant quote before booking. Bulk and business discounts are available.',
    icon: <Package className="h-5 w-5 text-blue-600" />,
  },
  {
    question: 'What documents are required for customs?',
    answer:
      'Most shipments require a commercial invoice with accurate item descriptions, HS codes, value, and the reason for export. Some destinations need additional forms. Our checkout wizard generates the paperwork for you.',
    icon: <Mail className="h-5 w-5 text-blue-600" />,
  },
  {
    question: 'Can I ship restricted or fragile items?',
    answer:
      'Certain items are restricted or prohibited by carriers and destination laws (e.g., batteries, liquids, perishables). Fragile items are accepted with proper packaging. Check our restricted items list during booking.',
    icon: <ShieldCheck className="h-5 w-5 text-blue-600" />,
  },
  {
    question: 'How do I track my shipment?',
    answer:
      'You’ll receive a tracking number immediately after booking. Real‑time tracking is available on our website and via email/SMS updates. Opt in for delivery notifications at checkout.',
    icon: <Truck className="h-5 w-5 text-blue-600" />,
  },
]

function FAQItem({ item, index, isOpen, onToggle }) {
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${index}`}
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 focus:outline-none group"
      >
        <div className="flex items-center gap-3 text-left">
          <span className="shrink-0 inline-flex items-center justify-center rounded-md bg-blue-50 p-2">
            {item.icon}
          </span>
          <span className="font-medium text-slate-800 group-hover:text-blue-700 transition-colors">
            {item.question}
          </span>
        </div>
        <ChevronDown
          className={`h-5 w-5 text-slate-500 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-blue-600' : ''
          }`}
        />
      </button>
      <div
        id={`faq-panel-${index}`}
        role="region"
        className={`grid transition-all duration-300 ease-out overflow-hidden ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0">
          <p className="pb-5 text-slate-600 leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="relative py-16 sm:py-20">
      <div className="absolute inset-0 -z-10">
        <div className="mx-auto max-w-5xl h-full opacity-60">
          <div className="absolute -top-24 -left-24 size-[360px] rounded-full bg-blue-200 blur-3xl" />
          <div className="absolute -bottom-24 -right-16 size-[320px] rounded-full bg-indigo-200 blur-3xl" />
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700">
            <HelpCircle className="h-4 w-4" />
            International Courier FAQ
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Everything you need to know before you ship
          </h2>
          <p className="mt-3 text-slate-600">
            Clear answers on delivery times, customs paperwork, pricing, tracking, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white/70 backdrop-blur rounded-2xl shadow-sm ring-1 ring-slate-200 p-6 sm:p-8">
            {faqs.map((item, idx) => (
              <FAQItem
                key={idx}
                item={item}
                index={idx}
                isOpen={openIndex === idx}
                onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              />
            ))}
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-6 shadow-lg">
              <h3 className="text-lg font-semibold">Need personalized help?</h3>
              <p className="mt-2 text-blue-100">
                Our logistics experts can advise on packaging, customs, and best routes for your shipment.
              </p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur transition"
              >
                <span>Contact support</span>
              </a>
            </div>

            <ul className="rounded-2xl bg-white/80 backdrop-blur ring-1 ring-slate-200 p-6 divide-y divide-slate-200">
              <li className="py-4 flex items-start gap-3">
                <Globe className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-medium text-slate-800">Worldwide coverage</p>
                  <p className="text-sm text-slate-600">220+ destinations with customs guidance.</p>
                </div>
              </li>
              <li className="py-4 flex items-start gap-3">
                <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-medium text-slate-800">Fast transit</p>
                  <p className="text-sm text-slate-600">Express and economy options to fit your budget.</p>
                </div>
              </li>
              <li className="py-4 flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-medium text-slate-800">Safe & secure</p>
                  <p className="text-sm text-slate-600">Insured shipment and careful handling.</p>
                </div>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
