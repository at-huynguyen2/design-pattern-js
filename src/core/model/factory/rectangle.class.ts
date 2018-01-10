import { Shape } from './shape.interface';
export default class Rectangle implements Shape {
  draw() {
    console.log('Rectangle');
  }
}
