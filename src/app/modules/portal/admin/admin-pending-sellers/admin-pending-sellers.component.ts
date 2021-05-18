import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../../shared/services/category/category.service';
import {Router} from '@angular/router';
import {SellerService} from '../../../../shared/services/Seller/seller.service';

@Component({
  selector: 'app-admin-pending-sellers',
  templateUrl: './admin-pending-sellers.component.html',
  styleUrls: ['./admin-pending-sellers.component.scss']
})
export class AdminPendingSellersComponent implements OnInit {

  sellers = [];
  message = null;
  isLoading = 0;

  constructor(
    private sellerService: SellerService,
    private router: Router,
  ) {
    this.getSellers();
  }

  ngOnInit() {
  }

  getSellers() {
    this.sellerService.getPending()
      .subscribe(serverResponse => {
        console.log(serverResponse);
        if (serverResponse) {
          if (serverResponse.response) {
            this.sellers = serverResponse.data.sellers;
          } else {
            console.log(serverResponse.error);
          }
        } else {
          console.log('error');
        }
      });
  }

  approveSeller(seller) {
    this.sellerService.approve(seller._id)
      .subscribe(serverResponse => {
        if (serverResponse) {
          if (serverResponse.response) {
            console.log('approved');
            this.sellers = this.sellers.filter(sell => sell !== seller);
            this.message = {
              text: 'Seller approved',
              type: 'success'
            };
          } else {
            console.log(serverResponse.error);
            this.message = {
              text: 'Error while approving seller',
              type: 'danger'
            };
          }
        } else {
          console.log('error');
          this.message = {
            text: 'Error while approving seller',
            type: 'danger'
          };
        }
      });
  }

  rejectSeller(seller) {
    this.sellerService.reject(seller._id)
      .subscribe(serverResponse => {
        if (serverResponse) {
          if (serverResponse.response) {
            console.log('rejected');
            this.sellers = this.sellers.filter(sell => sell !== seller);
            this.message = {
              text: 'Seller rejected',
              type: 'warning'
            };
          } else {
            console.log(serverResponse.error);
            this.message = {
              text: 'Error while rejecting seller',
              type: 'danger'
            };
          }
        } else {
          console.log('error');
          this.message = {
            text: 'Error while rejecting seller',
            type: 'danger'
          };
        }
      });
  }
}
