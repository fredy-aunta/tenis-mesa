import {Component, OnInit} from '@angular/core';
import {ModalService} from '../../_services/modal.service';
import {AuthenticationService} from '../../_services/authentication.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {TaxpayerUserLoggedInResponse} from "../../_model/taxpayer-user-logged-in-response.model";

@Component({
  selector: 'beitech-taxpayer-user',
  templateUrl: './receipt-redirect.component.html'
})
export class ReceiptRedirectComponent implements OnInit {

  public requestInProgress: boolean;

  public taxpayerUserLoggedInResponse: TaxpayerUserLoggedInResponse;

  constructor(
    public modalService: ModalService,
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
  ) {

  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['encodeUser']) {
        var decodeUser = atob(params['encodeUser']);
        if (decodeUser) {


          this.taxpayerUserLoggedInResponse = JSON.parse(decodeUser);
          this.authenticationService.registerLoginData(this.taxpayerUserLoggedInResponse);

          if (this.taxpayerUserLoggedInResponse.taxpayerUser.termsAndConditions === null) {

            this.router.navigate(['/auth/registration-facebook']);
          } else {
            this.router.navigate(['/taxpayer/dashboard']);
          }

        }
      }
    });
  }


}
