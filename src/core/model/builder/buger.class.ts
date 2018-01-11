import { Packing } from './packing.interface'; 
import { Item } from './item.interface'; 
import Wrapper from './wrapper.class'; 
export default abstract class Buger implements Item {
  // pack: Packing;
  // name: 
  packing() {
    return new Wrapper();
  }
  public abstract price: () => number;
  public abstract name: () => string; //???
} 