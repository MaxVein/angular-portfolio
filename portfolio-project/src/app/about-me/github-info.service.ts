import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GithubInfoService {

  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get("https://api.github.com/users/MaxVein");
  }
}
