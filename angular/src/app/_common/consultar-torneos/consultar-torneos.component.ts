import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TorneoService} from '../../_services/torneo.service';
import {Torneo} from '../../_model/Torneo';
import {User} from '../../_model/User';
import {UserService} from '../../_services/user.service';
import {USER_TYPES} from '../../app.contants';
import {AuthenticationService} from '../../_services/authentication.service';

@Component({
  selector: 'app-consultar-torneos',
  templateUrl: './consultar-torneos.component.html',
  styleUrls: ['./consultar-torneos.component.css']
})
export class ConsultarTorneosComponent implements OnInit {

  public tournaments: Array<Torneo>;
  public user: User;
  public userTypes = USER_TYPES;

  constructor(
    private tournamentService: TorneoService,
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.authenticationService.isLoggedIn()
      .then(isLoggedIn => {
        this.user = this.authenticationService.user;
      });
    this.tournamentService.getTorneos()
      .then(
        data => this.tournaments = data['torneos']
      ).catch(error => console.error(error));


    // this.userService.getUserSession()
    //   .then(
    //     data => this.user = data['usuario']
    //   ).catch(error => console.error(error));

  }

}
