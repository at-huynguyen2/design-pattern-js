import Wrapper from './wrapper.class';
import Buger from './buger.class';

export default class ChickenBuger implements Buger {
  // @Override
  packing() {
    return new Wrapper();
  }

  // @Override
  name() {
    return 'Chicken Bugger';
  }

  // @Override
  price() {
    return 20;
  }

}