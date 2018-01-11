import { Item } from './item.interface';

export default class Meal {
  private items: Item[] = new Array();
  public addItem(item: Item) {
    this.items.push(item);
  }

  public getCost() {
    let cost = 0;
    this.items.map(item => cost+=item.price());
    return cost;
  }

  public showItem() {
    this.items.map(item => {
      console.log('Item: ', item.name());
      console.log('* packing: ', item.packing());
      console.log('* price: ', item.price());
      console.log('-----------------------');
    });
  }
}