import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {SellerService} from '../../../shared/services/Seller/seller.service';
import {Router} from '@angular/router';
import {ClientService} from '../../../shared/services/client/client.service';

@Component({
  selector: 'app-client-signin',
  templateUrl: './client-signin.component.html',
  styleUrls: ['./client-signin.component.scss']
})
export class ClientSigninComponent implements OnInit {

  @ViewChild('formDirective', {static: true}) private formDirective: NgForm;
  inputForm: FormGroup;
  message = '';

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    private router: Router
  ) {
    this.inputForm = this.formBuilder.group({
      email : ['', [Validators.required]],
      password : ['', [Validators.required, Validators.minLength(6)]],
    });
    if (sessionStorage.getItem('c_jwt')) {
      if (sessionStorage.getItem('c_role') === 'user') {
        this.router.navigate(['']);
      }
    }
  }

  get email() {
    return this.inputForm.get('email');
  }

  get password() {
    return this.inputForm.get('password');
  }


  ngOnInit() {
  }

  submitForm() {
    this.getAuth({email: this.email.value, password: this.password.value});
  }

  getAuth(data): void {
    this.clientService.login(data)
      .subscribe(serverResponse => {
        if (serverResponse) {
          if (serverResponse.response) {
            sessionStorage.removeItem('id');
            sessionStorage.removeItem('jwt');
            sessionStorage.removeItem('role');
            sessionStorage.removeItem('name');
            sessionStorage.setItem('c_id', serverResponse.data.id);
            sessionStorage.setItem('c_jwt', serverResponse.data.jwt);
            sessionStorage.setItem('c_role', serverResponse.data.role);
            sessionStorage.setItem('c_name', serverResponse.data.name);
            window.location.reload();
            // this.router.navigate(['manage/seller/dashboard']);
          } else {
            this.message = serverResponse.error.details.replace('"', '').replace('"', '');
          }
        } else {
          this.message = 'Server Connection Failed.';
        }
      });
  }

  titleCaseWord(word: string) {
    if (!word) {
      return word;
    }
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }

  signup() {
    this.router.navigate(['signup']);
  }

  resetMessage() {
    this.message = '';
  }
}
