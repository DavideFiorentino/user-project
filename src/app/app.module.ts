import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersContainerComponent } from './features/users/users-container/users-container.component';
import { UsersTabBarComponent } from './features/users/users-tab-bar/users-tab-bar.component';
import { UsersCardViewComponent } from './features/users/users-card-view/users-card-view.component';
import { UsersListViewComponent } from './features/users/users-list-view/users-list-view.component';
import { UsersOrdersComponent } from './features/users/users-orders/users-orders.component';
import { UsersEditComponent } from './features/users/users-edit/users-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsersContainerComponent,
    UsersTabBarComponent,
    UsersCardViewComponent,
    UsersListViewComponent,
    UsersOrdersComponent,
    UsersEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
