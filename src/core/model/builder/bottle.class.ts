import { Packing } from './packing.interface';

export default class Bottle implements Packing {
  // @Override
  pack() {
    return 'Bottle';
  }
}