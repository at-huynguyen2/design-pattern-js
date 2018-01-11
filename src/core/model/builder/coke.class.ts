import ColdDrink from './cold-drink.class';
import Bottle from './bottle.class';

export default class Coke implements ColdDrink {
  // @Override
  packing() {
    return new Bottle();
  }

  // @Override
  name() {
    return 'Coke';
  }

  // @Override
  price() {
    return 12;
  }

}