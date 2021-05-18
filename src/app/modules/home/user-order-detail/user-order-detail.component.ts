import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-order-detail',
  templateUrl: './user-order-detail.component.html',
  styleUrls: ['./user-order-detail.component.scss']
})
export class UserOrderDetailComponent implements OnInit {
order;
  constructor(private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe((params: Params) => {
      this.order = JSON.parse(params["order"]);
    });
    console.log(this.order);
    
  }
 
  ngOnInit() {
  }

}
