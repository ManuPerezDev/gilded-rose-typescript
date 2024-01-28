import { Item } from '@/Item'

export class GildedRose {
  items: Array<Item>

  constructor (items = [] as Array<Item>) {
    this.items = items
  }

  updateQuality () {
    const sulfuras = 'Sulfuras, Hand of Ragnaros'
    const agedBrie = 'Aged Brie'
    const backstagePasses = 'Backstage passes to a TAFKAL80ETC concert'

    const items: Item[] = []

    for (let i = 0; i < this.items.length; i++) {
      const name = this.items[i].name

      if (name === sulfuras) {
        const updatedSulfuras = this.items[i].updateQuality()
        items.push(updatedSulfuras)
      }

      if (name === backstagePasses) {
        const updatedBackstagePasses = this.items[i].updateQuality()
        items.push(updatedBackstagePasses)
      }

      if (name === agedBrie) {
        const updatedAgedBrie = this.items[i].updateQuality()
        items.push(updatedAgedBrie)
      }

      if (name !== agedBrie && name !== backstagePasses) {
        const regularItemUpdated = this.items[i].updateQuality()
        items.push(regularItemUpdated)
      }
    }

    return [...items, ...this.items]
  }
}
