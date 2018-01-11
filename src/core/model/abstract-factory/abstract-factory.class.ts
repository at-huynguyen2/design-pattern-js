import { Shape } from './shape.interface';
import { Color } from './color.interface';

export default abstract class AbstractFactory {
  abstract getShape(color: string): Shape;
  abstract getColor(shape: string): Color;
}