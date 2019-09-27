import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserContentComponent } from './user-content/user-content.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [
    UserContentComponent,
    UserListComponent, UserCreateComponent, UserEditComponent],
  imports: [
    CommonModule,
    UsersRoutingModule

  ]
})
export class UsersModule { }
