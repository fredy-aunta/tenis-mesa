import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../_model/User';
import {FormDataUtil} from '../../_services/form-data-util.service';
import {UserService} from '../../_services/user.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../_services/authentication.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  public loginForm: FormGroup;
  public user: User;
  private submitted: boolean;
  private requestInProgress: boolean;
  private wrongUserOrPassword: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private formDataUtil: FormDataUtil,
    private userService: UserService,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
  }

  buildForm(): void {
    this.loginForm = this.formBuilder.group({
      nombreUsuario: [this.user.nombreUsuario, Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50)
        // validateEmailFactory()
      ])
      ],
      clave: [this.user.clave,
        [Validators.required]
      ]
    });
  }
  ngOnInit() {
    this.user = new User();
    this.buildForm();
  }

  submitLoginForm(user: User, isValid: boolean) {
    this.user = this.formDataUtil.copyFormToObject(user, this.user, User.classMetadata);
    this.submitted = true;
    if (isValid) {
      this.requestInProgress = true;
      this.userService.loginUser(this.user)
        .then(loggedInUser => {
          this.requestInProgress = false;
          this.authenticationService.registerLoginData(loggedInUser);
          // const url = this.authenticationService.getRedirectUrl('taxpayer');
          const url = '';
          this.router.navigate([url]);
        }).catch(response => {
        this.requestInProgress = false;
        if (response.status === 404) {
          // TODO: Mostrar error
          // this.alertService.showFormError();
          this.wrongUserOrPassword = true;
        }
        // TODO: Mostrar error
        // this.alertService.showFormError();
      });
    } else {
      // TODO: Mostrar error
      // this.alertService.showFormError();
    }
  }

}
