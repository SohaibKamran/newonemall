import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input()
  product: any;
  server = environment.apiServer;

  constructor(private  router: Router) { }

  ngOnInit() {
  }

  openDetails() {
    this.router.navigate(['product/' + this.product._id]);
  }
}
