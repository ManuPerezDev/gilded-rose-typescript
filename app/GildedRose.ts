import { Item } from '@/Item'

export class GildedRose {
  constructor (private items: Array<Item>) {
  }

  updateQuality () {
    const updatedItems: Item[] = []

    for (const item of this.items) {
      const updatedItem = item.updateQuality()
      updatedItems.push(updatedItem)
    }

    return updatedItems
  }
}
