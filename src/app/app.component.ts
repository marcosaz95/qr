import { OrderListComponent } from './components/order-list/order-list.component';
import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { QrScannerComponent } from 'angular2-qrscanner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentOrder: string = "";
  isOpenList: boolean = false;
  isOpenQRSearch: boolean = false;
  qrFiltered: string = "";
  @ViewChild(OrderListComponent) orderListComponent: OrderListComponent;

  constructor(private renderer: Renderer2) {

  }

  ngOnInit() {
  }

  highlightOrderEvent(event) {
    this.isOpenQRSearch = false;
    this.isOpenList = true;
    this.qrFiltered = event;
  }
}
