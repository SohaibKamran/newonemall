import { CartService } from './../../../cart.service';
import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../shared/services/product/product.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ClientService} from '../../../shared/services/client/client.service';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  product: any;
  id = '';
  quantity = 1;
  addedToCart: false;
  message: { type: string; text: string } = null;
  server = environment.apiServer;
  isLoading=true;

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: ClientService
  ) {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.getProducts();
      }
    );
  }

  ngOnInit() {} 
  itemCart:any=[];
 
  getProducts() {
    this.productService.getOne(this.id)
      .subscribe(serverResponse => {
        if (serverResponse) {
          this.isLoading=false;
          if (serverResponse.response) {
            this.product = serverResponse.data.products[0];
          } else {
            console.log(serverResponse.error);
          }
        } else {
          console.log('error');
        }
      });
  }

  addToCart() {
    if (sessionStorage.getItem('c_jwt')) {
      if (sessionStorage.getItem('c_role') === 'user') {
        const cartItem = {product: this.product, productQuantity:1};
        this.submitProductToCart(cartItem);
      } else {
        this.router.navigate(['login']);
      }
    } else {
      this.router.navigate(['login']);
    }
  }

  CartitemDetail(){
    if(localStorage.getItem('localCart')){
      this.itemCart=JSON.parse(localStorage.getItem('localCart'));
      console.log(this.itemCart);
    }
  }

  submitProductToCart(item) {
    let cartDataNull = localStorage.getItem('localCart');
    if(cartDataNull === null){
      console.log(cartDataNull)
      let storeDataGet:any=[];
      storeDataGet.push(item);
      localStorage.setItem('localCart',JSON.stringify(storeDataGet));
      console.log("Its first time");      
      this.message = {
        type: 'success',
        text: 'Product added to cart'
      };
    }
    else{
      var id=null;
      this.itemCart=JSON.parse(localStorage.getItem('localCart')); 
      for(let i=0; i<this.itemCart.length;i++){
        if(this.itemCart[i].product._id===item.product._id){
          id=this.itemCart[i].product._id;
          break;
        }
      }
      if(id){
        console.log("Already Added dont add "); 
        this.message = {
          type: 'danger',
          text: 'Product is already Added'
        }
      }else{
        console.log("Product Added ");
        this.itemCart.push(item);
        localStorage.setItem('localCart',JSON.stringify(this.itemCart));
        this.message = {
          type: 'success',
          text: 'Product added to cart'
        }
      }
    }
    this.CartNumFunc();
  }

  CartNum:any=0;
  CartNumFunc(){
    if(localStorage.getItem('localCart')!=null){
      var cartValue=JSON.parse(localStorage.getItem('localCart'));
       this.CartNum=cartValue.length;
       this.cartService.cartSubject.next(this.CartNum);
       console.log(this.CartNum);
    } 
  }
}
