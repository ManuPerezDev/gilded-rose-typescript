import { GildedRose } from '@/GildedRose'
import { RegularItem } from '@/RegularItem'
import { AgedBrie } from '@/AgedBrie'
import { Sulfuras } from '@/Sulfuras'
import { BackstagePasses } from '@/BackstagePasses'

describe('Gilded Rose', () => {
  describe('Default', () => {
    it('should degrade sell in and quality', () => {
      const gildedRose = new GildedRose([new RegularItem('Regular', 1, 1)])

      const items = gildedRose.updateQuality()

      expect(items[0].sellIn).toBe(0)
      expect(items[0].quality).toBe(0)
    })

    it('should degrade twice as fast if sell in is negative', () => {
      const gildedRose = new GildedRose([new RegularItem('Regular', -1, 2)])

      const items = gildedRose.updateQuality()

      expect(items[0].sellIn).toBe(-2)
      expect(items[0].quality).toBe(0)
    })

    it('should not degrade quality below 0', () => {
      const gildedRose = new GildedRose([new RegularItem('Regular', -1, 1)])

      const items = gildedRose.updateQuality()

      expect(items[0].sellIn).toBe(-2)
      expect(items[0].quality).toBe(0)
    })
  })

  describe('Aged Brie', () => {
    it('should increase quality', () => {
      const gildedRose = new GildedRose([new AgedBrie(1, 1)])

      const items = gildedRose.updateQuality()

      expect(items[0].sellIn).toBe(0)
      expect(items[0].quality).toBe(2)
    })

    it('should not increase beyond 50 quality', () => {
      const gildedRose = new GildedRose([new AgedBrie(1, 50)])

      const items = gildedRose.updateQuality()

      expect(items[0].sellIn).toBe(0)
      expect(items[0].quality).toBe(50)
    })
  })

  describe('Sulfuras', () => {
    it('should not decrease quality', () => {
      const gildedRose = new GildedRose([new Sulfuras(1)])

      const items = gildedRose.updateQuality()

      expect(items[0].sellIn).toBe(1)
      expect(items[0].quality).toBe(80)
    })
  })

  describe('Backstage passes to a TAFKAL80ETC concert', () => {
    it('increase quality by 3 when is below 5 days to sell in', () => {
      const gildedRose = new GildedRose([new BackstagePasses(1, 1)])

      const items = gildedRose.updateQuality()

      expect(items[0].sellIn).toBe(0)
      expect(items[0].quality).toBe(4)
    })

    it('increase quality by 2 when is between 5 and 10 days to sell int', () => {
      const gildedRose = new GildedRose([new BackstagePasses(6, 1)])

      const items = gildedRose.updateQuality()

      expect(items[0].sellIn).toBe(5)
      expect(items[0].quality).toBe(3)
    })

    it('lose all quality when it reaches concert day', () => {
      const gildedRose = new GildedRose([new BackstagePasses(0, 10)])

      const items = gildedRose.updateQuality()

      expect(items[0].sellIn).toBe(-1)
      expect(items[0].quality).toBe(0)
    })
  })
})
