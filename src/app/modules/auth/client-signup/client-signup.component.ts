import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {SellerService} from '../../../shared/services/Seller/seller.service';
import {Router} from '@angular/router';
import {ClientService} from '../../../shared/services/client/client.service';

@Component({
  selector: 'app-client-signup',
  templateUrl: './client-signup.component.html',
  styleUrls: ['./client-signup.component.scss']
})
export class ClientSignupComponent implements OnInit {

  @ViewChild('formDirective', {static: true}) private formDirective: NgForm;
  inputForm: FormGroup;
  message = '';
  sucess = '';
  isChecked = false;

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    private router: Router
  ) {
    this.inputForm = this.formBuilder.group({
      name : ['', [Validators.required]],
      email : ['', [Validators.required]],
      phone : ['', [Validators.required]],
      password : ['', [Validators.required]],
      confirmPassword : ['', [Validators.required]],
    });
    if (sessionStorage.getItem('c_jwt')) {
      if (sessionStorage.getItem('c_role') === 'user') {
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
      this.addCustomer(value);
    }
  }

  addCustomer(data): void {
    this.clientService.add(data)
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
    this.router.navigate(['login']);
  }

  checkValue(values) {
    this.isChecked = values.currentTarget.checked;
  }

}
