import { Injectable } from '@angular/core';
import {ApiService} from '../../../core/services/api.service';
import {Observable} from 'rxjs';
import {ServerResponse} from '../../../core/models/server-response.model';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  route = 'contactus';

  constructor(
    private apiService: ApiService
  ) {}

  getAll(): Observable<ServerResponse> {
    const url = this.route;
    return this.apiService.get(url);
  }

  getOne(id: string): Observable<ServerResponse> {
    const url = this.route + '/' + id;
    return this.apiService.get(url);
  }

  add(contact: any): Observable<ServerResponse> {
    const url = this.route;
    return this.apiService.post(url, contact);
  }
}
