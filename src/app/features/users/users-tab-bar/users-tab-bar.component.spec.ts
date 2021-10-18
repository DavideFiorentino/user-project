import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTabBarComponent } from './users-tab-bar.component';

describe('UsersTabBarComponent', () => {
  let component: UsersTabBarComponent;
  let fixture: ComponentFixture<UsersTabBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersTabBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersTabBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
