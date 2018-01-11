import { Component, OnInit } from '@angular/core';
import MealBuilder from './../../core/model/builder/meal-builder.class';
import Meal from './../../core/model/builder/meal.class';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {

  constructor(
    private form: FormBuilder
  ) { }

  ngOnInit() {
    const mealBuilder = new MealBuilder();
    const vegMeal = mealBuilder.prepareVegMeal();
    console.log("***Veg meal***");
    vegMeal.showItem();
    const nonVegMeal = mealBuilder.prepareNonVegMeal();
    console.log("***Non veg meal***");
    nonVegMeal.showItem();
  }

}
