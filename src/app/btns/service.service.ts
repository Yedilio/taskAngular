import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  array = ["Яблоко", "Апельсин", "Слива"];

  constructor() { }

  get() {
    return this.array;
  }

  push(array) {
    this.array = array;
  }
}
