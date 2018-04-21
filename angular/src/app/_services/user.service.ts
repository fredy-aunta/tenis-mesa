import {Injectable} from '@angular/core';
import {User} from '../_model/User';
import 'rxjs/add/operator/toPromise';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class UserService {

  httpOptions: any;

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

  getUsers(): Promise<Array<User>> {

    const url = 'http://dev.tenis-mesa.com/ConsultarUsuariosCtrl';
    return this.http.get(url)
      .toPromise()
      .then(response => {
          return response as Array<User>;
        }
      );
  }

  getUser(id: string): Promise<User> {
    const url = 'http://dev.tenis-mesa.com/ConsultarUsuarioCtrl/' + id;
    return this.http.get(url)
      .toPromise()
      .then(response => {
        return response as User;
      }

    );
  }

  loginUser(params: any): Promise<User> {
    const url = 'http://dev.tenis-mesa.com/IniciarSesionCtrl/';
    return this.http.post(url, params)
      .toPromise()
      .then(response => {
          return response['usuarioLogueado'] as User;
        }

      );
  }
}

