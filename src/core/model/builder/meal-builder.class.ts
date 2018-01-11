import Meal from './meal.class';
import VegBuger from './veg-buger.class';
import ChickenBuger from './chicken-buger.class';
import Coke from './coke.class';
import Pessi from './pessi.class';


export default class MealBuilder {
  public prepareVegMeal() {
    const meal = new Meal();
    meal.addItem(new VegBuger());
    meal.addItem(new Coke());
    return meal;
  }

  public prepareNonVegMeal() {
    const meal = new Meal();
    meal.addItem(new ChickenBuger());
    meal.addItem(new Pessi());
    return meal;
  }

}