function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 right-1/2 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-24 left-1/2 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center text-xs font-medium bg-blue-50 text-blue-700 px-2 py-1 rounded-full ring-1 ring-blue-200">Trusted Delta Removal Experts</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Safe, compliant Delta solution removal for your business
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              We specialize in the assessment, extraction, and disposal of delta-based solutions with minimal disruption. Fully licensed, environmentally responsible, and fast.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#contact" className="inline-flex items-center rounded-lg bg-slate-900 text-white px-5 py-3 shadow hover:shadow-md transition-shadow">
                Get a fast quote
              </a>
              <a href="#services" className="inline-flex items-center rounded-lg bg-white text-slate-900 px-5 py-3 ring-1 ring-slate-300 hover:bg-slate-50">
                Explore services
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-green-500" /> Licensed & insured</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-green-500" /> 24–72h turnaround</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-green-500" /> Eco-friendly disposal</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-2 shadow-xl">
              <div className="h-full w-full rounded-xl bg-[conic-gradient(at_30%_30%,#22d3ee_0,#1e293b_20%,#0ea5e9_40%,#1e293b_60%,#22d3ee_80%,#1e293b_100%)] opacity-90" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white shadow rounded-lg px-4 py-3">
              <p className="text-xs text-slate-500">Average job completion</p>
              <p className="text-lg font-semibold text-slate-900">48 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
