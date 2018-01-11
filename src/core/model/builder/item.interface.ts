import { Packing } from './packing.interface';
export interface Item {
  name:() => string;
  packing:() => Packing;
  price:() => number;
}