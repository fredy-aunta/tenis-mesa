import { Injectable } from '@angular/core';
/*import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';*/
import { UserService } from './user.service';
import {PartidoService} from './partido.service';

@Injectable()
export class GraficasService {

  constructor(private user: UserService, private match: PartidoService) { }

  graficaTipoUsuario() {
    return this.user.getUsers();
  }

  graficaFechaPartidos() {
    return this.match.getPartidos();
  }

}
