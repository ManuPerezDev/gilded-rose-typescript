import { GildedRose } from '@/GildedRose'
import { AgedBrie } from '@/AgedBrie'
import { expect } from 'vitest'
import { RegularItemBuilder } from './builders/RegularItemBuilder'
import { AgedBrieBuilder } from './builders/AgedBrieBuilder'
import { SulfurasBuilder } from './builders/SulfurasBuilder'
import { BackstagePassesBuilder } from './builders/BackstagePassesBuilder'

describe('Gilded Rose', () => {
  describe('Default', () => {
    it('should degrade sell in and quality', () => {
      const name = 'Regular'
      const items = [new RegularItemBuilder().withName(name).withQuality(1).withSellIn(1).build()]
      const gildedRose = new GildedRose(items)

      const updatedItems = gildedRose.updateQuality()

      const expectedItem = new RegularItemBuilder().withName(name).withQuality(0).withSellIn(0).build()
      expect(updatedItems[0]).toStrictEqual(expectedItem)
    })

    it('should degrade twice as fast if sell in is negative', () => {
      const name = 'Regular'
      const items = [new RegularItemBuilder().withName(name).withQuality(2).withSellIn(-1).build()]
      const gildedRose = new GildedRose(items)

      const updatedItems = gildedRose.updateQuality()

      const expectedItem = new RegularItemBuilder().withName(name).withQuality(0).withSellIn(-2).build()
      expect(updatedItems[0]).toStrictEqual(expectedItem)
    })

    it('should not degrade quality below 0', () => {
      const name = 'Regular'
      const items = [new RegularItemBuilder().withName(name).withQuality(1).withSellIn(-1).build()]
      const gildedRose = new GildedRose(items)

      const updatedItems = gildedRose.updateQuality()

      const expectedItem = new RegularItemBuilder().withName(name).withQuality(0).withSellIn(-2).build()
      expect(updatedItems[0]).toStrictEqual(expectedItem)
    })
  })

  describe('Aged Brie', () => {
    it('should increase quality', () => {
      const items = [new AgedBrie(1, 1)]
      const gildedRose = new GildedRose(items)

      const updatedItems = gildedRose.updateQuality()

      const expectedItem = new AgedBrieBuilder().withQuality(2).withSellIn(0).build()
      expect(updatedItems[0]).toStrictEqual(expectedItem)
    })

    it('should not increase beyond 50 quality', () => {
      const items = [new AgedBrie(1, 50)]
      const gildedRose = new GildedRose(items)

      const updatedItems = gildedRose.updateQuality()

      const expectedItem = new AgedBrieBuilder().withQuality(50).withSellIn(0).build()
      expect(updatedItems[0]).toStrictEqual(expectedItem)
    })
  })

  describe('Sulfuras', () => {
    it('should not decrease quality', () => {
      const gildedRose = new GildedRose([new SulfurasBuilder().withSellIn(1).build()])

      const items = gildedRose.updateQuality()

      expect(items[0]).toStrictEqual(new SulfurasBuilder().withSellIn(1).build())
    })
  })

  describe('Backstage passes to a TAFKAL80ETC concert', () => {
    it('increase quality by 3 when is below 5 days to sell in', () => {
      const items = [new BackstagePassesBuilder().withSellIn(1).withQuality(1).build()]
      const gildedRose = new GildedRose(items)

      const updatedItems = gildedRose.updateQuality()

      const expectedItem = new BackstagePassesBuilder().withSellIn(0).withQuality(4).build()
      expect(updatedItems[0]).toStrictEqual(expectedItem)
    })

    it('increase quality by 2 when is between 5 and 10 days to sell int', () => {
      const items = [new BackstagePassesBuilder().withSellIn(6).withQuality(1).build()]
      const gildedRose = new GildedRose(items)

      const updatedItems = gildedRose.updateQuality()

      const expectedItem = new BackstagePassesBuilder().withSellIn(5).withQuality(3).build()
      expect(updatedItems[0]).toStrictEqual(expectedItem)
    })

    it('lose all quality when it reaches concert day', () => {
      const items = [new BackstagePassesBuilder().withSellIn(0).withQuality(10).build()]
      const gildedRose = new GildedRose(items)

      const updatedItems = gildedRose.updateQuality()

      const expectedItem = new BackstagePassesBuilder().withSellIn(-1).withQuality(0).build()
      expect(updatedItems[0]).toStrictEqual(expectedItem)
    })
  })
})
