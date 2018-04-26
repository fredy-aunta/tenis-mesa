import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../_model/User';
import {UserService} from '../../_services/user.service';
import {AlertService} from '../../_services/alert.service';

@Component({
  selector: 'app-definir-jugadores',
  templateUrl: './definir-jugadores.component.html',
  styleUrls: ['./definir-jugadores.component.css']
})
export class DefinirJugadoresComponent implements OnInit {

  public setPlayersForm: FormGroup;
  public players: Array<User> = [];
  public referees: Array<User> = [];
  constructor(
    private userService: UserService,
    private alertService: AlertService,
    private formBuilder: FormBuilder
  ) { }

  buildForm(): void {
    this.setPlayersForm = this.formBuilder.group({
      jugadoresSelec: ['',
        [Validators.required]
      ],
      arbitrosSelec: ['',
        [Validators.required]
      ]
    });
  }

  ngOnInit() {
    this.userService.getPlayers()
      .then(players => {
        this.players = players;
      })
      .catch(response => {
        this.alertService.showError();
        console.error(response);
      });
    this.userService.getReferees()
      .then( referees => {
        this.referees = referees;
      })
      .catch( response => {
        this.alertService.showError();
        console.error(response);
      });
    this.buildForm();
  }

  addPlayer() {
    
  }

}
