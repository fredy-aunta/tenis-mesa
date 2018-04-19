import {Injectable} from '@angular/core';
import {Torneo} from '../_model/Torneo';
import 'rxjs/add/operator/toPromise';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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

  getTorneos() {
    const url = 'http://dev.tenis-mesa.com/ConsultarTorneosCtrl';
    return this.http.get<Array<Torneo>>(url);
  }

  getTorneo(id: string) {
    const url = 'http://dev.tenis-mesa.com/ConsultarTorneoCtrl/' + id;
    return this.http.get<Torneo>(url);
  }
}
