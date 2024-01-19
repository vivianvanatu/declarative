import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { Product } from './data/product';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'api/products'; 

  constructor(private http: HttpClient) {}
  
  // Declarative approach to retrieve data from the REST API
  readonly products$ = this.http.get<Product[]>(this.apiUrl)
    .pipe(
      tap( (x) => console.log('Declarative Approach in Service', x)),
    );

    
  // // Procedural approach to retrieve data from the REST API
  // getData(): Observable<Product[]> {
  //   return this.http.get<Product[]>(this.apiUrl)
  //   	.pipe(
	//       tap( (x) => console.log('Procedural Approach http.get pipeline', x)),
  //     );
  // }
}