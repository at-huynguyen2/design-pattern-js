import { Color } from './color.interface';

export default class Green implements Color {
  fill() {
    console.log('Inside Green::fill() method.');
  }
}