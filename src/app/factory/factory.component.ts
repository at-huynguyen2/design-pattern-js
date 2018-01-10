import { Component, OnInit } from '@angular/core';
import { Shape } from '../../core/model/factory/shape.interface';
import ShapeFatory from '../../core/model/factory/shape.factory.class';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css']
})
export class FactoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const shapeFactory = new ShapeFatory();
    const shape1 = shapeFactory.getShape('Rectangle');
    shape1.draw();
    const shape2 = shapeFactory.getShape('Square');
    shape2.draw();
  }

}
