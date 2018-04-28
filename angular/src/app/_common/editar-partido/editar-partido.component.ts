import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PartidoService} from '../../_services/partido.service';
import {Partido} from '../../_model/Partido';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormDataUtil} from '../../_services/form-data-util.service';
import {CustomCookieService} from '../../_services/custom-cookie.service';
import {AlertService} from '../../_services/alert.service';
import {User} from '../../_model/User';
import {USER_TYPES} from '../../app.contants';
import {UserService} from '../../_services/user.service';
import {AuthenticationService} from '../../_services/authentication.service';

@Component({
  selector: 'app-editar-partido',
  templateUrl: './editar-partido.component.html',
  styleUrls: ['./editar-partido.component.less']
})
export class EditarPartidoComponent implements OnInit {

  public editGameForm: FormGroup;
  public game: Partido;
  public submitted: boolean;
  public user: User;
  public userTypes = USER_TYPES;

  constructor(
    private route: ActivatedRoute,
    private gameService: PartidoService,
    private formBuilder: FormBuilder,
    private formDataUtil: FormDataUtil,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) { }

  buildForm(): void {
    this.editGameForm = this.formBuilder.group({
      fechaHora: [this.game.fechaHora,
        [Validators.required]
      ],
      idJugador1: [this.game.idJugador1,
        [Validators.required]
      ],
      idJugador2: [this.game.idJugador2,
        [Validators.required]
      ],
      idresultado1: [this.game.resultado1,
        [Validators.required]
      ],
      iresultado2: [this.game.resultado2,
        [Validators.required]
      ],
      idArbitro: [this.game.idArbitro,
        [Validators.required]
      ]
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.authenticationService.isLoggedIn()
      .then(isLoggedIn => {
        this.user = this.authenticationService.user;
      });
    this.game = new Partido();
    this.buildForm();
    this.editGameForm.controls.fechaHora.disable();
    this.gameService.getPartido(id)
      .then(
        data => this.game = data['partido']
      ).catch(error => console.error(error));
  }

  submitEditGameForm(game: Object, isValid: boolean) {
    this.game = this.formDataUtil.copyFormToObject(game, this.game, Partido.classMetadata);
    this.submitted = true;
    if (isValid) {
      const params = {
        fechaHora: game['fechaHora'],
        idPartido: game['idPartido'],
      };
      // this.requestInProgress = true;
      this.gameService.updateGame(params)
        .then(createdTournament => {
          this.alertService.showSuccess();
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
