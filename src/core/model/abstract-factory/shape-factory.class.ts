// import { Shape } from './shape.interface';
import Rectangle from './rectangle.class';
import Square from './square.class';
import AbstractFactory from './abstract-factory.class';

export default class ShapeFatory extends AbstractFactory {
  // @Override
  public getShape(shapeType: string) {
    switch (shapeType) {
      case 'Rectangle':
        return new Rectangle();
      case 'Square': 
        return new Square();
      default:
        return null;
    }
  }

  // @Override
  public getColor(colorType: string){
    return null;
  }
}