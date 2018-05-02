import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  @Input() orderNumber: string;
  @Output() showDetailEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  goBack() {
    this.showDetailEvent.emit("");
  }

}
