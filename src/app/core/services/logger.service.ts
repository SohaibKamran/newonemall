import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoggerService {
  log: string[] = [];
  add(message: string) {
    this.log.push(message);
  }
  clear() {
    this.log = [];
  }
}
