import { Injectable } from '@angular/core';
/*import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';*/
import { UserService } from './user.service';
import {PartidoService} from './partido.service';
import {TorneoService} from './torneo.service';

@Injectable()
export class GraficasService {

  constructor(private user: UserService, private match: PartidoService, private tournament: TorneoService) { }

  graficaTipoUsuario() {
    return this.user.getUsers();
  }

  graficaFechaPartidos() {
    return this.match.getPartidos();
  }

  graficaJugadoresTorneo() {
    return this.tournament.getTorneos2();
  }

}
