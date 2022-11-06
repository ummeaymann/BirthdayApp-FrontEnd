import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../Services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  result1:any
  constructor(private profile:ProfileService, private router:Router) { }
  temp:any
  currentUser:any
  ngOnInit(): void {
    this.profile.getProfileById(localStorage.getItem('user_id')).subscribe((data) => {

      //console.log(data);

      this.temp = data;
      this.currentUser=this.temp.data
      console.log(this.temp);
      // this.curruser = this.temp.t;

    });
  }
  saveProfile(form:NgForm){
    console.log(form.value);
    this.profile.saveprofile(form.value).subscribe((res)=>{
      console.log(res);
         this.router.navigate(['birthdays']);
         this.profile.getprofile().subscribe((res1)=>{
        this.result1=res1;
         })
  })
}

}


