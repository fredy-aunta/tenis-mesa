import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { MenuComponent } from './administrador/menu/menu.component';
import { CrearUsuarioComponent } from './administrador/crear-usuario/crear-usuario.component';
import {RouterModule} from '@angular/router';
import { ConsultarUsuariosComponent } from './administrador/consultar-usuarios/consultar-usuarios.component';
import { ConsultarUsuarioComponent } from './administrador/consultar-usuario/consultar-usuario.component';
import {UserService} from './_services/user.service';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EditarUsuarioComponent } from './administrador/editar-usuario/editar-usuario.component';
import { CrearTorneoComponent } from './administrador/crear-torneo/crear-torneo.component';
import { DefinirJugadoresComponent } from './administrador/definir-jugadores/definir-jugadores.component';
import { ConsultarTorneosComponent } from './administrador/consultar-torneos/consultar-torneos.component';


@NgModule({
  declarations: [
    AppComponent,
    IniciarSesionComponent,
    AdministradorComponent,
    MenuComponent,
    CrearUsuarioComponent,
    ConsultarUsuariosComponent,
    ConsultarUsuarioComponent,
    EditarUsuarioComponent,
    CrearTorneoComponent,
    DefinirJugadoresComponent,
    ConsultarTorneosComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
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
        path: 'EditarUsuario',
        component: EditarUsuarioComponent
      },
      {
        path: 'CrearTorneo',
        component: CrearTorneoComponent
      },
      {
        path: 'ConsultarTorneos',
        component: ConsultarTorneosComponent
      }
      /*{
        path: '**',
        component: NotFoundComponent
      }*/
    ])
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
