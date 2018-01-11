import Buger from './buger.class';
import Wrapper from './wrapper.class'; 

export default class VegBuger implements Buger {
  // @Override
  packing() {
    return new Wrapper();
  }

  // @Override
  name() {
    return 'VegBuger';
  }

  // @Override
  price() {
    return 10;
  }

  // name: () => string;
  // price:() => number;
}