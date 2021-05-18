import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {SellerService} from '../../../shared/services/Seller/seller.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-seller-signup',
  templateUrl: './seller-signup.component.html',
  styleUrls: ['./seller-signup.component.scss']
})
export class SellerSignupComponent implements OnInit {

  @ViewChild('formDirective', {static: true}) private formDirective: NgForm;
  inputForm: FormGroup;
  message = '';
  sucess = '';
  isChecked = false;

  constructor(
    private formBuilder: FormBuilder,
    private sellerService: SellerService,
    private router: Router
  ) {
    this.inputForm = this.formBuilder.group({
      name : ['', [Validators.required]],
      email : ['', [Validators.required]],
      phone : ['', [Validators.required]],
      cnic : ['', [Validators.required]],
      password : ['', [Validators.required]],
      confirmPassword : ['', [Validators.required]],
      businessName : ['', [Validators.required]],
    });
    if (sessionStorage.getItem('jwt')) {
      if (sessionStorage.getItem('role') === 'seller') {
        this.router.navigate(['manage/seller/dashboard']);
      } else {
        this.router.navigate(['']);
      }
    }
  }

  ngOnInit() {
  }

  submitForm(value: any) {
    if (value.password !== value.confirmPassword) {
      this.message = 'Password mismatch';
    } else {
      this.addSeller(value);
    }
  }

  addSeller(data): void {
    this.sellerService.add(data)
      .subscribe(serverResponse => {
        if (serverResponse) {
          if (serverResponse.response) {
            this.message = '';
            this.sucess = 'Account created Successfully';
          } else {
            this.message = serverResponse.error.details;
          }
        } else {
          this.message = 'Error submitting the request.';
        }
      });
  }

  signin() {
    this.router.navigate(['/manage/login']);
  }

  checkValue(values) {
    this.isChecked = values.currentTarget.checked;
  }

}
