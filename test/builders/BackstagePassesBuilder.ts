import { BackstagePasses } from '@/BackstagePasses'

export class BackstagePassesBuilder {
  private sellIn: number
  private quality: number

  constructor () {
    this.sellIn = 0
    this.quality = 0
  }

  withSellIn (sellIn: number) {
    this.sellIn = sellIn
    return this
  }

  withQuality (quality: number) {
    this.quality = quality
    return this
  }

  build () {
    return new BackstagePasses(this.sellIn, this.quality)
  }
}
