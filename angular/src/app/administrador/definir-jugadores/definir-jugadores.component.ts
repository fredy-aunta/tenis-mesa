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
  public players: Array<any> = [
    {id: 1, nombre: 'TTT'},
    {id: 2, nombre: 'TTTY'},
    {id: 3, nombre: 'TTfdTY'}
  ];
  public playersSelected: Array<any> = [];
  public referees: Array<User> = [];
  constructor(
    private userService: UserService,
    private alertService: AlertService,
    private formBuilder: FormBuilder
  ) { }

  buildForm(): void {
    this.setPlayersForm = this.formBuilder.group({
      allJugadores: ['',
        []
      ],
      jugadoresSelec: ['',
        [Validators.required]
      ],
      // allArbitros: ['',
      //   []
      // ],
      // arbitrosSelec: ['',
      //   [Validators.required]
      // ]
    });
  }

  ngOnInit() {
    this.userService.getPlayers()
      .then(players => {
        // this.players = players;
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
    const selectedJugadores = this.setPlayersForm.controls['allJugadores'].value;
    if (selectedJugadores) {
      // const optionsSelected : HTMLOptionsCollection = document.get
    }
    console.log(this.setPlayersForm.controls['allJugadores']);
  }

  submitSetPlayersForm(formValues: Object, isValid: boolean) {

  }
}
