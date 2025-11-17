function Process() {
  const steps = [
    {
      title: 'Consultation',
      desc: 'We learn about your facility, timelines, and compliance requirements.'
    },
    {
      title: 'On-site Assessment',
      desc: 'Technicians assess the environment and outline a clear, compliant plan.'
    },
    {
      title: 'Removal & Neutralization',
      desc: 'We execute with minimal disruption, following strict safety protocols.'
    },
    {
      title: 'Verification & Reporting',
      desc: 'Third-party verification and full documentation for your records.'
    }
  ]

  return (
    <section id="process" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900">How it works</h2>
          <p className="mt-2 text-slate-600">A transparent, start‑to‑finish process designed for safety and speed.</p>
        </div>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-xl border border-slate-200 bg-white p-6">
              <span className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm">{i + 1}</span>
              <h3 className="mt-2 font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Process
