import { Router } from '@angular/router';
import { CartService } from './../../../cart.service';
import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../shared/services/category/category.service';

@Component({ 
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  account = sessionStorage.getItem('c_name');
  categories = [];

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private cartService:CartService
  ) {

    this.getCategories();
    this.cartService.cartSubject.subscribe((data)=>{
      this.cartItem=data;
    });
    this.cartService.cartSubject.next(this.cartItem);
  }

  ngOnInit() {
    this.cartitemFunc();
  }

  logout() {
    sessionStorage.removeItem('c_jwt');
    sessionStorage.removeItem('c_role');
    sessionStorage.removeItem('c_name');
    sessionStorage.removeItem('jwt');
    window.location.reload();
  }
  cartItem:any= 0;
  cartitemFunc(){
    if(localStorage.getItem('localCart')!=null){
      var count=JSON.parse(localStorage.getItem('localCart'));
      //  console.log(count);
       this.cartItem=count.length;

    }

  }
  getCategories() {
    this.categoryService.getCategories().subscribe((serverResponse) => {
      if (serverResponse) {
        if (serverResponse.response) {
          this.categories = serverResponse.data.categories;
          //console.log(serverResponse.data.subCategories);
        } else {
          console.log(serverResponse.error);
        }
      } else {
        console.log("error");
      }
    });
  }
  trackOrder() {
    if (sessionStorage.getItem('c_jwt')) {
      if (sessionStorage.getItem('c_role') === 'user') {
        this.router.navigate(['userOrders']);
      } else {
        this.router.navigate(['login']);
      }
    } else {
      this.router.navigate(['login']);
    }
  }
}
