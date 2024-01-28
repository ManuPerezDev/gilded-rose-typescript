import { Item } from '@/GildedRose'

export interface Item2 {
  name: string
  sellIn: number
  quality: number

  updateQuality(): Item
}
