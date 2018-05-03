import { IOrder } from './../interfaces/order.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderName'
})
export class OrderNamePipe implements PipeTransform {

  transform(orders: IOrder[], args: any): any {
    return orders.filter(order => (order.product.toLowerCase().indexOf(args.toLowerCase()) !== -1 || order.orderNumber.toLowerCase().indexOf(args.toLowerCase()) !== -1));
  }

}
