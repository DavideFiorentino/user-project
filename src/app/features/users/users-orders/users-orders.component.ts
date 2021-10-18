import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser, User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'user-prj-users-orders',
  templateUrl: './users-orders.component.html',
  styleUrls: ['./users-orders.component.scss']
})
export class UsersOrdersComponent implements OnInit {
  @Input() user: User = User.Build({} as IUser);
  @Output() closeModal = new EventEmitter<void>();
  
  constructor() { }

  ngOnInit(): void {
  }

  get total(): number {
    return this.user.orders
      .map(order => order.product.price * order.quantity)
      .reduce((acc, curr) => acc + curr, 0);
  }
}
