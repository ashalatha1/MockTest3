import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from './user';
import { HttpClient } from '@angular/common/http';
​
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
​
  constructor(private httpClient: HttpClient) { }
​
  GetRequest(): Observable<Array<user>> {
    return this.httpClient.get<Array<user>>("http://localhost:3000/users");
}
}
