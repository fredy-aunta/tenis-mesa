import {Injectable} from '@angular/core';
import {Partido} from '../_model/Partido';
import 'rxjs/add/operator/toPromise';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Torneo} from '../_model/Torneo';

@Injectable()
export class PartidoService {

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

  getPartidosTorneo(id: string): Promise<Array<Partido>> {
    const url = 'http://dev.tenis-mesa.com/ConsultarPartidosTorneoCtrl/' + id;
    return this.http.get(url)
      .toPromise()
      .then(response => {
          return response as Array<Partido>;
        }
      );
  }

  getPartido(id: string): Promise<Partido> {
    const url = 'http://dev.tenis-mesa.com/ConsultarPartidoCtrl/' + id;
    return this.http.get(url)
      .toPromise()
      .then(response => {
          return response as Partido;
        }
      );
  }

  updateGame(params): Promise<Partido> {
    const url = 'http://dev.tenis-mesa.com/ModificarPartidoCtrl/';
    return this.http.put(url, params)
      .toPromise()
      .then(response => {
          return response['partido'] as Partido;
        }
      );
  }

}
