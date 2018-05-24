import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../_services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-arbitro-router-outlet',
  template: `
    <app-menu></app-menu>
    <router-outlet></router-outlet>
  `
})
export class ArbitroRouterOutletComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    if (!this.authenticationService.isLoggedIn()) {
      const url = '/auth/iniciar-sesion';
      this.router.navigate([url]);
    }
  }

}
