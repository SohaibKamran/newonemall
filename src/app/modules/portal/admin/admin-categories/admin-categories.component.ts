import { Component, OnInit } from '@angular/core';
import {SellerService} from '../../../../shared/services/Seller/seller.service';
import {ProductService} from '../../../../shared/services/product/product.service';
import {Router} from '@angular/router';
import {CategoryService} from '../../../../shared/services/category/category.service';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.scss']
})
export class AdminCategoriesComponent implements OnInit {

  categories = [];
  message = null;
  isLoading = 1;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
  ) {
    this.getCategories();
  }

  ngOnInit() {
  }

  getCategories() {
    this.categoryService.getCategories()
      .subscribe(serverResponse => {
        if (serverResponse) {
          if (serverResponse.response) {
            this.categories = serverResponse.data.categories;
            console.log("catogories = ",this.categories);
          } else {
            console.log(serverResponse.error);
          }
        } else {
          console.log('error');
        }
      });
  }

  addCategory() {
    this.router.navigate(['manage/seller/product/add']);
  }

  editCategory(product: any) {
    this.router.navigate(['manage/seller/product/edit/' + product._id]);
  }

  deleteCategory(product: any) {
    // this.categoryService.getCategories(product._id)
    //   .subscribe(serverResponse => {
    //     if (serverResponse) {
    //       if (serverResponse.response) {
    //         console.log('deleted');
    //         this.products = this.products.filter(prod => prod !== product);
    //         this.message = {
    //           text: 'Product deleted',
    //           type: 'warning'
    //         };
    //       } else {
    //         console.log(serverResponse.error);
    //         this.message = {
    //           text: 'Error While deleting product',
    //           type: 'danger'
    //         };
    //       }
    //     } else {
    //       console.log('error');
    //       this.message = {
    //         text: 'Error While deleting product',
    //         type: 'danger'
    //       };
    //     }
    //   });
  }
}
