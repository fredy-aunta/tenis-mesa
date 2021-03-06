import {Injectable} from '@angular/core';
import {Torneo} from '../_model/Torneo';
import 'rxjs/add/operator/toPromise';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../_model/User';
import {Partido} from '../_model/Partido';

@Injectable()
export class TorneoService {

  httpOptions: any;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        // 'Access-Control-Allow-Origin' : 'http://localhost:4200',
        // 'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT, DELETE',
        'Content-Type': 'application/json',
        // 'Accept': 'application/json'
      })
    };
  }

  getTorneos2(): Promise<Array<Torneo>> {
    const url = 'http://dev.tenis-mesa.com/ConsultarTorneosCtrl/index2';
    return this.http.get(url)
      .toPromise()
      .then(response => {
          return response["torneos"] as Array<Torneo>;
        }
      );
  }

  getTorneos(): Promise<Array<Torneo>> {
    const url = 'http://dev.tenis-mesa.com/ConsultarTorneosCtrl';
    return this.http.get(url)
      .toPromise()
      .then(response => {
          return response as Array<Torneo>;
        }
      );
  }

  getTorneo(id: string): Promise<Torneo> {
    const url = 'http://dev.tenis-mesa.com/ConsultarTorneoCtrl/' + id;
    return this.http.get(url)
      .toPromise()
      .then(response => {
        return response as Torneo;
      });
  }

  createTournament(params): Promise<Torneo> {
    const url = 'http://dev.tenis-mesa.com/CrearTorneoCtrl/';
    return this.http.post(url, params)
      .toPromise()
      .then(response => {
          return response['torneoCreado'] as Torneo;
        }
      );
  }

  createEstructura(params): Promise<Array<Partido>> {
    const url = 'http://dev.tenis-mesa.com/CrearEstructuraCtrl/';
    return this.http.post(url, params)
      .toPromise()
      .then(response => {
          return response['partidos'] as Array<Partido>;
        }
      );
  }

  asociarUsuarios(params): Promise<boolean> {
    const url = 'http://dev.tenis-mesa.com/AsociarUsuariosCtrl';
    return this.http.post(url, params)
      .toPromise()
      .then(response => {
          return response['estadoAsociacion'] as boolean;
        }
      );
  }

}
