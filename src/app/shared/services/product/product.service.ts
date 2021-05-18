import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiService} from '../../../core/services/api.service';
import {ServerResponse} from '../../../core/models/server-response.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  route = 'products';

  constructor(
      private apiService: ApiService
  ) {}

  getAll(): Observable<ServerResponse> {
    const url = this.route;
    return this.apiService.get(url);
  }

  getPending(): Observable<ServerResponse> {
    const url = this.route + '/pending';
    return this.apiService.get(url);
  }

  getCategoryProducts(id: string): Observable<ServerResponse> {
    const url = this.route + '/category/' + id;
    return this.apiService.get(url);
  }

  getOne(id: string): Observable<ServerResponse> {
    const url = this.route + '/' + id;
    return this.apiService.get(url);
  }

  add(product: any): Observable<ServerResponse> {
    const url = this.route;
    return this.apiService.post(url, product);
  }

  delete(id: string): Observable<ServerResponse> {
    const url = this.route + '/' + id;
    return this.apiService.delete(url);
  }

  update(id: string, product: any): Observable<ServerResponse> {
    const url = this.route + '/' + id;
    return this.apiService.put(url, product);
  }

  getSellerProducts(id: string): Observable<ServerResponse> {
    const url = this.route + '/seller/' + id;
    return this.apiService.get(url);
  }

  approve(id: string): Observable<ServerResponse> {
    const url = this.route + '/' + id + '/approve';
    return this.apiService.post(url, null);
  }

  reject(id: string): Observable<ServerResponse> {
    const url = this.route + '/' + id + '/reject';
    return this.apiService.post(url, null);
  }

}
