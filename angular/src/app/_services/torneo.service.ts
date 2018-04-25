import {Injectable} from '@angular/core';
import {Torneo} from '../_model/Torneo';
import 'rxjs/add/operator/toPromise';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../_model/User';

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

}
