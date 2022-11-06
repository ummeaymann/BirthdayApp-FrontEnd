import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }
  
  getprofile(){
    return this.http.get("http://localhost:8080/users")
  }
  saveprofile(profile:any){
    return this.http.post("http://localhost:8080/users",profile)
  }
  
  getProfileById(id: any) {

    return this.http.get(`http://localhost:8080/users/${id}`);

  }
  editprofile(id:any,profile:any){
    return this.http.put(`http://localhost:8080/profile/${id}`,profile)
  }
}
