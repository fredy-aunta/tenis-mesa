import {Injectable} from '@angular/core';
import {User} from '../_model/User';
import 'rxjs/add/operator/toPromise';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class UserService {

  httpOptions: any;
  private userUrl = 'http://dev.tenis-mesa.com/ConsultarUsuarioCtrl'

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers : new HttpHeaders({
        // 'Access-Control-Allow-Origin' : 'http://localhost:4200',
        // 'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT, DELETE',
        'Content-Type': 'application/json',
        // 'Accept': 'application/json'
      })
    };
  }

  getUsers() {
    const url = 'http://dev.tenis-mesa.com/ConsultarUsuariosCtrl';
    return this.http.get<Array<User>>(url);
  }

  getUser(id: string) {
    const url = 'http://dev.tenis-mesa.com/ConsultarUsuarioCtrl/' + id;
    return this.http.get<User>(url);
  }
}

