import { useState } from 'react'

const initialState = {
  name: '',
  email: '',
  phone: '',
  service: 'Coupe',
  preferred_date: '',
  preferred_time: '',
  notes: ''
}

export default function Booking() {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const base = import.meta.env.VITE_BACKEND_URL
      const payload = { ...form }
      const res = await fetch(`${base}/api/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Erreur')
      setStatus({ type: 'success', message: 'Votre demande a bien été prise en compte. Nous vous contacterons pour confirmation.' })
      setForm(initialState)
    } catch (e) {
      setStatus({ type: 'error', message: e.message || 'Une erreur est survenue.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="booking" className="bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900">Prendre rendez-vous</h2>
        <p className="text-gray-600 mt-2">Remplissez le formulaire, nous vous recontactons rapidement.</p>

        {status && (
          <div className={`mt-4 rounded-lg p-4 ${status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6 grid sm:grid-cols-2 gap-4 bg-white p-6 rounded-xl border border-gray-200">
          <div>
            <label className="block text-sm text-gray-700">Nom</label>
            <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500" />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500" />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Téléphone</label>
            <input name="phone" value={form.phone} onChange={handleChange} required className="mt-1 w-full border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500" />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Prestation</label>
            <select name="service" value={form.service} onChange={handleChange} className="mt-1 w-full border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500">
              <option>Coupe</option>
              <option>Coloration</option>
              <option>Brushing</option>
              <option>Soin</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-700">Date souhaitée</label>
            <input type="date" name="preferred_date" value={form.preferred_date} onChange={handleChange} required className="mt-1 w-full border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500" />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Heure souhaitée</label>
            <input type="time" name="preferred_time" value={form.preferred_time} onChange={handleChange} required className="mt-1 w-full border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm text-gray-700">Notes</label>
            <textarea name="notes" value={form.notes} onChange={handleChange} rows="3" className="mt-1 w-full border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500" />
          </div>
          <div className="sm:col-span-2 flex justify-end">
            <button disabled={loading} className="px-5 py-3 rounded-lg bg-pink-600 text-white font-medium hover:bg-pink-700 transition disabled:opacity-60">
              {loading ? 'Envoi...' : 'Envoyer la demande'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
