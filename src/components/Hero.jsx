import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(244,114,182,0.25),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(96,165,250,0.25),transparent_40%)]" />
      <div className="relative max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900"
          >
            Votre salon de coiffure moderne au coeur de la ville
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-4 text-lg text-gray-600"
          >
            Coupes, colorations et soins capillaires personnalisés par des experts passionnés.
          </motion.p>
          <div className="mt-8 flex gap-3">
            <a href="#booking" className="px-5 py-3 rounded-lg bg-pink-600 text-white font-medium hover:bg-pink-700 transition">Prendre rendez-vous</a>
            <a href="#services" className="px-5 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition">Voir nos services</a>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-pink-200 via-white to-blue-200 shadow-xl"></div>
        </motion.div>
      </div>
    </section>
  )
}
