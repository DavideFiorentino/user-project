import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/shared/models/user.model'
@Component({
  selector: 'user-prj-users-list-view',
  templateUrl: './users-list-view.component.html',
  styleUrls: ['./users-list-view.component.scss']
})
export class UsersListViewComponent implements OnInit {
  @Input() users: User[] = [];
  @Output() selectedUser = new EventEmitter<User>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
