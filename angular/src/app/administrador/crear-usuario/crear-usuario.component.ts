import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../_model/User';
import {AuthenticationService} from '../../_services/authentication.service';
import {AlertService} from '../../_services/alert.service';
import {FormDataUtil} from '../../_services/form-data-util.service';
import {UserService} from '../../_services/user.service';
import {Router} from '@angular/router';
import {USER_TYPES} from '../../app.contants';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  public createUserForm: FormGroup;
  public user: User;
  public submitted: boolean;
  public userTypes = USER_TYPES;

  constructor(
    private formBuilder: FormBuilder,
    private formDataUtil: FormDataUtil,
    private userService: UserService,
    private router: Router,
    private alertService: AlertService
  ) { }

  buildForm(): void {
    this.createUserForm = this.formBuilder.group({
      tipo: [this.user.tipo,
        [Validators.required]
      ],
      nombreUsuario: [this.user.nombreUsuario, Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50)
        // validateEmailFactory()
      ])
      ],
      clave: [this.user.clave,
        [Validators.required]
      ],
      nombre: [this.user.nombre,
        [Validators.required]
      ],
      apellido: [this.user.apellido,
        [Validators.required]
      ],
      cedula: [this.user.cedula,
        [Validators.required]
      ],
      telefono: [this.user.telefono,
        [Validators.required]
      ],
      fechaNacimiento: [this.user.fechaNacimiento,
        [Validators.required]
      ]
    });
  }

  ngOnInit() {
    this.user = new User();
    this.buildForm();
  }

  setModelCheck(model: string) {
    this.createUserForm.controls.tipo.setValue(model);
  }

  submitCreateUserForm(user: User, isValid: boolean) {
    this.user = this.formDataUtil.copyFormToObject(user, this.user, User.classMetadata);
    this.submitted = true;
    if (isValid) {
      // this.requestInProgress = true;
      this.userService.createUser({userCreate: this.user})
        .then(createdUser => {
          // this.requestInProgress = false;
          // this.authenticationService.registerLoginData(loggedInUser);
          // const url = this.authenticationService.getRedirectUrl(loggedInUser.tipo);
          const url = '/admin/ConsultarUsuarios';
          this.router.navigate([url]);
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
