import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddCartService {
  items: any[] = [];
  quantities: Map<any, number> = new Map<any, number>();
  constructor() { }
  addItem(item: any) {
    this.items.push(item);
    this.quantities.set(item, 0)
  }
  getTotalPrice(): number {
    let total = 0;
    for (const item of this.items) {
      const quantity = this.getQuantity(item);
      total += item.price * quantity;
    }
    return total;
  }
  removeItem(item: any) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }
  
  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
  }
  getQuantity(item: any): number {
    return this.quantities.get(item) || 0; // Return the item's quantity from the map or 0 if it doesn't exist
  }
  incrementItem(item: any) {
    const currentQuantity = this.getQuantity(item);
    this.quantities.set(item, currentQuantity + 1);
  }

  decrementItem(item: any) {
    const currentQuantity = this.getQuantity(item);
    if (currentQuantity > 0) {
      this.quantities.set(item, currentQuantity - 1);
    }
  }

}
