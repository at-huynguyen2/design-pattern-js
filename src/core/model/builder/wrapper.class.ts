import  { Packing } from './packing.interface';

export default class Wrapper implements Packing {
  // @Override
  pack() {
    return 'wrapper';
  }
}