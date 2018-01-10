// import { Shape } from './shape.interface';
import Rectangle from './rectangle.class';
import Square from './square.class';

export default class ShapeFatory {
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
}