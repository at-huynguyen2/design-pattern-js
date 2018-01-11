import { Component, OnInit } from '@angular/core';
import FactoryProducer from '../../core/model/abstract-factory/factory-producer.class';
import AbstractFactory from '../../core/model/abstract-factory/abstract-factory.class';

@Component({
  selector: 'app-abstract-factory',
  templateUrl: './abstract-factory.component.html',
  styleUrls: ['./abstract-factory.component.css']
})
export class AbstractFactoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Create shape factory which will create other shape objects.
    const shapeFactory = FactoryProducer.getFactory('Shape');
    
    const shape1 = shapeFactory.getShape('Rectangle');
    shape1.draw();

    const shape2 = shapeFactory.getShape('Square');
    shape2.draw();

    // Create color factory which will create other color objects.
    const colorFactory = FactoryProducer.getFactory('Color');

    const color1 = colorFactory.getColor('Red');
    color1.fill();

    const color2 = colorFactory.getColor('Green');
    color2.fill();
  }

}
