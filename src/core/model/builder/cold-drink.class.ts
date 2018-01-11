import { Item } from './item.interface'; 
import Bottle from './bottle.class';
export default abstract class ColdDrink implements Item {
  packing() {
    return new Bottle();
  }
  abstract price: () => number;
  abstract name: () => string; 
}