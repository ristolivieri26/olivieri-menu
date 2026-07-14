import antipastiTerraRaw from './sections/antipasti-terra.json'
import antipastiMareRaw from './sections/antipasti-mare.json'
import primiTerraRaw from './sections/primi-terra.json'
import primiMareRaw from './sections/primi-mare.json'
import secondiTerraRaw from './sections/secondi-terra.json'
import secondiMareRaw from './sections/secondi-mare.json'
import contorniRaw from './sections/contorni.json'
import pizzaRaw from './sections/pizza.json'
import dolciRaw from './sections/dolci.json'
import bambiniRaw from './sections/bambini.json'
import drinksRaw from './drinks.json'

export interface Dish {
  id: string
  name: string
  nameEn?: string
  description?: string
  price: string
  allergens: number[]
  frozen?: boolean
  photo?: string
}

export interface MenuSection {
  id: string
  categoryId: string
  name: string
  sub?: 'terra' | 'mare'
  dishes: Dish[]
}

export interface Category {
  id: string
  label: string
  sectionIds: string[]
}

export interface DrinkItem {
  name: string
  nameEn?: string
  price: string
}

export interface DrinkGroup {
  title: string
  items: DrinkItem[]
}

export const allergenNames: Record<number, string> = {
  1: 'Frutta a guscio',
  2: 'Arachide',
  3: 'Lupino',
  4: 'Latte e derivati',
  5: 'Uova',
  6: 'Pesce',
  7: 'Molluschi',
  8: 'Crostacei',
  9: 'Soia',
  10: 'Glutine',
  11: 'Sesamo',
  12: 'Sedano',
  13: 'Senape',
  14: 'Anidride solforosa',
}

export const categories: Category[] = [
  { id: 'antipasti', label: 'Antipasti', sectionIds: ['antipasti-terra', 'antipasti-mare'] },
  { id: 'primi', label: 'Primi Piatti', sectionIds: ['primi-terra', 'primi-mare'] },
  { id: 'secondi', label: 'Secondi', sectionIds: ['secondi-terra', 'secondi-mare'] },
  { id: 'contorni', label: 'Contorni', sectionIds: ['contorni'] },
  { id: 'pizza', label: 'Pizza', sectionIds: ['pizza'] },
  { id: 'dolci', label: 'Dolci', sectionIds: ['dolci'] },
  { id: 'bevande', label: 'Bevande', sectionIds: ['bevande'] },
  { id: 'bambini', label: 'Bambini', sectionIds: ['bambini'] },
]

type RawDish = {
  name: string
  nameEn?: string
  description?: string
  price: string
  allergens: number[]
  frozen?: boolean
}

function buildDishes(sectionId: string, raw: { dishes: RawDish[] }): Dish[] {
  return raw.dishes.map((d, i) => ({
    ...d,
    id: `${sectionId}-${i}`,
    allergens: (d.allergens ?? []).map(Number),
    frozen: d.frozen ?? false,
  }))
}

export const menuSections: MenuSection[] = [
  {
    id: 'antipasti-terra',
    categoryId: 'antipasti',
    name: 'Antipasti',
    sub: 'terra',
    dishes: buildDishes('antipasti-terra', antipastiTerraRaw),
  },
  {
    id: 'antipasti-mare',
    categoryId: 'antipasti',
    name: 'Antipasti',
    sub: 'mare',
    dishes: buildDishes('antipasti-mare', antipastiMareRaw),
  },
  {
    id: 'primi-terra',
    categoryId: 'primi',
    name: 'Primi Piatti',
    sub: 'terra',
    dishes: buildDishes('primi-terra', primiTerraRaw),
  },
  {
    id: 'primi-mare',
    categoryId: 'primi',
    name: 'Primi Piatti',
    sub: 'mare',
    dishes: buildDishes('primi-mare', primiMareRaw),
  },
  {
    id: 'secondi-terra',
    categoryId: 'secondi',
    name: 'Secondi Piatti',
    sub: 'terra',
    dishes: buildDishes('secondi-terra', secondiTerraRaw),
  },
  {
    id: 'secondi-mare',
    categoryId: 'secondi',
    name: 'Secondi Piatti',
    sub: 'mare',
    dishes: buildDishes('secondi-mare', secondiMareRaw),
  },
  {
    id: 'contorni',
    categoryId: 'contorni',
    name: 'Contorni',
    dishes: buildDishes('contorni', contorniRaw),
  },
  {
    id: 'pizza',
    categoryId: 'pizza',
    name: 'Pizza',
    dishes: buildDishes('pizza', pizzaRaw),
  },
  {
    id: 'dolci',
    categoryId: 'dolci',
    name: 'Dolci',
    dishes: buildDishes('dolci', dolciRaw),
  },
  {
    id: 'bambini',
    categoryId: 'bambini',
    name: 'Menù Bambini',
    dishes: buildDishes('bambini', bambiniRaw),
  },
  {
    id: 'bevande',
    categoryId: 'bevande',
    name: 'Bevande',
    dishes: [],
  },
]

export const drinkGroups: DrinkGroup[] = drinksRaw.groups