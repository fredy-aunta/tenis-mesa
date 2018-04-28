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
    const url = 'http://dev.tenis-mesa.com/ConsultarUsuariosCtrl/users';
    return this.http.get(url)
      .toPromise()
      .then(response => {
          return response['usuarios'] as Array<User>;
        }
      );
  }

  getPlayers(): Promise<Array<User>> {
    const url = 'http://dev.tenis-mesa.com/ConsultarUsuariosCtrl/jugadores';
    return this.http.get(url)
      .toPromise()
      .then(response => {
          return response['jugadores'] as Array<User>;
        }
      );
  }

  getReferees(): Promise<Array<User>> {
    const url = 'http://dev.tenis-mesa.com/ConsultarUsuariosCtrl/arbitros';
    return this.http.get(url)
      .toPromise()
      .then(response => {
          return response['arbitros'] as Array<User>;
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

  getUserSession(): Promise<User> {
    const url = 'http://dev.tenis-mesa.com/ConsultarUsuarioCtrl/';
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

  createUser(params): Promise<User> {
    const url = 'http://dev.tenis-mesa.com/CrearUsuarioCtrl/';
    return this.http.post(url, params)
      .toPromise()
      .then(response => {
          return response['usuarioCreado'] as User;
        }
      );
  }
}

