import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users: any[] = [];
  
  constructor(private UserService: UsersService) { }

  ngOnInit() {
    this.UserService.listar().toPromise().then( data => {
      console.log('data', data);
      this.users = data.users;
      
    }).catch(error => {
      console.log('error', error);
    });
  }

}
