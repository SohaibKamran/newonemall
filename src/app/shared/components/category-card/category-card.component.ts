import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {

  @Input()
  category: any;

  constructor(private  router: Router) {
  }

  ngOnInit() {
  }

  openDetails() {
    this.router.navigate(['category/' + this.category.name]);
  }

}
