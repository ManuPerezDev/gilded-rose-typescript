import { Item2 } from '@/Item2'
import { Item } from '@/GildedRose'

export class RegularItem implements Item2 {
  constructor (public name: string, public sellIn: number, public quality: number) {
  }

  updateQuality (): Item {
    if (this.quality > 0) {
      this.quality = this.quality - 1
    }
    this.sellIn = this.sellIn - 1

    if (this.sellIn < 0 && this.quality > 0) {
      this.quality = this.quality - 1
    }
    return this
  }
}
