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


@NgModule({
  declarations: [
    AppComponent,
    IniciarSesionComponent,
    AdministradorComponent,
    MenuComponent,
    CrearUsuarioComponent,
    ConsultarUsuariosComponent,
    ConsultarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'CrearUsuario',
        component: CrearUsuarioComponent
      },
      {
        path: 'ConsultarUsuarios',
        component: ConsultarUsuariosComponent
      },
      {
        path: 'ConsultarUsuario',
        component: ConsultarUsuarioComponent
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
