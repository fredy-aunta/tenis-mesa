import {IniciarSesionComponent} from './authentication/iniciar-sesion/iniciar-sesion.component';
import {Routes} from '@angular/router';
import {AuthenticationRouterOutletComponent} from './authentication/authentication-router-outlet.component';
import {AdministradorRouterOutletComponent} from './administrador/administrador-router-outlet.component';
import {AdministradorComponent} from './administrador/administrador.component';

export const AuthRoutes: Routes = [
  { path: '', redirectTo: '/auth/iniciar-sesion', pathMatch: 'full' },
  {path: 'auth', component: AuthenticationRouterOutletComponent,  children: [
      {
        path: '',
        redirectTo: 'iniciar-sesion',
        pathMatch: 'full'
      },
      {
        path: 'iniciar-sesion',
        component: IniciarSesionComponent
      }
    ]}
];
export const ProtectedRoutes: Routes = [
  { path: 'admin', component: AdministradorRouterOutletComponent, canActivate: [], children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
    {
        path: 'home',
        component: AdministradorComponent,
        canActivate: []
      }/*,
      {
        path: 'wizard',
        component: WizardPageComponent,
        canActivate: [AuthenticationGuardService]
      },
      {
        path: 'communication-advisor-step',
        component: CommunicationAdvisorComponent
      },
      {
        path: 'next-date-for-tax-payment',
        component: NextDateForTaxPaymentComponent
      }*/
    ]}/*,
  {path: 'arbitro', component: TaxPayerRouterOutletComponent, canActivate: [AuthenticationGuardService], children: [
      {
        path: 'dashboard',
        component: IndexDashboardComponent
      },
      {
        path: 'previous-years',
        component: TaxpayerPreviousYearsDashboardComponent
      }
    ]}*/
];
