import { IOrder } from './../interfaces/order.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderName'
})
export class OrderNamePipe implements PipeTransform {

  transform(orders: IOrder[], name: string, orderNumber: string): any {
    if (orderNumber) {
      return orders.filter(order => order.orderNumber.toLowerCase().indexOf(orderNumber.toLowerCase()) !== -1);
    } else {
      return orders.filter(order => order.product.toLowerCase().indexOf(name.toLowerCase()) !== -1);
    }
  }

}
