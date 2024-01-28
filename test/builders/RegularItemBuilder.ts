import { RegularItem } from '@/RegularItem'

export class RegularItemBuilder {
  private name: string
  private sellIn: number
  private quality: number

  constructor () {
    this.name = 'foo'
    this.sellIn = 0
    this.quality = 0
  }

  withName (name: string): RegularItemBuilder {
    this.name = name
    return this
  }

  withSellIn (sellIn: number): RegularItemBuilder {
    this.sellIn = sellIn
    return this
  }

  withQuality (quality: number): RegularItemBuilder {
    this.quality = quality
    return this
  }

  build (): RegularItem {
    return new RegularItem(this.name, this.sellIn, this.quality)
  }
}
