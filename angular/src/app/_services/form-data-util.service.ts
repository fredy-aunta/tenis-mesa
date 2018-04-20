import {AuthenticationService} from './authentication.service';
import {Injectable, Inject} from '@angular/core';

@Injectable()
export class FormDataUtil {

  readonly propertiesLoggedUser = ['fkIdTaxpayerUser'];

  constructor(private authenticationService: AuthenticationService) {
  }



  public copyFormToObject(formValueObject: Object, objectModel: Object, classMetadata: Object): any {

    for (const propertyName in formValueObject) {
      if (propertyName.substring(propertyName.length - 9) === 'FormGroup') {
        this.copyFormToObject(formValueObject[propertyName], objectModel, classMetadata);
      }

      if (this.isCalendarDate(formValueObject[propertyName])) {
        formValueObject[propertyName] = this.formatCalendarDate(formValueObject[propertyName]);
      }

      if (this.hasProperty(classMetadata, propertyName)) {
        objectModel[propertyName] = formValueObject[propertyName];
      }
    }

    this.addLoggedUserData(objectModel, classMetadata);

    return objectModel;
  }

  private hasProperty(obj, prop): boolean {
    if (obj === null) {
      return false;
    }
    const proto = obj.__proto__ || obj.constructor.prototype;
    return (prop in obj) &&
      (!(prop in proto) || proto[prop] !== obj[prop]);
  }


  private addLoggedUserData(objectModel: Object, classMetadata: Object): void {
    if (this.authenticationService.isLoggedIn()) {
      for (let i = 0; i < this.propertiesLoggedUser.length; i++) {
        const propertyName = this.propertiesLoggedUser[i];
        if (this.hasProperty(classMetadata, propertyName)) {
          objectModel[propertyName] = this.authenticationService.user.id;
        }
      }
    }
  }


  private isCalendarDate(value: any): boolean {
    return value !== undefined && value != null && typeof value === 'object' && this.hasProperty(value, 'date');
  }


  private formatCalendarDate(value): string {
    return value['date']['day'] + '-' + value['date']['month'] + '-' + value['date']['year'];
  }


  public clearData(formValueObject: Object, objectModel: Object, classMetadata: Object): any {
    for (const propertyName in formValueObject) {
      if (propertyName.substring(propertyName.length - 9) === 'FormGroup') {
        this.clearData(formValueObject[propertyName], objectModel, classMetadata);
      }

      if (this.hasProperty(classMetadata, propertyName)) {
        objectModel[propertyName] = null;
      }
    }

  }

}

