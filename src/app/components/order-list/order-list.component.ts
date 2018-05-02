import { IOrder } from './../../interfaces/order.interface';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orderList: IOrder[];
  @Output() showDetailEvent = new EventEmitter<string>();

  constructor(private _qrService: OrderService) {
    this.orderList = _qrService.orderList;
  }

  ngOnInit() {
  }

  showDetail(orderNumber) {
    this.showDetailEvent.emit(orderNumber);
  }

}
