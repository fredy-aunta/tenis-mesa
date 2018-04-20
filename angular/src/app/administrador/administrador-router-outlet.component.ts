import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrador-router-outlet',
  template: `
    <app-menu></app-menu>
    <router-outlet></router-outlet>
  `
})
export class AdministradorRouterOutletComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
