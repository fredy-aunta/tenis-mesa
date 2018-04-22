import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../_services/user.service';
import {User} from '../../_model/User';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  public user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .then(data =>
        this.user = data['usuario'],
        error => console.error(error)
      )
      .catch(error => console.error(error));
  }
}
