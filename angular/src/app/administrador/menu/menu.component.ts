import { Component, OnInit } from '@angular/core';
import {UserService} from '../../_services/user.service';
import {AuthenticationService} from '../../_services/authentication.service';
import {User} from '../../_model/User';
import {USER_TYPES} from '../../app.contants';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public user: User;
  public userTypes   = USER_TYPES;
  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.authenticationService.isLoggedIn()
      .then(isLoggedIn => {
        this.user = this.authenticationService.user;
      });
  }

}
