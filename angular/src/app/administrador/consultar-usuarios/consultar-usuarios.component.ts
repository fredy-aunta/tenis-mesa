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

  public users;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {

    this.userService.getUsers()
      .subscribe(
        data => this.users = data['usuarios'],
        error => console.error(error)
        // this.users = data
      );

  }

}