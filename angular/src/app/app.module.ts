import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {IniciarSesionComponent} from './authentication/iniciar-sesion/iniciar-sesion.component';
import {AdministradorComponent} from './administrador/administrador.component';
import {MenuComponent} from './administrador/menu/menu.component';
import {CrearUsuarioComponent} from './administrador/crear-usuario/crear-usuario.component';
import {ConsultarUsuariosComponent} from './administrador/consultar-usuarios/consultar-usuarios.component';
import {ConsultarUsuarioComponent} from './_common/consultar-usuario/consultar-usuario.component';
import {UserService} from './_services/user.service';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavBarComponent} from './_shared/header/nav-bar/nav-bar.component';
import {AuthenticationRouterOutletComponent} from './authentication/authentication-router-outlet.component';
import {AdministradorRouterOutletComponent} from './administrador/administrador-router-outlet.component';
import {AppRoutingModule} from './app-routing.module';
import {PageNotFoundComponent} from './_core/page-not-found/page-not-found.component';
import {AuthenticationService} from './_services/authentication.service';
import {FormDataUtil} from './_services/form-data-util.service';
import {RestServiceUtil} from './_services/rest-service-util.service';
import {FormBuilder} from '@angular/forms';
import {APP_CONFIG, TM_APP_CONFIG} from './app.config';
import {CookieService} from 'ng2-cookies';
import {EditarUsuarioComponent} from './_common/editar-usuario/editar-usuario.component';
import {CrearTorneoComponent} from './administrador/crear-torneo/crear-torneo.component';
import {DefinirJugadoresComponent} from './administrador/definir-jugadores/definir-jugadores.component';
import {ConsultarTorneosComponent} from './_common/consultar-torneos/consultar-torneos.component';
import {ConsultarTorneoComponent} from './_common/consultar-torneo/consultar-torneo.component';
import {TorneoService} from './_services/torneo.service';
import { CommonComponent } from './-common/-common.component';
import { EditarTorneoComponent } from './administrador/editar-torneo/editar-torneo.component';
import { AsociarJugadoresComponent } from './administrador/asociar-jugadores/asociar-jugadores.component';


@NgModule({
  declarations: [
    AppComponent,
    IniciarSesionComponent,
    AdministradorComponent,
    MenuComponent,
    CrearUsuarioComponent,
    ConsultarUsuariosComponent,
    ConsultarUsuarioComponent,
    NavBarComponent,
    AuthenticationRouterOutletComponent,
    AdministradorRouterOutletComponent,
    PageNotFoundComponent,
    EditarUsuarioComponent,
    CrearTorneoComponent,
    DefinirJugadoresComponent,
    ConsultarTorneosComponent,
    ConsultarTorneoComponent,
    CommonComponent,
    EditarTorneoComponent,
    AsociarJugadoresComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule/*,
    RouterModule.forRoot([
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
        path: 'ConsultarUsuario/:id',
        component: ConsultarUsuarioComponent
      },
      {
        path: 'IniciarSesion',
        component: IniciarSesionComponent
      }

    ])*/
  ],
  providers: [
    UserService,
    AuthenticationService,
    FormDataUtil,
    RestServiceUtil,
    FormBuilder,
    {provide: APP_CONFIG, useValue: TM_APP_CONFIG},
    CookieService,
    TorneoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
