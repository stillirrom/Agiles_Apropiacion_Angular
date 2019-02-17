import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  API_URL = 'http://localhost:8000';

  constructor(private httpClient: HttpClient, private router: Router) { }

  register(username: string, password: string, first_name: string, last_name: string, email: string): Observable<any> {
    var obj = { username: username, password: password, first_name: first_name, last_name: last_name, email: email };
    return of(this.httpClient.post(this.API_URL + '/gallery/addUser/', JSON.stringify(obj), httpOptions).subscribe(
      (data: Response) => {
        if(data[0].fields.username === username) {
          this.router.navigate(['/gallery']);
        }
        else {
         console.log('Usuario o password incorrectos');
        }
      }
    ));
  }
}
