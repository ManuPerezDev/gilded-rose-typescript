import { Item } from '@/Item'

export class BackstagePasses implements Item {
  name: string

  constructor (public sellIn: number, public quality: number) {
    this.name = 'Backstage passes to a TAFKAL80ETC concert'
  }

  updateQuality (): Item {
    this.sellIn = this.sellIn - 1

    if (this.sellIn < 0) {
      this.quality = 0
      return this
    }

    if (this.quality < 50 && this.sellIn < 5) {
      this.quality = this.quality + 3
      return this
    }

    if (this.quality < 50 && this.sellIn < 11) {
      this.quality = this.quality + 2
      return this
    }
    return this
  }
}
