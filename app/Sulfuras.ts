import { Item } from '@/Item'

export class Sulfuras implements Item {
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
