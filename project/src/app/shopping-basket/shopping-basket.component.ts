import { Component, OnInit } from '@angular/core';
import { ShoppingItem } from '../shopping-item';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.css']
})
export class ShoppingBasketComponent {
  items: ShoppingItem[] = [
    {desc: "Shirt", price: 1300},
    {desc: "Iphone", price: 80000},
    {desc: "Shoes", price: 800},
    {desc: "Iphone-Charger", price:2500},
    {desc: "Laptop", price:50000},
    {desc: "Washing Machine", price: 41000}
  ];
  
  total() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
  
  removeItem(item: ShoppingItem) {
    this.items = this.items.filter((i) => i !== item);
  }
}