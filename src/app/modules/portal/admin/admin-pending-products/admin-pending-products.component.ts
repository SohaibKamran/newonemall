import { Component, OnInit } from '@angular/core';
import {SellerService} from '../../../../shared/services/Seller/seller.service';
import {ProductService} from '../../../../shared/services/product/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-pending-products',
  templateUrl: './admin-pending-products.component.html',
  styleUrls: ['./admin-pending-products.component.scss']
})
export class AdminPendingProductsComponent implements OnInit {

  products = [];
  message = null;
  isLoading = 0;

  constructor(
    private productService: ProductService,
    private router: Router,
  ) {
    this.getProducts();
  }

  ngOnInit() {
  }

  getProducts() {
    this.productService.getPending()
      .subscribe(serverResponse => {
        if (serverResponse) {
          if (serverResponse.response) {
            this.products = serverResponse.data.products;
          } else {
            console.log(serverResponse.error);
          }
        } else {
          console.log('error');
        }
      });
  }

  approveProduct(product) {
    this.productService.approve(product._id)
      .subscribe(serverResponse => {
        if (serverResponse) {
          if (serverResponse.response) {
            console.log('approved');
            this.products = this.products.filter(prod => prod !== product);
            this.message = {
              text: 'Product approved',
              type: 'success'
            };
          } else {
            console.log(serverResponse.error);
            this.message = {
              text: 'Error while approving product',
              type: 'danger'
            };
          }
        } else {
          console.log('error');
          this.message = {
            text: 'Error while approving product',
            type: 'danger'
          };
        }
      });
  }

  rejectProduct(product) {
    this.productService.reject(product._id)
      .subscribe(serverResponse => {
        if (serverResponse) {
          if (serverResponse.response) {
            console.log('rejected');
            this.products = this.products.filter(prod => prod !== product);
            this.message = {
              text: 'Product rejected',
              type: 'warning'
            };
          } else {
            console.log(serverResponse.error);
            this.message = {
              text: 'Error while rejecting product',
              type: 'danger'
            };
          }
        } else {
          console.log('error');
          this.message = {
            text: 'Error while rejecting product',
            type: 'danger'
          };
        }
      });
  }

}

