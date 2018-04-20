import { InjectionToken } from '@angular/core';
import { environment } from '../environments/environment';
import { AppConfig } from './app.config.interface';

/**
 * Based on https://angular.io/guide/dependency-injection#injection-token
 */

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export const TM_APP_CONFIG: AppConfig = {
  apiEndpoint: environment.apiEndpoint,
  appHost: environment.appHost
};
