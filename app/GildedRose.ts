import { Item } from '@/Item'

export class GildedRose {
  items: Array<Item>

  constructor (items = [] as Array<Item>) {
    this.items = items
  }

  updateQuality () {
    const updatedItems: Item[] = []

    for (let i = 0; i < this.items.length; i++) {
      const updatedItem = this.items[i].updateQuality()
      updatedItems.push(updatedItem)
    }

    return updatedItems
  }
}
