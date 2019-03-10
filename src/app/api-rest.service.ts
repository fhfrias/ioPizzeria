import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:3000/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  constructor(private http: HttpClient) { }
  
  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  getPizzas(): Observable<any> {
    return this.http.get(endpoint + 'pizzas').pipe(
      map(this.extractData));
  }

  addPizza(pizza): Observable<any> {
    console.log(pizza);
    return this.http.post<any>(endpoint + 'pizzas', JSON.stringify(pizza), httpOptions).pipe(
      tap((pizzas) => console.log(`added pizza w/ id=${pizza.id}`)),
      catchError(this.handleError<any>('addPizza'))
    );
  }

  deletePizza(id): Observable<any> {
    return this.http.delete<any>(endpoint + 'pizzas/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted pizza id=${id}`)),
      catchError(this.handleError<any>('deletePizza'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
