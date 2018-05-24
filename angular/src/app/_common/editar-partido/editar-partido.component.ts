import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PartidoService} from '../../_services/partido.service';
import {Partido} from '../../_model/Partido';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormDataUtil} from '../../_services/form-data-util.service';
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

  public editGameForm: FormGroup = null;
  public game: Partido;
  public submitted: boolean;
  public user: User;
  public userTypes = USER_TYPES;
  private isReferee: boolean;
  private isAdmin: boolean;

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
    let validationsFechaHora: Validators = [];
    let validationsResultados: Validators = [];
    if (this.user && this.user.tipo === this.userTypes.ADMIN.value) {
      validationsFechaHora = Validators.required;
    } else if (this.user && this.user.tipo === this.userTypes.ARBITRO.value) {
      validationsResultados = Validators.required;
    }
    this.isReferee = this.user.tipo === this.userTypes.ARBITRO.value;
    this.isAdmin = this.user.tipo === this.userTypes.ADMIN.value;

    this.editGameForm = this.formBuilder.group({
      fechaHora: [{value: this.game.fechaHora, disabled: this.isReferee},
        validationsFechaHora
      ],
      idJugador1: [{value: this.game.idJugador1, disabled: true},
        []
      ],
      idJugador2: [{value: this.game.idJugador2, disabled: true},
        []
      ],
      resultado1: [{value: this.game.resultado1, disabled: this.isAdmin},
        validationsResultados
      ],
      resultado2: [{value: this.game.resultado2, disabled: this.isAdmin},
        validationsResultados
      ],
      idArbitro: [{value: this.game.idArbitro, disabled: true},
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

    this.gameService.getPartido(id)
      .then(
        data => {
          this.game = data['partido'];
          this.buildForm();
        }
      ).catch(error => {
        console.error(error);
      });
  }

  submitEditGameForm(game: Object, isValid: boolean) {
    this.game = this.formDataUtil.copyFormToObject(game, this.game, Partido.classMetadata);
    this.submitted = true;
    let params: any = {};
    if (isValid) {
      params = {
        fechaHora: this.game['fechaHora'],
        idPartido: this.game['idPartido'],
      };
      // this.requestInProgress = true;
      if (this.isAdmin) {
        this.gameService.updateGame(this.game)
          .then(updatedPartido => {
            this.alertService.showSuccess();
            console.log(updatedPartido);
          }).catch(response => {
          if (response.status === 404) {
            this.alertService.showFormError();
          } else {
            this.alertService.showError();
          }
        });
      } else if (this.isReferee) {
        this.gameService.uploadResults(this.game)
          .then(updatedPartido => {
            this.alertService.showSuccess();
            console.log(updatedPartido);
          }).catch(error => {
            console.error(error);
            this.alertService.showError();
        });
      }

    } else {
      // TODO: Mostrar error
      this.alertService.showFormError();
    }
  }

}
