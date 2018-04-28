import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../_model/User';
import {UserService} from '../../_services/user.service';
import {AlertService} from '../../_services/alert.service';
import {COOKIE_NAMES} from '../../app.contants';
import {AuthenticationService} from '../../_services/authentication.service';
import {Router} from '@angular/router';
import {CustomCookieService} from '../../_services/custom-cookie.service';

@Component({
  selector: 'app-definir-jugadores',
  templateUrl: './definir-jugadores.component.html',
  styleUrls: ['./definir-jugadores.component.css']
})
export class DefinirJugadoresComponent implements OnInit {

  public setPlayersForm: FormGroup;
  public players: Array<User>;
  public playersSelected: Array<User> = [];
  public referees: Array<User> = [];
  public refereesSelected: Array<User> = [];
  public hasPlayersSelected = false;
  constructor(
    private userService: UserService,
    private alertService: AlertService,
    private formBuilder: FormBuilder,
    private cookieService: CustomCookieService,
    private authenticationService: AuthenticationService,
    private router: Router
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
    if (this.cookieService.checkTournament()) {
      console.log('Success');
    } else {
      console.error('Error');
    }
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

  confirmPlayers() {
    if (this.playersSelected.length === 0) {
      console.error(this.playersSelected);
    } else {
      this.hasPlayersSelected = true;
    }
  }

  confirmReferees() {
    if (this.refereesSelected.length === 0) {
      console.error(this.refereesSelected);
    } else {
      this.cookieService.keepPlayers(this.playersSelected);
      this.cookieService.keepReferees(this.refereesSelected);
      const url = '/admin/asociarJugadores';
      this.router.navigate([url]);
    }
  }

  submitSetPlayersForm(formValues: Object, isValid: boolean) {

  }
}
