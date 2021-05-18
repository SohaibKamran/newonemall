import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from './../../../shared/services/client/client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { CartService } from 'src/app/cart.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  inputForm: FormGroup;
  PersonIcon: boolean = false;
  PhoneIcon: boolean = false;
  MapIcon: boolean = false;
  getcartDetail: any = [];
  id = sessionStorage.getItem('c_id');
  total = 0;
  constructor(private clientService: ClientService,
    private router: Router,
    private formBuilder: FormBuilder,
    private cartService: CartService) 
    {
      this.inputForm = this.formBuilder.group({
      FirstName: ["", Validators.required],
      LastName: ["", Validators.required],
      PhoneNo: ["", Validators.required],
      Address: ["", Validators.required],
      Province: ["", Validators.required],
      City: ["", Validators.required],
    });
  }



  ngOnInit() {
    this.loadCart();
    this.totalPrice();
  }

  get FirstName() {
    return this.inputForm.get("FirstName");
  }
  get LastName() {
    return this.inputForm.get("LastName");
  }
  get PhoneNo() {
    return this.inputForm.get("PhoneNo");
  }
  get Address() {
    return this.inputForm.get("Address");
  }
  get Province() {
    return this.inputForm.get("Province");
  }
  get City() {
    return this.inputForm.get("City");
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


  isLogin() {
    if (sessionStorage.getItem('c_jwt')) {
      if (sessionStorage.getItem('c_role') === 'user') {
        this.placeOrder();
      } else {
        this.router.navigate(['login']);
      }
    } else {
      this.router.navigate(['login']);
    }
  }

  placeOrder() {
    // debugger;
    let orders = [];
    let products = JSON.parse(localStorage.getItem('localCart'));
    console.log("Products", products.length);
    if (products.length != 0) {
      products.forEach(product => {
        let order = orders.filter(order => product.product.seller._id === order.sellerId);
        if (order && order.length != 0) {
          order[0].products.push({ productId: product.product._id, quantity: product.productQuantity });
        }
        else
        {
          let newOrder = { sellerId: product.product.seller._id, products: [] };
          newOrder.products.push({ productId: product.product._id, quantity: product.productQuantity });
          orders.push(newOrder);
        }
      });
      orders.forEach(order => {
        let orderData = {
          products: order.products,
          sellerId: order.sellerId,
          customer: {
            customerID: this.id,
            firstName: this.FirstName.value,
            lastName: this.LastName.value,
            address: this.Address.value,
            city: this.City.value,
            province: this.Province.value
          },
          paymentMethod: "COD",
          delivery: [{ method: "TCS", charger: "250" }]
        }
        console.log("this is order data", orderData);
        this.PlaceOrder(orderData);
      });
      console.log("Orders", orders.length);
      swal("Order Placed!", "Happy Shopping", "success");
      localStorage.removeItem("localCart");
      this.CartNumFunc();
      this.router.navigate(['']);
    }
    else {
      swal("Failed!", "No Product in cart", "warning");
    }
  }

  PlaceOrder(data): void {
    this.clientService.placeOrder(data)
      .subscribe(serverResponse => {
        if (serverResponse) {
          console.log(serverResponse.response);
          console.log("anything");
        }
        else {
          console.log("error");
        }
      });
  }

  loadCart() {
    if (localStorage.getItem('localCart')) {
      this.getcartDetail = JSON.parse(localStorage.getItem('localCart'));
      console.log(this.getcartDetail);
    }
  }

  totalPrice() {
    let sum = 0;
    for (let i = 0; i < this.getcartDetail.length; i++) {
      sum = sum + (this.getcartDetail[i].product.salesPrice * this.getcartDetail[i].productQuantity);
    }
    this.total = sum;
    console.log('!st Total on check out = ', this.total);
    localStorage.setItem('localCart', JSON.stringify(this.getcartDetail));
  }

  personIcon() {
    this.PersonIcon = true;
  }
  phoneIcon() {
    this.PhoneIcon = true;
  }
  mapIcon() {
    this.MapIcon = true;
  }

}
