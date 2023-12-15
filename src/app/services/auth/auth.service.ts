import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private confirmEmailUrl: string = 'http://Delivva-testing-environment-env.eba-jighrhr6.us-east-1.elasticbeanstalk.com/api/v1/auth/confirm-email';

  constructor(private http: HttpClient) { }

  confirmEmail(token: string) {
    let params = new HttpParams().set('token', token);
    return this.http.get(this.confirmEmailUrl, {params: params});
  }
}
