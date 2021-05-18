import { ServerResponse } from './../models/server-response.model';
import { tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LoggerService } from './logger.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorHandlerService } from './error-handler.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions = {
    headers: new HttpHeaders({
      'api-auth-token': this.getToken()
    })
  };

  getToken() {
    if (sessionStorage.getItem('jwt')) {
      return sessionStorage.getItem('jwt');
    } else if (sessionStorage.getItem('c_jwt')) {
      return sessionStorage.getItem('c_jwt');
    }
    return ' ';
  }

  constructor(
      private http: HttpClient,
      private loggerService: LoggerService,
      private errorHandler: ErrorHandlerService
  ) {}

  get(path: string): Observable<ServerResponse> {
    return this.http.get<ServerResponse>(`${environment.apiURL}${path}`, this.httpOptions)
        .pipe(
            tap(_ => this.log('get: ' + path)),
            catchError(this.handleError('get: ' + path))
        );
  }

  put(path: string, body: any): Observable<ServerResponse> {
    return this.http.put<ServerResponse>(`${environment.apiURL}${path}`, body, this.httpOptions)
        .pipe(
            tap(_ => this.log('put: ' + path)),
            catchError(this.handleError('put: ' + path))
        );
  }

  post(path: string, body: any): Observable<ServerResponse> {
    console.log('post: ', path);
    return this.http.post<ServerResponse>(`${environment.apiURL}${path}`, body, this.httpOptions)
        .pipe(
            tap(_ => this.log('post: ' + path)),
            catchError(this.handleError('post: ' + path))
        );
        
  }

  delete(path: string): Observable<ServerResponse> {
    return this.http.delete<ServerResponse>(`${environment.apiURL}${path}`, this.httpOptions)
        .pipe(
            tap(_ => this.log('delete: ' + path)),
            catchError(this.handleError('delete: ' + path))
        );
  }

  private handleError(operation = 'operation') {
    return this.errorHandler.handleError<ServerResponse>(operation);
  }

  private log(message: string) {
    console.log(message);
    this.loggerService.add(message);
  }

}
