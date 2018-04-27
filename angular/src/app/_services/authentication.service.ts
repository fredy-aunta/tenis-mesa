import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {RestServiceUtil} from './rest-service-util.service';
import {HttpClient} from '@angular/common/http';
import {User} from '../_model/User';
import {USER_TYPES} from '../app.contants';

@Injectable()
export class AuthenticationService {

  private userTypes = USER_TYPES;
  public user: User;
  // public token: string;
  //
  public redirectUrl: string = null;
  //
  private modules = {
    Administrador: {path: '/admin', cookieName: 'tenis-mesa-admin-module', defaultUrl: '/admin/home'},
    Jugador: {path: '/jugador', cookieName: 'tenis-mesa-jugador-module', defaultUrl: '/jugador/home'},
    Arbitro: {path: '/arbitro', cookieName: 'tenis-mesa-arbitro-module', defaultUrl: '/arbitro/home'}
  };
  //
  // private loginSubject = new Subject<User>();
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
    // this.loginSubject.next(this.user);
  }

  // private removeLoginData() {
  //   this.taxpayerUser = null;
  //   this.token = null;
  // }


  registerLoginData(user: User) {
    // const expirationDate = new Date(2020, 12, 31);
    // taxpayerUserLoggedInResponse.expirationTime = null;
    if (this.modules.hasOwnProperty(user.tipo)) {
      this.cookieService.delete(this.modules[user.tipo]['cookieName']);
      this.cookieService.set(this.modules[user.tipo]['cookieName'], JSON.stringify(user));
    }
    this.initLoginData(user);
  }


  loadCookieData(moduleName: string): boolean {
    let user: User;
    if (moduleName !== null) {
      const cookieData = this.cookieService.get(this.modules[moduleName]['cookieName']);
      if (cookieData === '') {
        return false;
      } else {
        user = JSON.parse(cookieData);
        this.initLoginData(user);
        return true;
      }
    }
    return false;
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
      moduleName = (moduleName === undefined) ? this.getModuleNameLoggedIn() : moduleName;
      return Promise.resolve(this.loadCookieData(moduleName));
    }
    return Promise.resolve(this.user != null);
  }

  getModuleNameLoggedIn() {
    for (const userType in this.userTypes) {
      const moduleName = this.userTypes[userType].value;
      if (this.cookieService.check(this.modules[moduleName]['cookieName'])) {
        return moduleName;
      }
    }
    return null;
  }

  public getRedirectUrl(moduleName) {
    if (this.redirectUrl === null) {
      return this.getDefaultRedirectUrl(moduleName);
    } else {
      return this.redirectUrl;
    }
  }

  public getDefaultRedirectUrl(moduleName): string {
    return this.modules[moduleName]['defaultUrl'];
  }


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

  // onLogin(): Observable<User> {
  //     return this.loginSubject.asObservable();
  // }

}
