import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-seller-card',
  templateUrl: './seller-card.component.html',
  styleUrls: ['./seller-card.component.scss']
})
export class SellerCardComponent implements OnInit {

  @Input()
  seller: any;

  constructor(private  router: Router) { }

  ngOnInit() {
  }

  openDetails() {
    this.router.navigate(['store/' + this.seller._id]);
  }
}
