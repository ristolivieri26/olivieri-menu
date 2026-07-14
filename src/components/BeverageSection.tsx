import { drinkGroups } from '../data/menu'

export default function BeverageSection() {
  return (
    <section id="bevande" className="scroll-mt-28">
      <h2 className="font-display text-2xl sm:text-3xl text-sea-900 mb-4">Bevande</h2>

      <div className="flex flex-col gap-6">
        {drinkGroups.map((group, gi) => (
          <div key={gi} className="bg-white rounded-2xl border border-sand-100 overflow-hidden shadow-sm">
            <div className="px-4 py-2.5 bg-sea-900">
              <h3 className="font-display text-sm text-sand tracking-widest uppercase">
                {group.title}
              </h3>
            </div>
            <div className="divide-y divide-sand-100">
              {group.items.map((item, i) => (
                <div key={i} className="flex items-center justify-between px-4 py-3 gap-4">
                  <div>
                    <p className="font-body text-sm text-sea-900 font-medium">{item.name}</p>
                    {item.nameEn && (
                      <p className="font-body text-xs text-sea-400 italic">{item.nameEn}</p>
                    )}
                  </div>
                  <span className="font-display text-base text-terra font-semibold whitespace-nowrap flex-shrink-0">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}