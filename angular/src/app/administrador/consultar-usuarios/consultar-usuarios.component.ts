import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../_services/user.service';
import {User} from '../../_model/User';

@Component({
  selector: 'app-consultar-usuarios',
  templateUrl: './consultar-usuarios.component.html',
  styleUrls: ['./consultar-usuarios.component.css']
})
export class ConsultarUsuariosComponent implements OnInit {

  public users: Array<User>;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {

    this.userService.getUsers()
      .then(
        data => this.users = data['usuarios']
        // this.users = data
      ).catch(error => console.error(error));

  }

}
