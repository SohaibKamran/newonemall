import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiService} from '../../../core/services/api.service';
import {ServerResponse} from '../../../core/models/server-response.model';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  route = 'sellers';

  constructor(
      private apiService: ApiService
  ) {}

  login(data): Observable<ServerResponse> {
    const url = 'auth/seller';
    return this.apiService.post(url, data);
  }

  orderStatus(id:String,status: String): Observable<ServerResponse> {
    const url = "orders/"+id+"/orderStatus";
    return this.apiService.put(url, status);    
  }
  getAll(): Observable<ServerResponse> {
    const url = this.route;
    return this.apiService.get(url);
  }

  getPending(): Observable<ServerResponse> {
    const url = this.route + '/pending';
    return this.apiService.get(url);
  }

  getOne(id: string): Observable<ServerResponse> {
    const url = this.route + '/' + id;
    return this.apiService.get(url);
  }

  getSellerProducts(): Observable<ServerResponse> {
    const url = this.route + '/products';
    return this.apiService.get(url);
  }
  getSellerOrders(id: string): Observable<ServerResponse> {
    
    const url =this.route +'/'+id+'/orders';
    return this.apiService.get(url);
  }

  add(seller: any): Observable<ServerResponse> {
    const url = this.route;
    return this.apiService.post(url, seller);
  }

  delete(id: string): Observable<ServerResponse> {
    const url = this.route + '/' + id;
    return this.apiService.delete(url);
  }

  update(id: string, product: any): Observable<ServerResponse> {
    const url = this.route + '/' + id;
    return this.apiService.put(url, product);
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
