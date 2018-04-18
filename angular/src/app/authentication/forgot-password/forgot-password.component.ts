import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router, ActivatedRoute, Params, UrlSegment } from '@angular/router';
import {TaxpayerUser} from '../../_model/taxpayer-user.model';
import {TaxpayerUserService} from '../../_services/taxpayer-user.service';
import { AlertService } from '../../_services/alert.service';
import { Angulartics2 } from 'angulartics2';

@Component({
  selector: 'beitech-forgot-password',
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent implements OnInit {

  public forgotPasswordForm: FormGroup;
  public submitted: boolean; // keep track on whether form is submitted
  public requestInProgress = false;
  public emailSent = {
    success : null,
    error : null
  };
  public expiredToken = false;

  constructor(
    private alertService: AlertService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private taxpayerUserService: TaxpayerUserService,
    private angulartics2: Angulartics2) { }

  ngOnInit() {
    this.submitted = false;
    this.buildForm();
    this.route.url.subscribe((urlsegment: UrlSegment[]) => {
        if ('forgot-password-invalid-token' === urlsegment[0]['path']) {
          this.expiredToken = true;
        }
    });
  }

  buildForm(): void {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(50)
            ])
      ]
    });
  }

  submitForgotPassword(isValid: boolean) {
    this.submitted = true;
    if (isValid) {
      this.requestInProgress = true;
      const email = this.forgotPasswordForm.get('email').value;
      this.taxpayerUserService.sendResetPasswordEmail(email)
        .then(resetPasswordEmailSent => {
            this.angulartics2.eventTrack.next({ action: 'sendResetPasswordEmail', properties: { category: 'authentication' }});
            this.requestInProgress = false;
            this.alertService.showSuccess();
            this.emailSent.success = email;
        })
        .catch(error => {
          this.emailSent.error = email;
        });
    }
  }
}
