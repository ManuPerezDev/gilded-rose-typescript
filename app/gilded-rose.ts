export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    const sulfuras = 'Sulfuras, Hand of Ragnaros';
    const agedBrie = 'Aged Brie';
    const backstagePasses = 'Backstage passes to a TAFKAL80ETC concert';

    for (let i = 0; i < this.items.length; i++) {
      const name = this.items[i].name
      const quality = this.items[i].quality
      const sellIn = this.items[i].sellIn


      if (name != agedBrie && name != backstagePasses) {
        if (quality > 0) {
          if (name != sulfuras) {
            this.items[i].quality = quality - 1
          }
        }
      } else {
        if (quality < 50) {
          this.items[i].quality = quality + 1
          if (name == backstagePasses) {
            if (sellIn < 11) {
              if (quality < 50) {
                this.items[i].quality = this.items[i].quality + 1
              }
            }
            if (sellIn < 6) {
              if (quality < 50) {
                this.items[i].quality = this.items[i].quality + 1
              }
            }
          }
        }
      }
      if (name != sulfuras) {
        this.items[i].sellIn = sellIn - 1;
      }
      if (sellIn < 0) {
        if (name != agedBrie) {
          if (name != backstagePasses) {
            if (this.items[i].quality > 0) {
              if (name != sulfuras) {
                this.items[i].quality = this.items[i].quality - 1
              }
            }
          } else {
            this.items[i].quality = quality - quality
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = quality + 1
          }
        }
      }
    }

    return this.items;
  }
}
