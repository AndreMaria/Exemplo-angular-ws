import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "http://coletaonline-dev.raizen.com/ColetaOnline-dev/JWT/wsToken.asmx";

  constructor(private http: HttpClient) {
  }

  verifyTokenWithPost(token: string) {

    let teste = 
    '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/"> ' + 
    '<soapenv:Header/>' +
    '<soapenv:Body>' +
      '<tem:GetMenu>'+
          '<tem:id>8</tem:id>'+
          '<tem:token>' + token +'</tem:token>'+
      '</tem:GetMenu>'+
    '</soapenv:Body>'+
    '</soapenv:Envelope>';

    console.log(teste);

    this.http
      .post(this.url, teste, {
        headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8') 
        .append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS') 
        .append('Access-Control-Allow-Origin', '*')
        .append('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization'),
        responseType: "text"
      })
      .subscribe(
        data => {
          console.log("response", data);
        },
        error => {
          console.log('vai curintia')
          debugger;
          console.log(JSON.stringify(error));
        }
      );
  }

}
