import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Order } from 'src/app/models/order';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, OnDestroy {
  private readonly ngUnsubscribe = new Subject<void>();
  constructor(private dataService: DataService) { }

  orders: Order[] = [];
  ngOnInit(): void {
    this.getAllOrders();
  }
  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  getAllOrders() {
    this.dataService.getAllOrders()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((res: any) => {
        this.orders = res;
      }, (error) => {
        alert("Error: " + error.message)
      })
  }

}
