import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Logger} from '../../_core/logger.service';
import {TaxpayerUserLoggedInResponse} from '../../_model/taxpayer-user-logged-in-response.model';
import {ModalService} from '../../_services/modal.service';
import {TaxpayerUser} from '../../_model/taxpayer-user.model';
import {TaxpayerUserService} from '../../_services/taxpayer-user.service';

import {AlertService} from '../../_services/alert.service';
import {AuthenticationService} from '../../_services/authentication.service';
import {FormDataUtil} from '../../_services/form-data-util.service';
import {validateEmailFactory} from '../../_shared/email-validator.directive';
import {Router, ActivatedRoute, Params, UrlSegment} from '@angular/router';
import { Angulartics2 } from 'angulartics2';

@Component({
  selector: 'beitech-taxpayer-user-login',
  templateUrl: './taxpayer-user-login.component.html'
})
export class TaxpayerUserLoginComponent implements OnInit {

  public loginForm: FormGroup;
  public submitted: boolean; // keep track on whether form is submitted
  public requestInProgress: boolean;

  public taxpayerUser: TaxpayerUser;

  public wrongUserOrPassword = false;

  public expiredSession = false;

  constructor(
    private alertService: AlertService,
    public modalService: ModalService,
    private taxpayerUserService: TaxpayerUserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private logger: Logger,
    private route: ActivatedRoute,
    private formDataUtil: FormDataUtil,
    private authenticationService: AuthenticationService,
    private angulartics2: Angulartics2) {

  }
  buildForm(): void {
    this.loginForm = this.formBuilder.group({
      email: [this.taxpayerUser.email, Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50),
        validateEmailFactory()
      ])
      ],
      password: [this.taxpayerUser.password,
      [Validators.required]
      ]
    });

    this.loginForm.valueChanges.subscribe(data => {
      this.wrongUserOrPassword = false;
      this.expiredSession = false;
    });

  }



  ngOnInit() {

    this.route.url.subscribe((urlsegment: UrlSegment[]) => {
      if ('login-expired-session' === urlsegment[0]['path']) {
        this.expiredSession = true;
      }
    });


    if (this.authenticationService.isLoggedIn()) {
      const url = this.authenticationService.getDefaultRedirectUrl('taxpayer');
      this.router.navigate([url]);
    }
    this.taxpayerUser = new TaxpayerUser();
    this.buildForm();
  }


  submitLoginForm(taxpayerUser: TaxpayerUser, isValid: boolean) {
    this.taxpayerUser = this.formDataUtil.copyFormToObject(taxpayerUser, this.taxpayerUser, TaxpayerUser.classMetadata);
    this.submitted = true;
    if (isValid) {
      this.requestInProgress = true;
      this.taxpayerUserService.loginTaxpayerUser(this.taxpayerUser)
        .then(taxpayerUserLoggedInResponse => {
          this.requestInProgress = false;
          this.authenticationService.registerLoginData(taxpayerUserLoggedInResponse);
          this.angulartics2.eventTrack.next({ action: 'userLogin', properties: { category: 'authentication' }});
          const url = this.authenticationService.getRedirectUrl('taxpayer');
          this.router.navigate([url]);
        }).catch(response => {
          this.requestInProgress = false;
          if (response.status === 404) {
            this.alertService.showFormError();
            this.wrongUserOrPassword = true;
          }
          this.alertService.showFormError();
        });
    } else {
      this.alertService.showFormError();
    }
  }
}
