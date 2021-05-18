import { Component, OnInit } from '@angular/core';
import {SellerService} from '../../../../shared/services/Seller/seller.service';

@Component({
  selector: "app-seller-dashboard",
  templateUrl: "./seller-dashboard.component.html",
  styleUrls: ["./seller-dashboard.component.scss"],
})
export class SellerDashboardComponent implements OnInit {
  products = [
  ];
  orders = [];
  messages = "23";
  earning = "$1223";
  id = sessionStorage.getItem("id");

  constructor(private sellerService: SellerService) {
    this.getProducts();
    this.getOrders();
  }

  ngOnInit() {}

  getProducts() {
    this.sellerService.getSellerProducts().subscribe((serverResponse) => {
      if (serverResponse) {
        if (serverResponse.response) {
          this.products = serverResponse.data.products;
        } else {
          console.log(serverResponse.error);
        }
      } else {
        console.log("error");
      }
    });
  }

  getOrders() {
    this.sellerService.getSellerOrders(this.id)
      .subscribe(serverResponse => {
        if (serverResponse) {
          console.log(serverResponse);
          if (serverResponse.response) {
            this.orders = serverResponse.data.sellers;
            console.log("Sellers Orders = ",this.orders);
            // this.getPendingOrders();
          } else {
            console.log(serverResponse.error);
          }
        } else {
          console.log('error');
        }
      });
  }
}
