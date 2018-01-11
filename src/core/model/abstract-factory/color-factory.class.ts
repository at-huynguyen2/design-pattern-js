import AbstractFactory from './abstract-factory.class';
import Red from './red.class';
import Green from './green.class';
export default class ColorFactory extends AbstractFactory {
  // @Override
  getColor(colorType: string) {
    switch (colorType) {
      case 'Red':
        return new Red();
      case 'Green':
        return new Green();
      default:
        return null;
    }
  }

  // @Override
  getShape(colorType: string) {
    return null;
  }
}