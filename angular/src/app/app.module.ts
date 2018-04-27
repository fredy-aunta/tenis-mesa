import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {APP_CONFIG, TM_APP_CONFIG} from './app.config';
import {CookieService} from 'ngx-cookie-service';
import {EditarUsuarioComponent} from './_common/editar-usuario/editar-usuario.component';
import {CrearTorneoComponent} from './administrador/crear-torneo/crear-torneo.component';
import {DefinirJugadoresComponent} from './administrador/definir-jugadores/definir-jugadores.component';
import {ConsultarTorneosComponent} from './_common/consultar-torneos/consultar-torneos.component';
import {ConsultarTorneoComponent} from './_common/consultar-torneo/consultar-torneo.component';
import {TorneoService} from './_services/torneo.service';
import {AlertService} from './_services/alert.service';
import {AlertComponent} from './_core/alert/alert.component';
import { EditarTorneoComponent } from './_common/editar-torneo/editar-torneo.component';
import { AsociarJugadoresComponent } from './administrador/asociar-jugadores/asociar-jugadores.component';
import { ConsultarPartidosComponent } from './_common/consultar-partidos/consultar-partidos.component';
import {PartidoService} from './_services/partido.service';
import { ConsultarPartidoComponent } from './_common/consultar-partido/consultar-partido.component';
import { ArbitroComponent } from './arbitro/arbitro.component';
import { IngresarResultadosComponent } from './arbitro/ingresar-resultados/ingresar-resultados.component';
import { EditarPartidoComponent } from './_common/editar-partido/editar-partido.component';
import {SortableModule} from 'ngx-bootstrap/sortable';


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
    AlertComponent,
    EditarTorneoComponent,
    AsociarJugadoresComponent,
    ConsultarPartidosComponent,
    ConsultarPartidoComponent,
    ArbitroComponent,
    IngresarResultadosComponent,
    EditarPartidoComponent
  ],
  imports: [
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    SortableModule.forRoot(),
    ReactiveFormsModule/*,
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
    TorneoService,
    FormsModule,
    ReactiveFormsModule,
    AlertService,
    PartidoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
