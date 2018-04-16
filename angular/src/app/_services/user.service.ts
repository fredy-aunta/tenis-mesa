import {Injectable} from '@angular/core';
import {User} from '../_model/User';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private http: Http) {
  }

  getUsers(): Promise<Array<User>> {
    const url = 'dev.tenis-mesa.com/ConsultarUsuariosCtrl';
    return this.http.post(url, '', {})
      .toPromise()
      .then(response => {
        return response.json() as Array<User>;
      });
  }

}

