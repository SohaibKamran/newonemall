import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../shared/services/product/product.service';
import {SellerService} from '../../../shared/services/Seller/seller.service';
import {CategoryService} from '../../../shared/services/category/category.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  salesProducts = [];
  products = [];
  categories = [];
  sellers = [];
  

  constructor(
    private productService: ProductService,
    private sellerService: SellerService,
    private categoryService: CategoryService
  ) {
    this.getProducts();
    this.getSellers();
    this.getCategories();
  }

  ngOnInit() {

  }

  getProducts() {
    this.productService.getAll()
      .subscribe(serverResponse => {
        if (serverResponse) {
          if (serverResponse.response) {
            this.products = serverResponse.data.products;
            // console.log("produsts = ",this.products)

            this.salesProducts = this.products;
            
          } else {
            console.log(serverResponse.error);
          }
        } else {
          console.log('error');
        }
      });
  }

  getSellers() {
    this.sellerService.getAll()
      .subscribe(serverResponse => {
        if (serverResponse) {
          if (serverResponse.response) {
            this.sellers = serverResponse.data.sellers;

            this.salesProducts = this.products;
          } else {
            console.log(serverResponse.error);
          }
        } else {
          console.log('error');
        }
      });
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((serverResponse) => {
      if (serverResponse) {
        if (serverResponse.response) {
          this.categories = serverResponse.data.categories;
          console.log(this.categories);
          this.salesProducts = this.products;
        } else {
          console.log(serverResponse.error);
        }
      } else {
        console.log("error");
      }
    });
  }

}
