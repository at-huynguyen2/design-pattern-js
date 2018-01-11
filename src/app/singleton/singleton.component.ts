import { Component, OnInit } from '@angular/core';
import SingleObject from '../../core/model/singleton/single-object.class';

@Component({
  selector: 'app-singleton',
  templateUrl: './singleton.component.html',
  styleUrls: ['./singleton.component.css']
})
export class SingletonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Constructor of class 'SingleObject' is private and only accessible within the class declaration.
    // const object = new SingleObject();
    SingleObject.setObjectText('Hello word!');
    SingleObject.getInstance();
    SingleObject.showMessage();
    console.log(SingleObject.getObjectText());
  }

}
