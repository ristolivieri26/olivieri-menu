import { MapPin, Phone, AlertTriangle } from 'lucide-react'
import { allergenNames } from '../data/menu'

export default function Footer() {
  return (
    <footer className="bg-sea-900 text-sand mt-12">
      {/* Allergen legend */}
      <div className="px-5 pt-8 pb-6 border-b border-sea-700">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-4 h-4 text-terra-light flex-shrink-0" />
          <h3 className="font-body text-xs font-semibold uppercase tracking-widest text-sand-300">
            Lista Allergeni — Allergen List
          </h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">
          {Object.entries(allergenNames).map(([num, name]) => (
            <div key={num} className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-terra/20 text-terra-light text-[10px] font-semibold flex items-center justify-center flex-shrink-0 font-body">
                {num}
              </span>
              <span className="text-xs text-sand-300 font-body">{name}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[10px] text-sea-500 font-body leading-relaxed">
          * I piatti contrassegnati sono preparati con materia prima congelata o surgelata a bordo.
          Il pescato presente nel menù viene sottoposto ad abbattimento termico come da Regolamento CE 853/2004.
          Alcuni piatti possono contenere allergeni — chiedere informazioni al personale.
          È a disposizione del cliente il libro degli allergeni.
        </p>
      </div>

      {/* Restaurant info */}
      <div className="px-5 py-6 text-center">
        <p className="font-display text-xl text-sand mb-1">Da Olivieri</p>
        <p className="font-body text-xs text-sea-500 mb-3">Ristorante · Pizzeria · Bar · Gelateria</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs text-sea-400 font-body">
          <a
            href="https://maps.google.com/?q=Viale+Guglielmo+Marconi+62+Viareggio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-sand transition-colors"
          >
            <MapPin className="w-3.5 h-3.5" />
            Viale G. Marconi 62, 55049 Viareggio (LU)
          </a>
          <a
            href="tel:+3905849260"
            className="flex items-center gap-1.5 hover:text-sand transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            0584 49260
          </a>
        </div>
        <p className="mt-4 text-[10px] text-sea-600 font-body">
          Menù Estate 2026 — I prezzi possono variare. Coperto € 2,00 a persona.
        </p>
        <p className="mt-1 text-[10px] text-sea-700 font-body">
          Utilizziamo analytics anonime e prive di cookie per migliorare il servizio.
        </p>
      </div>
    </footer>
  )
}