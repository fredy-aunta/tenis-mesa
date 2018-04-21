/**
 * @ngdoc enum
 * @name TypesOfErrors
 * @author Cristian Quintero <cristian.quintero@beitech.co>
 * @description Enum Types of errors
*/
export enum TypesOfErrors {
    ERROR = <any>'error',
    SUCCESS = <any>'success',
    WARNING = <any>'warning',
    INFO = <any>'info',
}

/**
 * @ngdoc class
 * @name AlertSettings
 * @author Cristian Quintero <cristian.quintero@beitech.co>
 * @description Alert settings model
*/
export class AlertSettings {
    /**
     * @ngdoc model
     * @description message
    */
    message: string;

    /**
     * @ngdoc model
     * @description autoHide
    */

    autoHide = true;
    /**
     * @ngdoc model
     * @description keepAfterNavigationChange
    */
    keepAfterNavigationChange = false;

    /**
     * @ngdoc model
     * @description alertType
    */
    alertType: TypesOfErrors;

    /**
     * @ngdoc model
     * @description timeOutHide
    */
    timeOutHide: number;

    /**
     * @ngdoc model
     * @description icon
    */
    icon: string;
}
