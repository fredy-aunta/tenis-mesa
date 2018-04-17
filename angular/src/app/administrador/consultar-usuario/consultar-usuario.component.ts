import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../_services/user.service';
import {User} from '../../_model/User';

@Component({
  selector: 'app-consultar-usuario',
  templateUrl: './consultar-usuario.component.html',
  styleUrls: ['./consultar-usuario.component.css']
})
export class ConsultarUsuarioComponent implements OnInit {
  public user: User;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    /*const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe(user = > {
      this.user = user;
    })*/
  }

}
