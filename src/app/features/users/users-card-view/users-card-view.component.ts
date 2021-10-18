import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser, User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'user-prj-users-card-view',
  templateUrl: './users-card-view.component.html',
  styleUrls: ['./users-card-view.component.scss']
})
export class UsersCardViewComponent implements OnInit {
@Input() user: User = User.Build({} as IUser);
@Output() selectedUser = new EventEmitter<User>();
@Output() deleteUser = new EventEmitter<string>();
@Output() editUser = new EventEmitter<User  >();

  constructor() { }

  ngOnInit(): void {
  }

}
