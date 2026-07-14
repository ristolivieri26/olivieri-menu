import { MapPin, Phone } from 'lucide-react'

export default function HeroSection() {
  const scrollToMenu = () => {
    document.getElementById('antipasti-terra')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="relative overflow-hidden">
      {/* Background gradient — coastal Tuscan evening */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 60% 0%, #2d5a5f 0%, transparent 65%),
            radial-gradient(ellipse at 10% 80%, #163438 0%, transparent 60%),
            linear-gradient(160deg, #0e2b2e 0%, #1a3c40 45%, #163438 100%)
          `,
        }}
      />

      {/* Decorative olive branch pattern (SVG) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none select-none flex items-center justify-center">
        <svg viewBox="0 0 400 400" className="w-[600px] h-[600px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="200" cy="120" rx="90" ry="140" stroke="#d4bc8e" strokeWidth="1.5" />
          <ellipse cx="200" cy="120" rx="55" ry="95" stroke="#d4bc8e" strokeWidth="1" />
          <line x1="200" y1="20" x2="200" y2="380" stroke="#d4bc8e" strokeWidth="1.5" />
          <ellipse cx="130" cy="180" rx="60" ry="90" transform="rotate(-30 130 180)" stroke="#d4bc8e" strokeWidth="1" />
          <ellipse cx="270" cy="180" rx="60" ry="90" transform="rotate(30 270 180)" stroke="#d4bc8e" strokeWidth="1" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 pt-14 pb-10 text-center">
        {/* Restaurant name */}
        <h1 className="font-display text-5xl sm:text-6xl text-sand font-normal leading-none tracking-wide mb-1">
          Da Olivieri
        </h1>
        <p className="font-body text-xs text-sand-300/70 tracking-[0.2em] uppercase mb-4">
          Ristorante · Pizzeria · Bar
        </p>

        {/* Tagline */}
        <p className="font-display text-lg sm:text-xl italic text-sand/80 max-w-xs mx-auto leading-relaxed mb-8">
          "Dove il mare incontra la terra e la tradizione si fa gusto."
        </p>

        {/* CTA Button */}
        <button
          onClick={scrollToMenu}
          className="inline-flex items-center gap-2 bg-terra text-white font-body font-medium text-sm px-6 py-3 rounded-full hover:bg-terra-light active:scale-95 transition-all shadow-lg shadow-black/20"
        >
          Scopri il Menù
        </button>

        {/* Info bar */}
        <div className="flex items-center justify-center gap-4 mt-8 flex-wrap">
          <a
            href="https://maps.google.com/?q=Viale+Guglielmo+Marconi+62+Viareggio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sand-300/70 hover:text-sand/90 transition-colors text-xs font-body"
          >
            <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
            <span>Viale G. Marconi 62, Viareggio</span>
          </a>
          <span className="text-sand/20 hidden sm:block">·</span>
          <a
            href="tel:+3905849260"
            className="flex items-center gap-1.5 text-sand-300/70 hover:text-sand/90 transition-colors text-xs font-body"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>0584 49260</span>
          </a>
        </div>

        {/* Coperto notice */}
        <p className="mt-3 text-[11px] text-sand/30 font-body">
          Coperto € 2,00 a persona
        </p>
      </div>

      {/* Bottom fade to cream */}
      <div className="h-6 bg-gradient-to-b from-transparent to-[#faf6ef]" />
    </header>
  )
}