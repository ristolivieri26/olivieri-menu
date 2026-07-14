import { Snowflake, Camera } from 'lucide-react'
import type { Dish } from '../data/menu'

interface Props {
  dish: Dish
  onClick: (dish: Dish) => void
}

function nameToSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .substring(0, 60)
}

function trackDishClick(dish: Dish) {
  if (typeof window !== 'undefined' && window.goatcounter?.count) {
    window.goatcounter.count({
      path: `/piatto/${nameToSlug(dish.name)}`,
      title: dish.name,
      event: true,
    })
  }
}

export default function MenuItem({ dish, onClick }: Props) {
  const handleClick = () => {
    trackDishClick(dish)
    onClick(dish)
  }

  return (
    <button
      onClick={handleClick}
      className="group w-full text-left bg-white rounded-2xl p-4 shadow-sm border border-sand-100 hover:border-sand-300 hover:shadow-md active:scale-[0.98] transition-all duration-150 flex gap-4"
    >
      {/* Photo thumbnail / placeholder */}
      <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-br from-sand-100 to-sand-200 flex items-center justify-center">
        {dish.photo ? (
          <img src={dish.photo} alt={dish.name} className="w-full h-full object-cover" />
        ) : (
          <Camera className="w-5 h-5 text-sand opacity-50" />
        )}
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="font-display text-base text-sea-900 leading-snug line-clamp-2 group-hover:text-terra transition-colors">
              {dish.name}
            </h3>
            {dish.nameEn && (
              <p className="text-xs text-sea-500 font-body mt-0.5 line-clamp-1 italic">
                {dish.nameEn}
              </p>
            )}
          </div>
          <span className="flex-shrink-0 font-display text-lg text-terra font-semibold whitespace-nowrap">
            {dish.price}
          </span>
        </div>

        {/* Allergen pills + frozen */}
        <div className="flex items-center gap-1.5 mt-2 flex-wrap">
          {dish.frozen && (
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-[10px] font-body font-medium">
              <Snowflake className="w-2.5 h-2.5" />
              surgelato
            </span>
          )}
          {dish.allergens.map(n => (
            <span
              key={n}
              className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-terra/10 text-terra text-[10px] font-semibold font-body"
            >
              {n}
            </span>
          ))}
        </div>
      </div>
    </button>
  )
}