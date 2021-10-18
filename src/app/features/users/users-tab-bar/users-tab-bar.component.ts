import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'user-prj-users-tab-bar',
  templateUrl: './users-tab-bar.component.html',
  styleUrls: ['./users-tab-bar.component.scss']
})
export class UsersTabBarComponent implements OnInit {
  @Input() actualView = true;
  @Output() toggleCardView = new EventEmitter<boolean>();
  @Output() showUserModal = new EventEmitter<void>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
