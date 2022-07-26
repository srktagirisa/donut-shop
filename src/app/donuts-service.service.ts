import { Injectable } from '@angular/core';
import { DonutDetails } from './interfaces/donuts-api-model';

@Injectable({
  providedIn: 'root'
})
export class DonutsServiceService {

  private cart: DonutDetails [] = [];

  constructor() { }

  getCart(): DonutDetails[]{
    return this.cart;
  }

  addToCart(donut: DonutDetails) {
    donut.price = 1;
    this.cart.push(donut);
  }

  removeFromCart(id: number): void {
    const index = this.cart.findIndex((donut) => donut.id === id);
    if (index != 1)
    {
      this.cart.splice(index, 1);
    }
  }

  isInCart(id: number): boolean {
    return this.cart.some((donut) => donut.id === id);
  }
}
