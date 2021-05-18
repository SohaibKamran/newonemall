import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-messages',
  templateUrl: './seller-messages.component.html',
  styleUrls: ['./seller-messages.component.scss']
})
export class SellerMessagesComponent implements OnInit {
  isLoading = 0;

  constructor() { }

  ngOnInit() {
  }

}
