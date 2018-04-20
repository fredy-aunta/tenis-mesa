import {Injectable, OnDestroy} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {CookieService} from 'ng2-cookies';
// import {TaxpayerUserLoggedInResponse} from '../_model/taxpayer-user-logged-in-response.model';
// import {TaxpayerUser} from '../_model/taxpayer-user.model';
import { RestServiceUtil } from './rest-service-util.service';
// import { TaxpayerUserService } from './taxpayer-user.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';
import {User} from '../_model/User';

@Injectable()
export class AuthenticationService {


  public user: User;
  // public token: string;
  //
  // public redirectUrl: string = null;
  //
  private modules = {administrador: {path: '/', cookieName: 'tenis-mesa-admin-module', defaultUrl: '/admin'},
    jugador: {path: '/', cookieName: 'tenis-mesa-jugador-module', defaultUrl: '/jugador'},
    arbitro: {path: '/', cookieName: 'tenis-mesa-arbitro-module', defaultUrl: '/arbitro'}};
  //
  private loginSubject = new Subject<User>();
  //
  // private taxpayerUserPath = '/taxpayer/taxpayer-user';

  constructor(
    private http: HttpClient,
    private restServiceUtil: RestServiceUtil,
    private cookieService: CookieService) {

  }


  private initLoginData(user: User) {
    this.user = user;
    // this.token = taxpayerUserLoggedInResponse.token;
    this.loginSubject.next(this.user);
  }

  // private removeLoginData() {
  //   this.taxpayerUser = null;
  //   this.token = null;
  // }


  registerLoginData(user: User) {
    const expirationDate = new Date(2020, 12, 31);
    // taxpayerUserLoggedInResponse.expirationTime = null;

    this.cookieService.delete(this.modules[user.tipo]['cookieName']);
    this.cookieService.set(this.modules[user.tipo]['cookieName'], JSON.stringify(user),
      expirationDate, this.modules[user.tipo]['path']);

    this.initLoginData(user);
  }


 loadCookieData(moduleName: string): boolean {
    let user: User;
    const cookieData = this.cookieService.get(this.modules[moduleName]['cookieName']);
    if (cookieData === '') {
      return false;
    } else {
      user = JSON.parse(cookieData);
      this.initLoginData(user);
      return true;
    }
  }

  // loadTaxpayerUserFromHttpCookie(): Promise<TaxpayerUserLoggedInResponse> {
  //   const url = this.restServiceUtil.getEndPoint(this.taxpayerUserPath + '/recover-login');
  //   return this.http.post(url, JSON.stringify(''), {withCredentials: true})
  //     .toPromise()
  //     .then(response => {
  //       return response as TaxpayerUserLoggedInResponse;
  //     });
  // }

  // logout(moduleName: string) {
  //   this.cookieService.delete(this.modules[moduleName]['cookieName']);
  //   this.removeLoginData();
  // }


 isLoggedIn(moduleName?: string): Promise<boolean> {
    if (this.user == null) {
      moduleName = (moduleName === undefined) ? 'administrador' : moduleName;
      return Promise.resolve(this.loadCookieData(moduleName));
    }
    return Promise.resolve(this.user != null);
  }

  // public getRedirectUrl(moduleName) {
  //   if (this.redirectUrl === null) {
  //     return this.getDefaultRedirectUrl(moduleName);
  //   } else {
  //     return this.redirectUrl;
  //   }
  // }

  // public getDefaultRedirectUrl(moduleName): string {
  //   return this.modules[moduleName]['defaultUrl'];
  // }


  // public getFirstName() {
  //   const splitName = this.taxpayerUser.fullName.split(' ');
  //   return splitName[0];
  // }

  // public getIdTaxPayerUser() {
  //   if (this.taxpayerUser) {
  //     return this.taxpayerUser.idTaxpayerUser;
  //   } else {
  //     return null;
  //   }
  // }

  // public getTaxpayer() {
  //   return this.taxpayerUser;
  // }

    // onLogin(): Observable<TaxpayerUser> {
    //     return this.loginSubject.asObservable();
    // }

}
