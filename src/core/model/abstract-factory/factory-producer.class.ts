import AbstractFactory from './abstract-factory.class';
import ShapeFactory from './shape-factory.class';
import ColorFactory from './color-factory.class';

export default class FactoryProducer {
  public static getFactory(choice: string) {
    switch (choice) {
      case 'Shape':
        return new ShapeFactory();
      case 'Color':
        return new ColorFactory();
      default:
        break;
    }
  }
}