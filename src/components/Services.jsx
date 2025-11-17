import { useEffect, useState } from 'react'

export default function Services() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL
        const res = await fetch(`${base}/api/services`)
        const data = await res.json()
        setServices(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchServices()
  }, [])

  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-gray-900">Nos services</h2>
      <p className="text-gray-600 mt-2">Des prestations adaptées à vos envies.</p>

      {loading ? (
        <p className="mt-8 text-gray-500">Chargement...</p>
      ) : (
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.id} className="rounded-xl border border-gray-200 p-5 hover:shadow-md transition bg-white">
              <h3 className="font-semibold text-gray-900">{s.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{s.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-pink-600 font-bold">{s.price}€</span>
                <span className="text-gray-500 text-sm">{s.duration} min</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
