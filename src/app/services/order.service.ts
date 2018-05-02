import { IOrder } from './../interfaces/order.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {

  private _orderList: IOrder[] = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      this._orderList.push({
        orderNumber: this.generateRandomValue(),
        product: `product ${i + 1}`,
        description: `description ${i + 1}`
      })
    }
  }

  get orderList(): IOrder[] {
    return this._orderList;
  }

  generateRandomValue(): string {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (let i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

}
