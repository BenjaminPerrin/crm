import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
// import { NgForm } from '@angular/forms';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public collection!: Order[];
  public title: string = 'je test le Property binding';
  public link: string = 'add-orders';
  public label: string = 'click';

  public headers: string[];
  constructor(private orderservice: OrdersService) {
    this.headers = [
      'Type',
      'Client',
      'Duree',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'Etat',
    ];
    this.orderservice.collection$.subscribe((data) => {
      this.collection = data;
    });
  }

  ngOnInit(): void {}

  public changeTitle(): void {
    this.title = 'title changed';
  }

  // onSubmit(form: NgForm) {
  //   if (form.valid) {
  //     this.link = form.value.route;
  //   }
  // }
}
