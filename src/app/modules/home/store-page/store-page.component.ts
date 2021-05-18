import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../shared/services/product/product.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {environment} from '../../../../environments/environment';
import {SellerService} from '../../../shared/services/Seller/seller.service';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.scss']
})
export class StorePageComponent implements OnInit {
  products: any;
  seller: any;
  private id: any;
  server = environment.apiServer;

  constructor(
    private productService: ProductService,
    private sellerService: SellerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        console.log("id = ",this.id);
        this.id = params['id'];
        console.log("id = ",this.id);
        this.getProducts();
        this.getSeller();
      }
    );
  }

  getProducts() {
    this.productService.getSellerProducts(this.id)
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

  getSeller() {
    this.sellerService.getOne(this.id)
      .subscribe(serverResponse => {
        if (serverResponse) {
          console.log(serverResponse);
          if (serverResponse.response) {
            this.seller = serverResponse.data.sellers;
          } else {
            console.log(serverResponse.error);
          }
        } else {
          console.log('error');
        }
      });
  }
}
