import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfileData } from '../models/profile-data-model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) { }

  baseUrl: string = "http://Delivva-testing-environment-env.eba-jighrhr6.us-east-1.elasticbeanstalk.com/api/v1/users";
  basePhotoUrl: string = "http://Delivva-testing-environment-env.eba-jighrhr6.us-east-1.elasticbeanstalk.com/api/v1/users/picture/";

  saveUserProfile(data: ProfileData) {
    return this.httpClient.post<String>(this.baseUrl, data);
  }

  savePhoto(file: File) {
    const photoSaveUrl = `${this.baseUrl}/picture/${Number(localStorage.getItem('userId'))}`;
    const formData = new FormData();
    formData.append('image', file);
    return this.httpClient.post<String>(photoSaveUrl, formData);
  }
}
