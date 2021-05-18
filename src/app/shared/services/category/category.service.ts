import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiService} from '../../../core/services/api.service';
import {ServerResponse} from '../../../core/models/server-response.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  route = 'categories';

  constructor(
      private apiService: ApiService
  ) {}

  getCategories(): Observable<ServerResponse> {
    const url = this.route;
    return this.apiService.get(url);
  }

  getAllSubcategories(): Observable<ServerResponse> {
    const url = this.route + '/subCategories';
    return this.apiService.get(url);
  }

  getAllCategories(id: string): Observable<ServerResponse> {
    const url = this.route + '/subCategories';
    return this.apiService.get(url);
  }

}
