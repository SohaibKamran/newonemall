import { SellerService } from './../../../../shared/services/Seller/seller.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: "app-seller-orders",
  templateUrl: "./seller-orders.component.html",
  styleUrls: ["./seller-orders.component.scss"],
})
export class SellerOrdersComponent implements OnInit {
  All=[];
  pending = [];
  shipped=[];
  delivered=[];
  readyToShip=[];
  failed=[];
  returned=[]; 
  cancelled=[];
  orders = [];
  model;
  status;
  isLoading = 0;
  id = sessionStorage.getItem("id");

  constructor(private sellerService:SellerService,private router: Router) {
    this.getOrders()
  }

  ngOnInit() {}

  statusChange(value:String){

  }

  
  getOrders() {
    this.sellerService.getSellerOrders(this.id)
      .subscribe(serverResponse => {
        if (serverResponse) {
          console.log(serverResponse);
          if (serverResponse.response) {
            this.All = serverResponse.data.sellers;
            this.orders=this.All;
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

  getAll(){
    this.orders=this.All;

  }

  getPendingOrders() {
    this.orders=this.All;
    for(let i=0;i<this.orders.length;i++){
      if(this.orders[i].orderStatus==="pending")
        this.pending[i]=this.orders[i];
    }
    this.orders=this.pending;
  }

  getReadyToShipOrders() {
    this.orders=this.All;
    for(let i=0;i<this.orders.length;i++){
      if(this.orders[i].orderStatus==="ReadyToShip")
        this.readyToShip[i]=this.orders[i];
    }
    this.orders=this.readyToShip;
  }

  getShippedOrders(){
    this.orders=this.All;
    for(let i=0;i<this.orders.length;i++){
      if(this.orders[i].orderStatus==="shipped")
        this.shipped[i]=this.orders[i];
    }
    this.orders=this.shipped;

  }

  getDeliveredOrders(){
    this.orders=this.All;
    for(let i=0;i<this.orders.length;i++){
      if(this.orders[i].orderStatus==="delivered")
        this.delivered[i]=this.orders[i];
    }
    this.orders=this.delivered;
  }

  getCancelledOrders(){
    this.orders=this.All;
    for(let i=0;i<this.orders.length;i++){
      if(this.orders[i].orderStatus==="cancelled")
        this.cancelled[i]=this.orders[i];
    }
    this.orders=this.cancelled;
  }
  getReturnedOrders(){
    this.orders=this.All;
    for(let i=0;i<this.orders.length;i++){
      if(this.orders[i].orderStatus==="returned")
        this.returned[i]=this.orders[i];
    }
    this.orders=this.returned;
  }
  getFailedDelivery(){
    this.orders=this.All;
    for(let i=0;i<this.orders.length;i++){
      if(this.orders[i].orderStatus==="failed")
        this.failed[i]=this.orders[i];
    }
    this.orders=this.failed;
  }

  details(order:any){
    this.router.navigate(["manage/seller/orders/orderDetail/",JSON.stringify(order)]);
    // console.log(order._id)
  }
}
