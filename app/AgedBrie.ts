import { Item2 } from '@/Item2'
import { Item } from '@/GildedRose'

export class AgedBrie implements Item2 {
  name: string

  constructor (public sellIn: number, public quality: number) {
    this.name = 'Aged Brie'
  }

  updateQuality (): Item {
    if (this.quality < 50 && this.sellIn > 0) {
      this.quality = this.quality + 1
    } else if (this.quality < 50 && this.sellIn < 0) {
      this.quality = this.quality + 2
    }
    this.sellIn = this.sellIn - 1
    return this
  }
}
