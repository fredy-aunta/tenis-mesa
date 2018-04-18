import { TypesOfErrors, AlertSettings } from '../../_core/alert/model/alert-settings.model';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import {AlertService} from '../../_services/alert.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TaxpayerUserService } from '../../_services/taxpayer-user.service';
import { BeitechValidators } from '../../_common/beitech-validators';
import {TaxpayerUserResetPassword} from '../../_model/taxpayer-user-reset-password.model';
import { Angulartics2 } from 'angulartics2';

@Component({
  selector: 'beitech-reset-password',
  templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent implements OnInit {

  public resetPasswordForm: FormGroup;
  public submitted: boolean; // keep track on whether form is submitted
  public requestInProgress = false;
  public taxpayerUserResetPassword: TaxpayerUserResetPassword;
  public validToken: Boolean;

  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute,
    private taxpayerUserService: TaxpayerUserService,
    private angulartics2: Angulartics2) { }

  ngOnInit() {
    this.submitted = false;
    this.buildForm();
    this.route.params.switchMap((params: Params) => {
      if (params['token'] != null) {
        return this.taxpayerUserService.validateResetPasswordToken(params['token']);
      }else {
        Observable.throw(false);
      }
    }).subscribe(
      taxpayerUserResetPassword => {
        this.taxpayerUserResetPassword = taxpayerUserResetPassword;
      },
      error => {
        this.router.navigate(['auth/forgot-password-invalid-token/']);
      }
    );
  }

  buildForm() {
    this.resetPasswordForm = this.formBuilder.group({
      password: ['',
      [Validators.required]],
      confirmPassword: ['',
      [Validators.required]]
    }, {
      validator: BeitechValidators.passwordsMatch
    });
  }

  submitResetPasswordForm(isValid: boolean) {
    this.submitted = true;
    if (isValid) {
      this.requestInProgress = true;
      this.taxpayerUserResetPassword.password = this.resetPasswordForm.get('password').value;
      this.taxpayerUserService.resetPassword(this.taxpayerUserResetPassword).then(updatedPassword => {
          this.requestInProgress = false;
          this.angulartics2.eventTrack.next({ action: 'resetPassword', properties: { category: 'authentication' }});
          const alertSettings = new AlertSettings();
          alertSettings.message = 'Se ha actualizado su contraseña';
          alertSettings.alertType = TypesOfErrors.SUCCESS;
          alertSettings.icon = 'fa-check';
          alertSettings.keepAfterNavigationChange = true;
          this.alertService.show(alertSettings);
          this.router.navigate(['auth/login']);
      })
      .catch(error => {
          this.router.navigate(['auth/forgot-password-invalid-token/']);
      });
    }
  }
}
