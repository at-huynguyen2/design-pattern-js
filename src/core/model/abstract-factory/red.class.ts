// import { Color } from './color.interface';
import { Color } from './color.interface';

export default class Red implements Color {
  fill() {
    console.log('Inside Red::fill() method.');
  }
}