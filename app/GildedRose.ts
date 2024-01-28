import { RegularItem } from '@/RegularItem'
import { Sulfuras } from '@/Sulfuras'
import { AgedBrie } from '@/AgedBrie'
import { BackstagePasses } from '@/BackstagePasses'

export class Item {
  name: string
  sellIn: number
  quality: number

  constructor (name: string, sellIn: number, quality: number) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }
}

export class GildedRose {
  items: Array<Item>

  constructor (items = [] as Array<Item>) {
    this.items = items
  }

  updateQuality () {
    const sulfuras = 'Sulfuras, Hand of Ragnaros'
    const agedBrie = 'Aged Brie'
    const backstagePasses = 'Backstage passes to a TAFKAL80ETC concert'

    for (let i = 0; i < this.items.length; i++) {
      const name = this.items[i].name
      const quality = this.items[i].quality
      const sellIn = this.items[i].sellIn

      if (name === sulfuras) {
        const updatedSulfuras = new Sulfuras(sellIn)
        this.items = [updatedSulfuras]
        continue
      }

      if (name === backstagePasses) {
        const updatedBackstagePasses = new BackstagePasses(sellIn, quality).updateQuality()
        this.items = [updatedBackstagePasses]
        continue
      }

      if (name === agedBrie) {
        const updatedAgedBrie = new AgedBrie(sellIn, quality).updateQuality()
        this.items = [updatedAgedBrie]
        continue
      }

      if (name !== agedBrie && name !== backstagePasses) {
        const regularItemUpdated = new RegularItem(name, sellIn, quality).updateQuality()
        this.items = [regularItemUpdated]
      }
    }

    return this.items
  }
}
