import type { MenuSection as MenuSectionType, Dish } from '../data/menu'
import MenuItem from './MenuItem'

interface Props {
  section: MenuSectionType
  onDishClick: (dish: Dish) => void
}

const subLabel = {
  terra: { label: 'di Terra', color: 'bg-amber-50 text-amber-700 border-amber-100' },
  mare: { label: 'di Mare', color: 'bg-cyan-50 text-cyan-700 border-cyan-100' },
}

export default function MenuSection({ section, onDishClick }: Props) {
  if (section.dishes.length === 0) return null

  const sub = section.sub ? subLabel[section.sub] : null

  return (
    <section id={section.id} className="scroll-mt-28">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="font-display text-2xl sm:text-3xl text-sea-900">{section.name}</h2>
            {sub && (
              <span className={`text-xs font-semibold font-body px-2 py-0.5 rounded-full border ${sub.color}`}>
                {sub.label}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Dish list */}
      <div className="flex flex-col gap-3">
        {section.dishes.map(dish => (
          <MenuItem key={dish.id} dish={dish} onClick={onDishClick} />
        ))}
      </div>
    </section>
  )
}