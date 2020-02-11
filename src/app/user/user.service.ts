import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "SUA URL";

  constructor(private http: HttpClient) {
  }

  verifyTokenWithPost(token: string, id: string) {

    let body = new HttpParams();
    body = body.set('id', id);
    body = body.set('token', token);
    this.http
      .post(this.url, body, {responseType: "text"})
      .subscribe(
        data => {
          console.log("response", data);
        },
        error => {
          debugger;
          console.log('vai curintia')
          debugger;
          console.log(JSON.stringify(error));
        }
      );
  }

}
