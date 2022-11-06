import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../Services/profile.service';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.css']
})
export class AddProfileComponent implements OnInit {
  result1:any

  constructor(private profile:ProfileService, private router:Router) { }

  ngOnInit(): void {
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

