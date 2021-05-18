import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../shared/services/product/product.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {

  products = [];
  private productList = [];
  id = '';
  minPrice: number;
  maxPrice: number;
  warrantyCB = false;
  codCB = false;
  fhdCB = false;
  stars = 5;
  returnsCB = false;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.getProducts();
      }
    );
  }

  ngOnInit() {
  }

  getProducts() {
    this.productService.getCategoryProducts(this.id)
      .subscribe(serverResponse => {
        if (serverResponse) {
          if (serverResponse.response) {
            this.productList = serverResponse.data.products;
            this.products = this.productList;
          } else {
            console.log(serverResponse.error);
          }
        } else {
          console.log('error');
        }
      });
  }

  applyFilter() {
    this.products = this.productList;
    console.log(this.products);
    if (this.minPrice) {
      this.products = this.products.filter( product => product.salesPrice >= this.minPrice );
    }
    if (this.maxPrice) {
      this.products = this.products.filter( product => product.salesPrice <= this.maxPrice );
    }
    if (this.warrantyCB) {
      this.products = this.products.filter( product => product.warranty === this.warrantyCB );
    }
    if (this.codCB) {
      this.products = this.products.filter( product => product.cod === this.codCB );
    }
    if (this.fhdCB) {
      this.products = this.products.filter( product => product.fhd === this.fhdCB );
    }
    if (this.returnsCB) {
      this.products = this.products.filter( product => product.return === this.returnsCB );
    }
    this.products = this.products.filter( product => product.ratings >= this.stars );
  }

  applyPrice() {
    this.applyFilter();
  }

  warranty() {
    this.warrantyCB = !this.warrantyCB;
    this.applyFilter();
  }

  cod() {
    this.codCB = !this.codCB;
    this.applyFilter();
  }

  fhd() {
    this.fhdCB = !this.fhdCB;
    this.applyFilter();
  }

  return() {
    this.returnsCB = !this.returnsCB;
    this.applyFilter();
  }

  setStar(star: number) {
    this.stars = star;
    console.log(this.stars);
    this.applyFilter();
  }
}
