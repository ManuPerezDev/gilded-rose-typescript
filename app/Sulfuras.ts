import { Item2 } from '@/Item2'
import { Item } from '@/GildedRose'

export class Sulfuras implements Item2 {
  name: string
  quality: number

  constructor (public sellIn: number) {
    this.name = 'Sulfuras, Hand of Ragnaros'
    this.quality = 80
  }

  updateQuality (): Item {
    return this
  }
}
