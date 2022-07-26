import { Component, OnInit } from '@angular/core';
import { DonutsServiceService } from 'src/app/donuts-service.service';
import { DonutDetails } from 'src/app/interfaces/donuts-api-model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: DonutDetails [] = [];
  totalCalories: number = 0;
  totalPrice: number = 0;

    constructor(private donutsServiceService: DonutsServiceService ) { }

  ngOnInit(): void {
    this.cart = this.donutsServiceService.getCart();
    this.cart.forEach(cart => {
      this.totalCalories += cart.calories;
      this.totalPrice += cart.price;
    });

  }

  removeFromCart(cart: DonutDetails) {
    this.donutsServiceService.removeFromCart(cart.id);
  }


}
