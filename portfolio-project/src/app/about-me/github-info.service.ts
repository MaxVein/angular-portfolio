import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GithubInfoService {
  constructor(private http: HttpClient) {}
  getData(): Observable<object> {
    return this.http.get('https://api.github.com/users/MaxVein');
  }
}
