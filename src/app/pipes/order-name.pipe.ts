import { IOrder } from './../interfaces/order.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderName'
})
export class OrderNamePipe implements PipeTransform {

  transform(orders: IOrder[], name: string): any {
    return orders.filter(order => (order.orderNumber.toLowerCase().indexOf(name.toLowerCase()) !== -1 || order.product.toLowerCase().indexOf(name.toLowerCase()) !== -1));
  }

}
