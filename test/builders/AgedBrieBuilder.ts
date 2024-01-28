import { AgedBrie } from '@/AgedBrie'

export class AgedBrieBuilder {
  private sellIn: number
  private quality: number

  constructor () {
    this.sellIn = 0
    this.quality = 0
  }

  withSellIn (sellIn) {
    this.sellIn = sellIn
    return this
  }

  withQuality (quality) {
    this.quality = quality
    return this
  }

  build () {
    return new AgedBrie(this.sellIn, this.quality)
  }
}
