import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-seller-reviews",
  templateUrl: "./seller-reviews.component.html",
  styleUrls: ["./seller-reviews.component.scss"],
})
export class SellerReviewsComponent implements OnInit {
  reviews = [
    {
      orderNumber: "2323 323 22",
      item: "sdsdsdsdsdsdsdsdsdsdsd",
      productReview: "dsdsdsdsdsdsdsdsdsdsdsdsdsdsds",
      reply: "It was the best product I have ever used in my life time y cant it in my life when its",
    },
    {
      orderNumber: "A2323 323 2253",
      item: "sdsdsdsdsdsdsdsdsdsdsd",
      productReview: "dsdsdsdsdsdsdsdsdsdsdsdsdsdsds",
      reply: "It was the best product I have ever used in my life time y cant it in my life when its",
    },
    {
      orderNumber: "2323 323 22",
      item: "sdsdsdsdsdsdsdsdsdsdsd",
      productReview: "dsdsdsdsdsdsdsdsdsdsdsdsdsdsds",
      reply: "It was the best product I have ever used in my life time y cant it in my life when its",
    },
  ];

  model;
  isLoading = 0;
  constructor() {}

  ngOnInit() {}
}
