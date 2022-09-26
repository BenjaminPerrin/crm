import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public collection!: Order[];
  public test = 'je test le Property binding';
  constructor(private orderservice: OrdersService) {
    this.orderservice.collection$.subscribe((data) => {
      this.collection = data;
    });
    console.log();
  }

  ngOnInit(): void {}
}
