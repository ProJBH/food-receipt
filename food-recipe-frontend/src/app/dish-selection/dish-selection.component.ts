import { Component } from '@angular/core';
import { DishService } from '../dish.service';

@Component({
  selector: 'app-dish-selection',
  templateUrl: './dish-selection.component.html',
  styleUrls: ['./dish-selection.component.css']
})
export class DishSelectionComponent {
  dishes = [
    { name: 'Dish 1', price: 10, selected: false },
    { name: 'Dish 2', price: 15, selected: false },
    { name: 'Dish 3', price: 12, selected: false },
  ];

  //This is the constructor for the Angular component class. 
  //It takes one parameter, dishService, with a type of DishService. 
  //The private keyword indicates that dishService is a private property of the class, 
  //and it will be automatically assigned to the class instance when the component is instantiated. 
  //This is known as parameter property syntax in TypeScript.
  constructor(private dishService: DishService) {}

  submitOrder() {
    //This line filters the dishes array to create a new array called selectedDishes, 
    //containing only the dishes with the selected property set to true. 
    //This is done using the Array.prototype.filter() method.
    const selectedDishes = this.dishes.filter((dish) => dish.selected);
    //The subscribe() method is called on the observable to listen for the data returned from the backend. 
    //The callback function inside the subscribe() method takes one parameter, recipe, with a specified type.
    this.dishService.calculateRecipe(selectedDishes).subscribe((recipe: { totalAmount: number, detailedRecipe: Array<{ name: string, unitPrice: number }> }) => {
      let message = `Total amount: $${recipe.totalAmount}\n\nDetailed Recipe:\n`;
  
      recipe.detailedRecipe.forEach((item: { name: string, unitPrice: number }) => {
        message += `${item.name} - $${item.unitPrice}\n`;
      });
  
      window.alert(message);
    });
  }
}
