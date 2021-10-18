import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser, User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'user-prj-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent implements OnInit {
  @Input() user: User = User.Build({} as IUser);
  @Output() closeUserModal = new EventEmitter<void>();
  @Output() savedUser = new EventEmitter<IUser>();

  public userForm!: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: [this.user.name, [Validators.required]],
      mail: [this.user.mail, [Validators.required, Validators.email]],
      location: this.fb.group({
        address: [this.user.location.address, [Validators.required]],
        city: [this.user.location.city, [Validators.required]]
      })
    })
  }

  public saveUser(): void {
    this.savedUser.emit({ ...this.user, ...this.userForm.value}  as IUser);
  }

public get location(): FormGroup {
  return this.userForm.get('location') as FormGroup;
}
}
