export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-600">© {new Date().getFullYear()} Salon Élégance. Tous droits réservés.</p>
        <div className="text-gray-500 text-sm">Mar-Dim: 9h - 19h · 12 Rue du Style, Paris</div>
      </div>
    </footer>
  )
}
