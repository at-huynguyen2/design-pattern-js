import Bottle from './bottle.class';
import ColdDrink from './cold-drink.class';

export default class Pessi implements ColdDrink {
  // @Override
  packing() {
    return new Bottle();
  }

  // @Override
  name() {
    return 'Pessi';
  }

  // @Override
  price() {
    return 11;
  }
}