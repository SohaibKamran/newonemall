import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ContactusService} from '../../../shared/services/contactus/contactus.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  @ViewChild('formDirective', {static: true}) private formDirective: NgForm;
  inputForm: FormGroup;
  message = '';
  sucess = '';

  constructor(
    private formBuilder: FormBuilder,
    private contactusService: ContactusService,
  ) {
    this.inputForm = this.formBuilder.group({
      name : ['', [Validators.required]],
      email : ['', [Validators.required]],
      phone : ['', [Validators.required]],
      message : ['', [Validators.required]]
    });

  }

  ngOnInit() {
  }

  submitForm(value: any) {
      this.addMessage(value);
  }

  addMessage(data): void {
    this.contactusService.add(data)
      .subscribe(serverResponse => {
        if (serverResponse) {
          if (serverResponse.response) {
            this.message = '';
            this.sucess = 'Request submitted Successfully';
          } else {
            this.message = serverResponse.error.details;
            this.sucess = '';
          }
        } else {
          this.message = 'Server Connection Failed.';
          this.sucess = '';
        }
      });
  }

}
