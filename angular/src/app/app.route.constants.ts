import {IniciarSesionComponent} from './iniciar-sesion/iniciar-sesion.component';
import {Routes} from '@angular/router';
import {AuthenticationRouterOutletComponent} from './authentication/authentication-router-outlet.component';

export const AuthRoutes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  {path: 'auth', component: AuthenticationRouterOutletComponent,  children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: IniciarSesionComponent
      }
    ]}
];
export const ProtectedRoutes: Routes = [
  { path: 'profile', component: WizardPayerRouterOutletComponent, canActivate: [AuthenticationGuardService], children: [
      {
        path: 'welcome',
        component: TaxPayerProfileComponent,
        canActivate: [AuthenticationGuardService]
      },
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
      }
    ]},
  {path: 'taxpayer', component: TaxPayerRouterOutletComponent, canActivate: [AuthenticationGuardService], children: [
      {
        path: 'dashboard',
        component: IndexDashboardComponent
      },
      {
        path: 'previous-years',
        component: TaxpayerPreviousYearsDashboardComponent
      }
    ]}
];
