import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { EMPTY, catchError, tap } from 'rxjs';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css',
})
export class DataComponent{

  errorMessage = '';
  // sub!: Subscription;

  constructor( private dataService: DataService ) {}

  readonly products$ = this.dataService.products$
    .pipe(
      tap( (x) => console.log('Declarative Approach in Component', x)),
      catchError( (err) => {
        this.errorMessage = err;
        return EMPTY;
      })
    );

  // ngOnInit() {
  //   this.getDataFromApi();
  // }

  // getDataFromApi() {
  //   this.sub = this.dataService.getData().subscribe(
  //     {
  //       next: (data) => {
  //         // Handle the retrieved data
  //         this.products = data;
  //       },    
  //       error: (error) => {
  //         // Handle errors
  //         this.errorMessage = error.body.error;
  //       }
  //     }
  //   );
  // }

  // ngOnDestroy() {
  //  this.sub.unsubscribe();
  // }

}

