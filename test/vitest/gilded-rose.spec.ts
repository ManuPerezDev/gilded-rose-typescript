import { GildedRose, Item } from '@/gilded-rose'
import { describe } from 'vitest'

describe('Gilded Rose', () => {
  describe('Default', () => {
    it('should degrade sell in and quality', () => {
      const gildedRose = new GildedRose([new Item('Default', 1, 1)])

      const items = gildedRose.updateQuality()

      expect(items[0].sellIn).toBe(0)
      expect(items[0].quality).toBe(0)
    })

    it('should degrade twice as fast if sell in is negative', () => {
      const gildedRose = new GildedRose([new Item('Default', -1, 2)])

      const items = gildedRose.updateQuality()

      expect(items[0].sellIn).toBe(-2)
      expect(items[0].quality).toBe(0)
    })

    it('should not degrade quality below 0', () => {
      const gildedRose = new GildedRose([new Item('Default', -1, 1)])

      const items = gildedRose.updateQuality()

      expect(items[0].sellIn).toBe(-2)
      expect(items[0].quality).toBe(0)
    })
  })

  describe('Aged Brie', () => {
    it('should increase quality', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 1, 1)])

      const items = gildedRose.updateQuality()

      expect(items[0].sellIn).toBe(0)
      expect(items[0].quality).toBe(2)
    })

    it('should not increase beyond 50 quality', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 1, 50)])

      const items = gildedRose.updateQuality()

      expect(items[0].sellIn).toBe(0)
      expect(items[0].quality).toBe(50)
    })
  })

  describe('Sulfuras', () => {
    it('should not decrease quality', () => {
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 1, 80)])

      const items = gildedRose.updateQuality()

      expect(items[0].sellIn).toBe(1)
      expect(items[0].quality).toBe(80)
    })
  })

  describe('Backstage passes to a TAFKAL80ETC concert', () => {
    it('increase quality by 3 when is below 5 days to sell in', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 1, 1)])

      const items = gildedRose.updateQuality()

      expect(items[0].sellIn).toBe(0)
      expect(items[0].quality).toBe(4)
    })

    it('increase quality by 2 when is between 5 and 10 days to sell int', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 6, 1)])

      const items = gildedRose.updateQuality()

      expect(items[0].sellIn).toBe(5)
      expect(items[0].quality).toBe(3)
    })

    it('lose all quality when it reaches concert day', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10)])

      const items = gildedRose.updateQuality()

      expect(items[0].sellIn).toBe(-1)
      expect(items[0].quality).toBe(0)
    })
  })
})
