import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {

  isLoading: number;

  constructor(
    public authService: AuthService,
    private router: Router
  ) {
    this.isLoading = 0;
  }

  ngOnInit() {
  }

}
