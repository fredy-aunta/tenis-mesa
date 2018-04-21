import { Component, OnInit, trigger, state, style, animate, transition } from '@angular/core';
import {AlertService} from '../../_services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.less'],
  animations: [
    trigger('alertState', [
      state('inactive', style({
        opacity: 0
      })),
      state('active',   style({
        opacity: 1
      })),
      transition('void => inactive', [
        style({opacity: 0}),
        animate(150)
      ]),
      transition('inactive => void', [
        animate(150, style({opacity: 0}))
      ]),
      transition('void => active', [
        style({opacity: 1}),
        animate(150)
      ]),
       transition('inactive => active', [
        style({opacity: 1}),
        animate(250)
      ]),
      transition('active => void', [
        animate(250, style({opacity: 0}))
      ])
    ])
  ]
})
export class AlertComponent implements OnInit {

  /**
   * @ngdoc model
   * @description message
  */
  message: any;

  /**
   * @ngdoc model
   * @description state
  */
  state: any = 'inactive';

  /**
   * @ngdoc model
   * @description icon
  */
  icon: string;

  constructor(private alertService: AlertService) { }


  /**
   * @ngdoc method
   * @name ngOnInit()
   * @description Initial function of the class
  */
  ngOnInit() {

    /**
     * @ngdoc method
     * @name ngOnInit()
     * @description Suscribe through service event show alert
    */
    this.alertService.getAddObservable().subscribe(message => {
      if(message) {
        this.message = message;
        this.icon = message.icon;
        this.state = message.status;
      }
    });

    /**
     * @ngdoc method
     * @name ngOnInit()
     * @description Suscribe through service event remove alert
    */
    this.alertService.getRemoveObservable().subscribe(data => {
      if(data) {
        this.state = data.status;
        this.message = null;
      }
    });
  }

}
