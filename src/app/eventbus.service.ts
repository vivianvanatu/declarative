import { Injectable } from '@angular/core';
import { Subject, Subscription, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {

  private productClickSubject = new Subject<any>();

  productClick$ = this.productClickSubject.asObservable();

  emitProductClick(data: any) {
    this.productClickSubject.next(data);
  }
}