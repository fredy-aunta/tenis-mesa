import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication-router-outlet',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AuthenticationRouterOutletComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
