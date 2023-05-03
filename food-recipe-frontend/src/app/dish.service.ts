import { Injectable } from '@angular/core';
//HttpClient is a built-in Angular service for making HTTP requests. 
//It simplifies the process of communicating with remote servers, 
//making it easier to work with RESTful APIs.
import { HttpClient } from '@angular/common/http';
//rxjs (Reactive Extensions for JavaScript) is a library for reactive programming using Observables, 
//which are used to represent asynchronous data streams. 
//In Angular applications, Observables are commonly used for working with asynchronous data returned by HTTP requests, 
//allowing you to chain operations, handle errors, and subscribe to the results.
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//The class is responsible for communicating with a backend API to calculate the recipe based on selected dishes
//The export keyword makes the class available to other modules in the application that may need to import it.
export class DishService {
  //This value represents the base URL of the backend API that the DishService class will communicate with.
  private apiUrl = 'http://localhost:5001';

  // This is the constructor of the DishService class. 
  //It takes one parameter, http, of type HttpClient. 
  //The private keyword indicates that http is a private property of the class, 
  //and it will be automatically assigned to the class instance when the service is instantiated. 
  //The HttpClient instance will be used to make HTTP requests to the backend API.
  constructor(private http: HttpClient) {}

  //The purpose of this method is to send the selected dishes to the backend API and return the calculated recipe as an Observable.
  calculateRecipe(selectedDishes: any[]): Observable<any> {

    //This line uses the post() method of the HttpClient instance to send an HTTP POST request to the backend API. 
    //The URL of the API endpoint is constructed using the apiUrl property and the /calculate-recipe path. 
    //The selected dishes are sent as the payload of the request in an object with a single property dishes. 
    //The post() method returns an Observable of type any that represents the response from the API.
    return this.http.post<any>(`${this.apiUrl}/calculate-recipe`, { dishes: selectedDishes });
  }
}
