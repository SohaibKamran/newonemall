import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ServerResponse} from '../../../core/models/server-response.model';
import {ApiService} from '../../../core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  route = 'users';

  constructor(
    private apiService: ApiService
  ) {}

  getOrders(id: String): Observable<ServerResponse> {
    
    const url = this.route + '/' + id + '/orders';
    return this.apiService.get(url);
  }

  placeOrder(data):Observable<ServerResponse> {
    const url = 'orders';
    return this.apiService.post(url, data);
  }
  login(data): Observable<ServerResponse> {
    const url = 'auth';
    return this.apiService.post(url, data);
  }

  getAll(): Observable<ServerResponse> {
    const url = this.route;
    return this.apiService.get(url);
  }

  getOne(id: string): Observable<ServerResponse> {
    const url = this.route + '/' + id;
    return this.apiService.get(url);
  }


  getCartProducts(): Observable<ServerResponse> {
    const url = this.route + '/cart';
    return this.apiService.get(url); 
  }

  add(client: any): Observable<ServerResponse> {
    const url = this.route;
    return this.apiService.post(url, client);
  }

  delete(id: string): Observable<ServerResponse> {
    const url = this.route + '/' + id;
    return this.apiService.delete(url);
  }

  update(id: string, product: any): Observable<ServerResponse> {
    const url = this.route + '/' + id;
    return this.apiService.put(url, product);
  }

  addProductToCart(product: any): Observable<ServerResponse> {
    const url = this.route + '/cart';
    return this.apiService.post(url, product);
  }
}
