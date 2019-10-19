import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Recipe } from './interface/recipe';
import { Special } from './interface/special';

@Injectable({
  providedIn: 'root'
})

export class FetchDataService {
  recipesUrl: string = 'http://localhost:3001/recipes';
  specialsUrl: string = 'http://localhost:3001/recipes';

  constructor(
    private http: HttpClient
  ) { }

  getRecipeList(): Observable<Recipe[]> {
     return this.http.get<Recipe[]>(this.recipesUrl).pipe(
      catchError(this.handleError)
    );
  }

  getSpecialList(): Observable<Special[]> {
    return this.http.get<Special[]>(this.specialsUrl).pipe(
     catchError(this.handleError)
   );
 }

  private handleError(errorVal: HttpErrorResponse) {
    return throwError(errorVal);
  }


}
