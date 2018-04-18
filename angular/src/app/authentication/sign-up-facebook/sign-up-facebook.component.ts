import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Logger} from '../../_core/logger.service';
import {ModalService} from '../../_services/modal.service';
import {TaxpayerUser} from '../../_model/taxpayer-user.model';
import {FacebookUser} from '../../_model/facebook-user.model'
import {TaxpayerUserService} from '../../_services/taxpayer-user.service';

import {AlertService} from '../../_services/alert.service';
import {AuthenticationService} from '../../_services/authentication.service';
import {FormDataUtil} from '../../_services/form-data-util.service';
import { validateEmailFactory } from '../../_shared/email-validator.directive';
import { REGULAR_EXPRESSIONS } from '../../app.constants';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Angulartics2 } from 'angulartics2';
import { FacebookService, LoginResponse, LoginOptions } from 'ngx-facebook';
import {BeitechValidators} from '../../_common/beitech-validators';

@Component({
  selector: 'beitech-sign-up-facebook',
  templateUrl: './sign-up-facebook.component.html'
})
export class SignUpFacebookComponent implements OnInit {

  public taxpayerUserForm: FormGroup;
  public submitted: boolean; // keep track on whether form is submitted
  public requestInProgress: boolean;
  public taxpayerUser: TaxpayerUser;

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
    this.taxpayerUserForm = this.formBuilder.group({

        lastIdDigits: [this.taxpayerUser.lastIdDigits,
        [Validators.required, Validators.minLength(2), Validators.maxLength(2), BeitechValidators.validateNumber()]
      ],
        cellphone: [this.taxpayerUser.cellphone,
        [Validators.pattern(REGULAR_EXPRESSIONS.ONLY_NUMBERS), Validators.maxLength(15)]
       ],
        termsAndConditions: [this.taxpayerUser.termsAndConditions,
        [BeitechValidators.isOnlyTrue]
       ],
    });
  }


  ngOnInit() {
    this.taxpayerUser = new TaxpayerUser();
    this.buildForm();
  }


  submitTaxpayerUserForm(taxpayerUser: TaxpayerUser, isValid: boolean) {

    this.taxpayerUser = this.formDataUtil.copyFormToObject(taxpayerUser, this.taxpayerUser, TaxpayerUser.classMetadata);
    this.submitted = true;
    if (isValid) {
      this.requestInProgress = true;
      this.taxpayerUser.email = this.authenticationService.taxpayerUser.email;
      this.taxpayerUserService.updateTaxpayerUser(this.taxpayerUser)
        .then(taxpayerUserLoggedInResponse => {
          this.requestInProgress = false;
          this.alertService.showSuccess();
          this.authenticationService.registerLoginData(taxpayerUserLoggedInResponse);
          this.angulartics2.eventTrack.next({ action: 'userRegistration', properties: { category: 'authentication' }});
          this.router.navigate(['/profile/welcome']);
        }).catch(response => {
          if (response.status === 412) {
            this.alertService.showFormError();
            this.taxpayerUserForm.get('email').setErrors({'emailAlreadyExist': true});
            this.submitted = false;
            this.requestInProgress = false;

          }
          this.alertService.showFormError();
          return;
        });
    } else {
      this.alertService.showFormError();
    }
  }
}
