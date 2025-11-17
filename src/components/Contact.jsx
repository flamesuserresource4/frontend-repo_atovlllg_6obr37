import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData.entries())
    payload.consent = !!payload.consent

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Submission failed')
      setStatus({ ok: true, message: 'Thanks! We\'ll be in touch shortly.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, message: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900">Request a quote</h2>
          <p className="mt-2 text-slate-600">Tell us about your project and we\'ll respond within one business day.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 grid gap-6 md:grid-cols-2 bg-slate-50 p-6 rounded-xl border border-slate-200">
          <div className="grid gap-2">
            <label className="text-sm font-medium text-slate-700">Name</label>
            <input name="name" required className="h-11 rounded-lg border-slate-300 focus:border-slate-500 focus:ring-slate-500" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium text-slate-700">Email</label>
            <input name="email" type="email" required className="h-11 rounded-lg border-slate-300 focus:border-slate-500 focus:ring-slate-500" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium text-slate-700">Phone</label>
            <input name="phone" className="h-11 rounded-lg border-slate-300 focus:border-slate-500 focus:ring-slate-500" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium text-slate-700">Company</label>
            <input name="company" className="h-11 rounded-lg border-slate-300 focus:border-slate-500 focus:ring-slate-500" />
          </div>
          <div className="md:col-span-2 grid gap-2">
            <label className="text-sm font-medium text-slate-700">Service needed</label>
            <select name="service_type" className="h-11 rounded-lg border-slate-300 focus:border-slate-500 focus:ring-slate-500">
              <option>Site Assessment</option>
              <option>Extraction & Neutralization</option>
              <option>Certified Disposal</option>
            </select>
          </div>
          <div className="md:col-span-2 grid gap-2">
            <label className="text-sm font-medium text-slate-700">Message</label>
            <textarea name="message" rows="4" className="rounded-lg border-slate-300 focus:border-slate-500 focus:ring-slate-500" />
          </div>
          <div className="flex items-center gap-3 md:col-span-2">
            <input id="consent" name="consent" type="checkbox" className="rounded border-slate-300 text-slate-900 focus:ring-slate-500" defaultChecked />
            <label htmlFor="consent" className="text-sm text-slate-600">You agree to be contacted about your inquiry.</label>
          </div>
          <div className="md:col-span-2">
            <button disabled={loading} className="inline-flex items-center rounded-lg bg-slate-900 text-white px-5 py-3 shadow hover:shadow-md transition-shadow disabled:opacity-60">
              {loading ? 'Sending...' : 'Send request'}
            </button>
          </div>
          {status && (
            <div className={`md:col-span-2 text-sm ${status.ok ? 'text-green-700' : 'text-red-600'}`}>{status.message}</div>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
