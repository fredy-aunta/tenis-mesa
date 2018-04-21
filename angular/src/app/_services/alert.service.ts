import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import {AlertSettings, TypesOfErrors} from '../_core/alert/model/alert-settings.model';
import {RESPONSE_MESSAGES} from '../app.contants';



/**
 * @ngdoc Injectable
 * @name AlertService
 * @author Fredys Romero <fredys.romero@beitech.co>
 * @description Based on http://jasonwatmore.com/post/2016/09/29/angular-2-user-registration-and-login-example-tutorial#alert-service-ts
*/
@Injectable()
export class AlertService {

  /**
   * @ngdoc model
   * @description addSubject
  */
  private addSubject = new Subject<any>();

  /**
   * @ngdoc model
   * @description removeSubject
  */
  private removeSubject = new Subject<any>();

  /**
   * @ngdoc model
   * @description keepAfterNavigationChange
  */
  private keepAfterNavigationChange = false;

  constructor(private router: Router) {
    // clear alert message on route change
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    this.keepAfterNavigationChange = false;
                } else {
                    // clear alert
                    this.addSubject.next();
                }
            }
        });
    }

    /**
     * @ngdoc method
     * @name this.success()
     * @description Config success and show alert
    */
    showSuccess() {
      const alertSettings = new AlertSettings();
      alertSettings.message = RESPONSE_MESSAGES.SUCCESS.REQUEST_API;
      alertSettings.alertType = TypesOfErrors.SUCCESS;
      alertSettings.icon = 'fa-check';
      this.show(alertSettings);
    }

    /**
     * @ngdoc method
     * @name this.error()
     * @description Config error and show alert
    */
    showError() {
      const alertSettings = new AlertSettings();
      alertSettings.message = RESPONSE_MESSAGES.ERROR.REQUEST_API;
      alertSettings.alertType = TypesOfErrors.ERROR;
      alertSettings.icon = 'fa-exclamation';
      this.show(alertSettings);
    }

    /**
    * @ngdoc method
    * @name this.formError()
    * @description Config and form error and show alert
   */
    showFormError() {
      const alertSettings = new AlertSettings();
      alertSettings.message = RESPONSE_MESSAGES.ERROR.FORM;
      alertSettings.alertType = TypesOfErrors.ERROR;
      alertSettings.icon = 'fa-exclamation-triangle';
      this.show(alertSettings);
    }

    /**
     * @ngdoc method
     * @name this.remove()
     * @description Remove alert
    */
    remove(timeOutHide: number) {
        this.removeAlert(timeOutHide);
    }

    /**
     * @ngdoc method
     * @name this.show()
     * @description Add configuration alert
     */
    show(alertSettings: AlertSettings) {
      this.setAlert(alertSettings.message, alertSettings.alertType, alertSettings.icon, alertSettings.keepAfterNavigationChange);
      if (alertSettings.autoHide) {
        this.remove(alertSettings.timeOutHide);
      }
    }

    /**
     * @ngdoc method
     * @name this.setAlert()
     * @description Set alert and use function next of the addSubject
    */
    setAlert(message: string, alertType: TypesOfErrors, icon: string = 'fa-exclamation' , keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.addSubject.next({ type: alertType, text: message, status: 'active', icon: icon });
    }

    /**
     * @ngdoc method
     * @name this.removeAlert()
     * @description Remove alert and use function next of the removeSubject
    */
    private removeAlert(timeOutHide = 3000) {
        setTimeout(() => {
            this.removeSubject.next({ status: 'inactive' });
        }, timeOutHide);
    }

    /**
     * @ngdoc method
     * @name this.getAddObservable()
     * @description Return addSubject as Observable
    */
    getAddObservable(): Observable<any> {
        return this.addSubject.asObservable();
    }

    /**
     * @ngdoc method
     * @name this.getAddObservable()
     * @description Return removeSubject as Observable
    */
    getRemoveObservable(): Observable<any> {
        return this.removeSubject.asObservable();
    }

}
