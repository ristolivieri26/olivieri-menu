import { X, Camera, Snowflake } from 'lucide-react'
import { useEffect } from 'react'
import type { Dish } from '../data/menu'
import { allergenNames } from '../data/menu'

interface Props {
  dish: Dish | null
  onClose: () => void
}

export default function DishModal({ dish, onClose }: Props) {
  useEffect(() => {
    if (dish) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [dish])

  if (!dish) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center animate-fade-in"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Sheet */}
      <div
        className="relative z-10 w-full sm:max-w-lg bg-[#faf6ef] rounded-t-3xl sm:rounded-3xl shadow-2xl animate-slide-up max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Photo area */}
        {dish.photo ? (
          <div className="aspect-video w-full overflow-hidden rounded-t-3xl sm:rounded-t-3xl">
            <img
              src={dish.photo}
              alt={dish.name}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="aspect-video w-full bg-gradient-to-br from-sand-100 to-sand-200 rounded-t-3xl sm:rounded-t-3xl flex flex-col items-center justify-center gap-2">
            <Camera className="w-10 h-10 text-sand opacity-50" />
            <span className="text-sm text-sand-500 font-body">Foto in arrivo</span>
          </div>
        )}

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors"
          aria-label="Chiudi"
        >
          <X className="w-4 h-4 text-sea-900" />
        </button>

        {/* Content */}
        <div className="p-6 pb-8">
          {/* Frozen note */}
          {dish.frozen && (
            <div className="flex items-center gap-1.5 mb-3 text-xs text-sea-600 font-body">
              <Snowflake className="w-3.5 h-3.5" />
              <span>Preparato con materia prima congelata o surgelata</span>
            </div>
          )}

          {/* Name */}
          <h2 className="font-display text-2xl sm:text-3xl text-sea-900 leading-tight mb-1">
            {dish.name}
          </h2>
          {dish.nameEn && (
            <p className="text-sm text-sea-600 font-body italic mb-4">{dish.nameEn}</p>
          )}

          {/* Description */}
          {dish.description && (
            <p className="text-sm text-sea-800 font-body leading-relaxed mb-4 bg-sand-50 rounded-xl p-3 border border-sand-200">
              {dish.description}
            </p>
          )}

          {/* Price */}
          <div className="flex items-center justify-between mb-5">
            <span className="font-display text-3xl text-terra font-semibold">{dish.price}</span>
            <span className="text-xs text-sea-500 font-body">IVA inclusa</span>
          </div>

          {/* Allergens */}
          {dish.allergens.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-sea-500 mb-3 font-body">
                Allergeni presenti
              </h3>
              <div className="flex flex-col gap-1.5">
                {dish.allergens.map(num => (
                  <div key={num} className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-terra/10 text-terra text-xs font-semibold flex items-center justify-center font-body flex-shrink-0">
                      {num}
                    </span>
                    <span className="text-sm text-sea-800 font-body">{allergenNames[num]}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {dish.allergens.length === 0 && (
            <p className="text-xs text-sea-400 font-body">
              Nessun allergene principale dichiarato. Per ulteriori informazioni chiedere al personale.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}