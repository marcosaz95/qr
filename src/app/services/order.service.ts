import { IOrder } from './../interfaces/order.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {

  private _orderList: IOrder[] = [];

  constructor() {
    const orderNumbers = ['FMKH1T0432', 'U2V6CTV6R1', 'SY3UKRLSMG', 'IDO7LWL2I5', 'L3ZUBOQVXZ', 'RIU1ERSPEP', '6BU3EV1D21', '09I352BROT', '40CYGEX3Q1', 'X6XQSMQJGM'];
    for (let i = 0; i < 10; i++) {
      this._orderList.push({
        orderNumber: orderNumbers[i],
        product: `Product ${i + 1}`,
        description: `Order Description ${i + 1}`
      })
    }
  }

  get orderList(): IOrder[] {
    return this._orderList;
  }
}
