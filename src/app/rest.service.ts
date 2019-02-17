import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http: HttpClient) { }
  private extractData(res: Response) {
  const body = res;
  return body || { };
  }
  getProducts(): Observable<any> {
  return this.http.get(endpoint + 'products').pipe(
    map(this.extractData));
  }
}
const endpoint = 'http://127.0.0.1:8000/galeria/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
