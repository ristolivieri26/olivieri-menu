import { useEffect, useRef, useState } from 'react'
import { categories } from '../data/menu'

interface Props {
  activeCategory: string
  onSelect: (id: string) => void
}

export default function CategoryNav({ activeCategory, onSelect }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [stuck, setStuck] = useState(false)

  useEffect(() => {
    const sentinel = document.getElementById('nav-sentinel')
    if (!sentinel) return
    const obs = new IntersectionObserver(
      ([entry]) => setStuck(!entry.isIntersecting),
      { threshold: 0, rootMargin: '-1px 0px 0px 0px' }
    )
    obs.observe(sentinel)
    return () => obs.disconnect()
  }, [])

  const handleSelect = (id: string) => {
    onSelect(id)
    const cat = categories.find(c => c.id === id)
    if (!cat) return
    const firstSection = cat.sectionIds[0]
    const el = document.getElementById(firstSection)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })

    // scroll tab into view
    const btn = scrollRef.current?.querySelector(`[data-cat="${id}"]`) as HTMLElement | null
    btn?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }

  return (
    <div
      className={`sticky top-0 z-30 transition-shadow duration-200 ${
        stuck ? 'shadow-md' : ''
      }`}
    >
      <div id="nav-sentinel" className="absolute -top-px h-px w-full pointer-events-none" />
      <div className="bg-[#faf6ef]/95 backdrop-blur-sm border-b border-sand-200">
        <div
          ref={scrollRef}
          className="flex gap-1 px-4 py-2.5 overflow-x-auto hide-scrollbar"
        >
          {categories.map(cat => {
            const isActive = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                data-cat={cat.id}
                onClick={() => handleSelect(cat.id)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-body font-medium transition-all duration-150 ${
                  isActive
                    ? 'bg-sea-900 text-sand shadow-sm'
                    : 'bg-white text-sea-700 border border-sand-200 hover:border-sand-300'
                }`}
              >
                <span>{cat.label}</span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}