import { useState, useEffect, useRef, useCallback } from 'react'
import { menuSections, categories, type Dish } from './data/menu'
import HeroSection from './components/HeroSection'
import CategoryNav from './components/CategoryNav'
import MenuSection from './components/MenuSection'
import BeverageSection from './components/BeverageSection'
import DishModal from './components/DishModal'
import Footer from './components/Footer'

export default function App() {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null)
  const [activeCategory, setActiveCategory] = useState('antipasti')
  const observersRef = useRef<IntersectionObserver[]>([])

  // Track which category is visible via IntersectionObserver on section IDs
  const setupObservers = useCallback(() => {
    observersRef.current.forEach(obs => obs.disconnect())
    observersRef.current = []

    categories.forEach(cat => {
      cat.sectionIds.forEach(sectionId => {
        const el = document.getElementById(sectionId)
        if (!el) return
        const obs = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) setActiveCategory(cat.id)
          },
          { threshold: 0.25, rootMargin: '-100px 0px -50% 0px' }
        )
        obs.observe(el)
        observersRef.current.push(obs)
      })
    })
  }, [])

  useEffect(() => {
    // Give DOM time to render before setting up observers
    const t = setTimeout(setupObservers, 100)
    return () => {
      clearTimeout(t)
      observersRef.current.forEach(obs => obs.disconnect())
    }
  }, [setupObservers])

  // Close modal on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedDish(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const nonBeverageSections = menuSections.filter(s => s.categoryId !== 'bevande')

  return (
    <div className="min-h-screen bg-[#faf6ef]">
      <HeroSection />
      <CategoryNav activeCategory={activeCategory} onSelect={setActiveCategory} />

      <main className="max-w-2xl mx-auto px-4 py-6 flex flex-col gap-10">
        {nonBeverageSections.map((section, i) => {
          // Add category label when switching categories
          const prevSection = nonBeverageSections[i - 1]
          const isNewCategory = !prevSection || prevSection.categoryId !== section.categoryId
          const cat = categories.find(c => c.id === section.categoryId)

          return (
            <div key={section.id}>
              {isNewCategory && cat && (
                <div id={`cat-${section.categoryId}`} className="flex items-center gap-3 mb-6 scroll-mt-28">
                  <h2 className="font-display text-3xl sm:text-4xl text-sea-900">{cat.label}</h2>
                  <div className="flex-1 h-px bg-sand-200" />
                </div>
              )}
              <MenuSection section={section} onDishClick={setSelectedDish} />
            </div>
          )
        })}

        {/* Beverages */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="font-display text-3xl sm:text-4xl text-sea-900">Bevande</h2>
            <div className="flex-1 h-px bg-sand-200" />
          </div>
          <BeverageSection />
        </div>
      </main>

      <Footer />

      {/* Dish modal */}
      <DishModal dish={selectedDish} onClose={() => setSelectedDish(null)} />
    </div>
  )
}