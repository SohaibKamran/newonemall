import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {CategoryService} from '../../../shared/services/category/category.service';
import {ProductService} from '../../../shared/services/product/product.service';
import {ActivatedRoute, Params} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  @ViewChild('formDirective', {static: true}) private formDirective: NgForm;
  inputForm: FormGroup;
  editMode = false;
  category;
  subCategories = [];
  message = null;
  private images: any;

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private productService: ProductService,
    private route: ActivatedRoute,
  ) {

    this.route.params.subscribe(
      (params: Params) => {
        this.category = params['id'];
      }
    );
    if ( this.category !== undefined ) {
      this.editMode = true;
      this.getCategory();
    }

    this.inputForm = this.formBuilder.group({
      name : ['', [Validators.required]],
      thumbnail : [''],
    });
  }

  ngOnInit() {

  }

  get name() {
    return this.inputForm.get('name');
  }
  get thumbnail() {
    return this.inputForm.get('thumbnail');
  }

  submitForm(form) {

    const formData = new FormData();
    formData.append('file', this.images);
    formData.append('name', form.name);

    if (this.editMode) {
      this.editCategory(formData);
    } else {
      this.addCategory(formData);
    }

  }

  getCategory() {
    this.productService.getOne(this.category)
      .subscribe(serverResponse => {
        if (serverResponse) {
          if (serverResponse.response) {
            console.log(serverResponse);
            this.name.setValue(serverResponse.data.products[0].name);
          } else {
          }
        } else {
          console.log('error');
        }
      });
  }

  addCategory(data): void {

    this.productService.add(data)
      .subscribe(serverResponse => {
        if (serverResponse) {
          if (serverResponse.response) {
            console.log('added');
            this.message = {
              text: 'Product Added',
              type: 'success'
            };
          } else {
            console.log(serverResponse.error);
            this.message = {
              text: 'Please fill out all the fields',
              type: 'danger'
            };
          }
        } else {
          console.log('error');
          this.message = {
            text: serverResponse.error.details.replace('"', '').replace('"', ''),
            type: 'danger'
          };
        }
      });
  }

  editCategory(data): void {
    this.productService.update(this.category, data)
      .subscribe(serverResponse => {
        if (serverResponse) {
          if (serverResponse.response) {
            console.log('updated');
            this.message = {
              text: 'Product Updated',
              type: 'warning'
            };
          } else {
            console.log(serverResponse.error);
            this.message = {
              text: 'Please fill out all the fields',
              type: 'danger'
            };
          }
        } else {
          console.log('error');
          this.message = {
            text: 'Error submitting the request',
            type: 'danger'
          };
        }
      });
  }

  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }

}
