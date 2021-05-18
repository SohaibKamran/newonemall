import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {SellerService} from '../../../shared/services/Seller/seller.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-seller-signin',
  templateUrl: './seller-signin.component.html',
  styleUrls: ['./seller-signin.component.scss']
})
export class SellerSigninComponent implements OnInit {

  @ViewChild('formDirective', {static: true}) private formDirective: NgForm;
  inputForm: FormGroup;
  message = '';
  

  constructor(
    private formBuilder: FormBuilder,
    private sellerService: SellerService,
    private router: Router
  ) {
    this.inputForm = this.formBuilder.group({
      email : ['', [Validators.required]],
      password : ['', [Validators.required, Validators.minLength(6)]],
    });
    if (sessionStorage.getItem('jwt')) {
      if (sessionStorage.getItem('role') === 'seller') {
        
        
        this.router.navigate(['manage/seller/dashboard']);
      } else if (sessionStorage.getItem('role') === 'admin') {
        this.router.navigate(['manage/admin/dashboard']);
      } else {
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
    this.sellerService.login(data)
      .subscribe(serverResponse => {
        if (serverResponse) {
          if (serverResponse.response) {
            console.log("serverResponse",serverResponse);
            sessionStorage.setItem('id', serverResponse.data.id);
            sessionStorage.setItem('jwt', serverResponse.data.jwt);
            sessionStorage.setItem('role', serverResponse.data.role);
            sessionStorage.setItem('name', serverResponse.data.name);
            sessionStorage.removeItem('c_id');
            sessionStorage.removeItem('c_jwt');
            sessionStorage.removeItem('c_role');
            sessionStorage.removeItem('c_name');
            window.location.reload();
            this.router.navigate(['manage/seller/dashboard']);
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
    this.router.navigate(['/manage/register']);
  }

  resetMessage() {
    this.message = '';
  }
}
