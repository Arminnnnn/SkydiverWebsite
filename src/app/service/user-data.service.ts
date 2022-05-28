import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  url = "https://skydiver-api-new.herokuapp.com/api/Users";

  constructor(
    private http:HttpClient
  ) { }

  users(){
    return this.http.get(this.url);
  }
}
