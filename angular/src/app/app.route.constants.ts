import {IniciarSesionComponent} from './authentication/iniciar-sesion/iniciar-sesion.component';
import {Routes} from '@angular/router';
import {AuthenticationRouterOutletComponent} from './authentication/authentication-router-outlet.component';
import {AdministradorRouterOutletComponent} from './administrador/administrador-router-outlet.component';
import {AdministradorComponent} from './administrador/administrador.component';
import {EditarUsuarioComponent} from './_common/editar-usuario/editar-usuario.component';
import {CrearTorneoComponent} from './administrador/crear-torneo/crear-torneo.component';
import {ConsultarTorneosComponent} from './_common/consultar-torneos/consultar-torneos.component';
import {CrearUsuarioComponent} from './administrador/crear-usuario/crear-usuario.component';
import {ConsultarUsuarioComponent} from './_common/consultar-usuario/consultar-usuario.component';
import {ConsultarUsuariosComponent} from './administrador/consultar-usuarios/consultar-usuarios.component';
import {DefinirJugadoresComponent} from './administrador/definir-jugadores/definir-jugadores.component';
import {AsociarJugadoresComponent} from './administrador/asociar-jugadores/asociar-jugadores.component';
import {ConsultarTorneoComponent} from './_common/consultar-torneo/consultar-torneo.component';
import {EditarTorneoComponent} from './_common/editar-torneo/editar-torneo.component';
import {ConsultarPartidosComponent} from './_common/consultar-partidos/consultar-partidos.component';
import {ConsultarPartidoComponent} from './_common/consultar-partido/consultar-partido.component';
import {EditarPartidoComponent} from './_common/editar-partido/editar-partido.component';

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
      },
      {
        path: 'CrearUsuario',
        component: CrearUsuarioComponent
      },
      {
        path: 'ConsultarUsuario/:id',
        component: ConsultarUsuarioComponent
      },
      {
        path: 'ConsultarUsuarios',
        component: ConsultarUsuariosComponent
      },
      {
        path: 'EditarUsuario/:id',
        component: EditarUsuarioComponent
      },
      {
        path: 'CrearTorneo',
        component: CrearTorneoComponent
      },
      {
        path: 'ConsultarTorneos',
        component: ConsultarTorneosComponent
      },
      {
        path: 'DefinirJugadores',
        component: DefinirJugadoresComponent
      },
      {
        path: 'asociarJugadores',
        component: AsociarJugadoresComponent
      },
      {
        path: 'ConsultarTorneo',
        children: [
          {
            path: 'ConsultarPartidos/:id',
            component: ConsultarPartidosComponent
          },
          {
            path: 'ConsultarPartido/:id',
            component: ConsultarPartidoComponent
          }
        ]
      },
      {
        path: 'ConsultarTorneo/:id',
        component: ConsultarTorneoComponent
      },
      {
        path: 'EditarTorneo',
        children: [
          {
            path: 'ConsultarPartido/:id',
            component: ConsultarPartidoComponent
          },
          {
            path: 'EditarPartido/:id',
            component: EditarPartidoComponent
          }
        ]
      },
      {
        path: 'EditarTorneo/:id',
        component: EditarTorneoComponent
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
  {path: 'arbitro', component: AdministradorRouterOutletComponent, canActivate: [], children: [
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
