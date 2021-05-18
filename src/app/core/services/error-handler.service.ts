import { LoggerService } from './logger.service';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ErrorHandlerService {

  constructor( private loggerService: LoggerService ) {}

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    this.loggerService.add(`Service: ${message}`);
  }
}
