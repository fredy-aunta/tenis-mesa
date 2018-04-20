import { Injectable, Inject } from '@angular/core';
import { AppConfig } from '../app.config.interface';
import { APP_CONFIG } from '../app.config';

@Injectable()
export class RestServiceUtil {

  private apiUrl;

  constructor(@Inject(APP_CONFIG) APP_CONFIG: AppConfig) {
    this.apiUrl =  APP_CONFIG.apiEndpoint;
  }

  public getEndPoint(path: string): string {
    return this.apiUrl + path;
  }

}
