import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../_model/User';
import {Torneo} from '../../_model/Torneo';
import {FormDataUtil} from '../../_services/form-data-util.service';
import {AlertService} from '../../_services/alert.service';
import {Router} from '@angular/router';
import {UserService} from '../../_services/user.service';
import {TorneoService} from '../../_services/torneo.service';
import {CookieService} from 'ngx-cookie-service';
import {CustomCookieService} from '../../_services/custom-cookie.service';

@Component({
  selector: 'app-crear-torneo',
  templateUrl: './crear-torneo.component.html',
  styleUrls: ['./crear-torneo.component.css']
})
export class CrearTorneoComponent implements OnInit {

  public createTournamentForm: FormGroup;
  public tournament: Torneo;
  public submitted: boolean;


  constructor(
    private formBuilder: FormBuilder,
    private formDataUtil: FormDataUtil,
    private tournamentService: TorneoService,
    private router: Router,
    private alertService: AlertService,
    private cookieService: CustomCookieService
  ) { }

  buildForm(): void {
    this.createTournamentForm = this.formBuilder.group({
      nombre: [this.tournament.nombre,
        [Validators.required]
      ],
      cantidadMesas: [this.tournament.cantidadMesas,
        [Validators.required]
      ],
      cantidadJugadores: [this.tournament.cantidadJugadores,
        [Validators.required]
      ],
      idEstructura: [this.tournament.idEstructura,
        [Validators.required]
      ],
      fechaHora: ['',
        [Validators.required]
      ]
    });
  }

  ngOnInit() {
    this.tournament = new Torneo();
    this.buildForm();
    this.createTournamentForm.controls.idEstructura.setValue('1');
  }

  submitCreateTournamentForm(tournament: Object, isValid: boolean) {
    this.tournament = this.formDataUtil.copyFormToObject(tournament, this.tournament, Torneo.classMetadata);
    this.submitted = true;
    if (isValid) {
      const params = {
        tournamentCreate: this.tournament,
        fechaHora: tournament['fechaHora']
      };
      // this.requestInProgress = true;
      this.tournamentService.createTournament(params)
        .then(createdTournament => {
          // this.requestInProgress = false;
          // this.authenticationService.registerLoginData(loggedInUser);
          // const url = this.authenticationService.getRedirectUrl(loggedInUser.tipo);
          this.cookieService.keepTournament(createdTournament);
          const url = '/admin/DefinirJugadores';
          this.router.navigate([url]);
          // this.alertService.showSuccess();
        }).catch(response => {
        // this.requestInProgress = false;
        if (response.status === 404) {
          // TODO: Mostrar error
          this.alertService.showFormError();
          // this.wrongUserOrPassword = true;
        }
        // TODO: Mostrar error
        this.alertService.showFormError();
      });
    } else {
      // TODO: Mostrar error
      this.alertService.showFormError();
    }
  }

}
