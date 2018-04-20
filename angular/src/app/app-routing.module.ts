import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './_core/page-not-found/page-not-found.component'
import {AuthRoutes, ProtectedRoutes} from './app.route.constants';

/**
 * All routes
*/
const routes: Routes = [
  ...AuthRoutes,
  ...ProtectedRoutes,
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
