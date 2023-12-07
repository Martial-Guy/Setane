import { Component } from '@angular/core';
import { AddCartService } from 'src/app/serivces/add-cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  price: number = 0;
  cartItems: any[];
  items: any[] = [];
  totalPrice!: number;
  constructor(private cartService: AddCartService) {
    this.cartItems = this.cartService.getItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }
rItem(item:any){
 this.cartService.removeItem(item);
}


incrementItem(item: any) {
  this.cartService.incrementItem(item);
}

decrementItem(item: any) {
  this.cartService.decrementItem(item);
}
getQuantity(item: any): number {
  return this.cartService.getQuantity(item);
}
total(){

}
}
