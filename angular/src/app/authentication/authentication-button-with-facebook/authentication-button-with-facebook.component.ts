import {Component, OnInit} from '@angular/core';

import {FacebookUser} from '../../_model/facebook-user.model';
import { TaxpayerUser } from '../../_model/taxpayer-user.model';
import { Taxpayer } from '../../_model/taxpayer.model';
import { FacebookService, LoginResponse, LoginOptions  } from 'ngx-facebook';
import {AlertService} from '../../_services/alert.service';
import { AuthenticationService } from '../../_services/authentication.service';
import {FacebookUserService} from '../../_services/facebook-user.service';
import { Router } from '@angular/router';
import { Angulartics2 } from 'angulartics2';
import {reject} from 'q';

@Component({
  selector: 'beitech-authentication-button-with-facebook',
  templateUrl: 'authentication-button-with-facebook.component.html'
})
export class AuthenticationButtonWithFacebookComponent implements OnInit {

  public response: any;

  public requestInProgress: Boolean;

  public facebookUser = new FacebookUser();
  public taxpayeruser: TaxpayerUser;

  constructor(
    private fb: FacebookService,
    private alertService: AlertService,
    private facebookUserService: FacebookUserService,
        private router: Router,
    private authenticationService: AuthenticationService,
    private angulartics2: Angulartics2
  ) {}

  ngOnInit() {

  }

  private accessStatus(response: any){
    return new Promise((resolve, rejected) => {
      if(response.status === 'connected') {
        resolve(response.authResponse.accessToken);
      } else {
        rejected()
      }
    })
  };


  private getAdditionalUserInformation(accessToken){
    return new Promise((resolve, rejected) =>{
        this.facebookUserService.getUserFacebookProfile(accessToken).then(additionalUserInformation =>{
          
          this.facebookUser.userId = additionalUserInformation.id;
          this.facebookUser.userName = additionalUserInformation.name;
          this.facebookUser.userEmail = additionalUserInformation.email;
          resolve(this.facebookUser);
          
        }).catch( e =>{
          rejected(e);
        })
    })
  }

  private addFacebookUser(facebookUser: any){
    return new Promise((resolve, rejected) =>{
        this.facebookUserService.addFacebookUser(facebookUser).then( res =>{

           this.authenticationService.registerLoginData(res);
          resolve(res);
        }).catch(e =>{
          rejected(e);
        })
    })
  }

  openFacebookLogin() {
    const loginOptions: LoginOptions = {
      enable_profile_selector: true,
      return_scopes: true,
      scope: 'email,public_profile'
    };
    this.requestInProgress = true;
    this.fb.login(loginOptions)
      .then(response => this.accessStatus(response))
      .then(accessToken => this.getAdditionalUserInformation(accessToken))
      .then(facebookUser => this.addFacebookUser(facebookUser))
      .then(response => {
        this.alertService.showSuccess();
        this.taxpayeruser = response['taxpayerUser'];

          this.angulartics2.eventTrack.next({ action: 'userRegistrationFacebook', properties: { category: 'authentication' }});

        this.requestInProgress = false;
        if (this.taxpayeruser.termsAndConditions === null) {
          this.router.navigate(['/auth/registration-facebook']);
        } else {
          this.router.navigate(['/taxpayer/dashboard']);
        }

      })
      .catch(e => {
        this.alertService.showFormError();
        this.requestInProgress = false;
      });
  }

  checkLogin() {
    this.fb.getLoginStatus().then(loginStatusResponse => {
      this.response = loginStatusResponse;
    });
  }
}
