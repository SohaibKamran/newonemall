import { ServerResponse } from './../../../../core/models/server-response.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SellerService } from 'src/app/shared/services/Seller/seller.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
order;
server = environment.apiServer;
  constructor(private activatedRoute: ActivatedRoute,private sellerService:SellerService) 
  { 
    this.activatedRoute.params.subscribe((params: Params) => {
      this.order = JSON.parse(params["order"]);
      console.log(this.order);
      
    });
  }

  statuses = [
     "pending", "rejected","accepted", "dispatched","delivered"
    ];

  ngOnInit() {
  }
  changeStatus(status: any) {
    if(status!="null"){
      this.order.orderStatus=status;
      this.sellerService.orderStatus(this.order._id,status).subscribe((serverResponse) =>{
        if(serverResponse)
        {
          // console.log("serverResponse = ", serverResponse);
          
          if(serverResponse.response)
          {
            console.log("serverResponse.response= ",serverResponse.data);
            
            console.log("Status Updated");
            
          }
        }
        else{
          console.log("error");
          
        }
      });
    }
  }
}
