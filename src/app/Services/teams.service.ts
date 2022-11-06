import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http:HttpClient) { }

  getteam(){
    return this.http.get("http://localhost:8080/teams")
  }
  addteam(team:any){
    return this.http.post("http://localhost:8080/teams",team)
  }
  deleteteam(id:any){
    return this.http.delete(`http://localhost:8080/teams/${id}`);
  }

getTeamById(_id:any){
 return this.http.get(`http://localhost:8080/teams/${_id}`);
}
   editTeamData(_id:any,team:any){
    return this.http.put(`http://localhost:8080/teams/${_id}`,team);
  }

  
  // getData(){
  //   return this.http.get("http://ty-shop.herokuapp.com/api/products");
  // }
  // addTeamData(team:any){
  //   return this.http.post("http://ty-shop.herokuapp.com/api/products",team);
  // }
  // editTeamData(_id:any,team:any){
  //   return this.http.put(`http://ty-shop.herokuapp.com/api/products/${_id}`,team);
  // }
}
