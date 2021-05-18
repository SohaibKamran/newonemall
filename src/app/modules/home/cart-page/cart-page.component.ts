import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { environment } from 'src/environments/environment';
 
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  quantity: any;
  cart: any; 
  total = 0;
  server = environment.apiServer;

  constructor(private cartService: CartService) {}
  getcartDetail:any=[];

  ngOnInit() {
    this.loadCart();
    this.totalPrice();
  }


 
  plus(id,productQuantity){  
    for(let i=0;i<this.cart.length;i++){
      if(this.cart[i].product._id===id){
        if(productQuantity !=5 ){
        this.cart[i].productQuantity=parseInt( productQuantity)+1;
       
      }
    }
     localStorage.setItem('localCart',JSON.stringify(this.cart));
     this.totalPrice();
    }
  }


  minus(id,productQuantity){
    for(let i=0;i<this.cart.length;i++){
      if(this.cart[i].product._id===id){
        if(productQuantity != 1 ){
        this.cart[i].productQuantity=parseInt(productQuantity)-1;
      }
    }
   localStorage.setItem('localCart',JSON.stringify(this.cart));
   this.totalPrice();
    }
  }


  loadCart(){
    if(localStorage.getItem('localCart')){
      this.cart=JSON.parse(localStorage.getItem('localCart'));
      for(let i=0 ; i < this.cart.length; i++){
        console.log("This is cart product ",this.cart[i].product.thumbnail);
      }
      
    }
  }

  CartNum:any=0;
  CartNumFunc(){
    if(localStorage.getItem('localCart')!=null){
      var cartValue=JSON.parse(localStorage.getItem('localCart'));
       this.CartNum=cartValue.length;
       this.cartService.cartSubject.next(this.CartNum);
       console.log(this.CartNum);
    } 
    else{
      this.CartNum=0;
      this.cartService.cartSubject.next(this.CartNum);
    }
  }
  
  totalPrice(){
    let sum = 0;
    for(let i=0;i<this.cart.length;i++){
      sum= sum+ (this.cart[i].product.salesPrice * this.cart[i].productQuantity);
    }
    this.total=sum;
    console.log('!st Total sum of usama = ',this.total);
    localStorage.setItem('localCart',JSON.stringify(this.cart));
  }
  
  deleteItem(item){
    console.log(item);
    if(localStorage.getItem('localCart')){
      this.cart=JSON.parse(localStorage.getItem('localCart'));
      for(let i=0; i<this.cart.length;i++){
        if(this.cart[i].product._id=== item._id){
          this.cart.splice(i,1);
          localStorage.setItem('localCart',JSON.stringify(this.cart));
          this.CartNumFunc();
          this.loadCart();
          this.totalPrice();
        }
      }
    }
  } 
  
}
