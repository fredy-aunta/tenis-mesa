import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {AuthenticationService} from './authentication.service';
import {COOKIE_NAMES} from '../app.contants';
import {Torneo} from '../_model/Torneo';
import {User} from '../_model/User';

@Injectable()
export class CustomCookieService {
  constructor(
    private cookieService: CookieService,
    private authenticationService: AuthenticationService
  ) {
  }

  keepTournament(value: any, expires?: number | Date, path?: string, domain?: string, secure?: boolean) {
    let cookieName = this.authenticationService.getPrefixCookieNameLoggedInUser();
    cookieName += COOKIE_NAMES.TOURNAMENT;
    const data = JSON.stringify(value);
    this.cookieService.set(cookieName, data, expires, path, domain, secure);
  }

  checkTournament(): boolean {
    let cookieName = this.authenticationService.getPrefixCookieNameLoggedInUser();
    cookieName += COOKIE_NAMES.TOURNAMENT;
    return this.cookieService.check(cookieName);
  }

  getTournament(): Torneo {
    let cookieName = this.authenticationService.getPrefixCookieNameLoggedInUser();
    cookieName += COOKIE_NAMES.TOURNAMENT;
    return JSON.parse(this.cookieService.get(cookieName)) as Torneo;
  }

  keepPlayers(value: any, expires?: number | Date, path?: string, domain?: string, secure?: boolean) {
    let cookieName = this.authenticationService.getPrefixCookieNameLoggedInUser();
    cookieName += COOKIE_NAMES.PLAYERS_SELECTED;
    const data = JSON.stringify(value);
    this.cookieService.set(cookieName, data, expires, path, domain, secure);
  }

  checkPlayers(): boolean {
    let cookieName = this.authenticationService.getPrefixCookieNameLoggedInUser();
    cookieName += COOKIE_NAMES.PLAYERS_SELECTED;
    return this.cookieService.check(cookieName);
  }

  getPlayers(): Array<User> {
    let cookieName = this.authenticationService.getPrefixCookieNameLoggedInUser();
    cookieName += COOKIE_NAMES.PLAYERS_SELECTED;
    return JSON.parse(this.cookieService.get(cookieName)) as Array<User>;
  }

  keepReferees(value: any, expires?: number | Date, path?: string, domain?: string, secure?: boolean) {
    let cookieName = this.authenticationService.getPrefixCookieNameLoggedInUser();
    cookieName += COOKIE_NAMES.REFEREES_SELECTED;
    const data = JSON.stringify(value);
    this.cookieService.set(cookieName, data, expires, path, domain, secure);
  }

  checkReferees(): boolean {
    let cookieName = this.authenticationService.getPrefixCookieNameLoggedInUser();
    cookieName += COOKIE_NAMES.REFEREES_SELECTED;
    return this.cookieService.check(cookieName);
  }

  getReferees(): Array<User> {
    let cookieName = this.authenticationService.getPrefixCookieNameLoggedInUser();
    cookieName += COOKIE_NAMES.REFEREES_SELECTED;
    return JSON.parse(this.cookieService.get(cookieName)) as Array<User>;
  }

  keepInitialDateTournament(value: any, expires?: number | Date, path?: string, domain?: string, secure?: boolean) {
    let cookieName = this.authenticationService.getPrefixCookieNameLoggedInUser();
    cookieName += COOKIE_NAMES.INITIAL_DATE_TOURNAMENT;
    const data = value;
    this.cookieService.set(cookieName, data, expires, path, domain, secure);
  }

  checkInitialDateTournament(): boolean {
    let cookieName = this.authenticationService.getPrefixCookieNameLoggedInUser();
    cookieName += COOKIE_NAMES.INITIAL_DATE_TOURNAMENT;
    return this.cookieService.check(cookieName);
  }

  getInitialDateTournament(): string {
    let cookieName = this.authenticationService.getPrefixCookieNameLoggedInUser();
    cookieName += COOKIE_NAMES.INITIAL_DATE_TOURNAMENT;
    return this.cookieService.get(cookieName);
  }
}
