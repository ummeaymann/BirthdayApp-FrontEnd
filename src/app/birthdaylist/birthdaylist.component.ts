import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../Services/profile.service';

@Component({
  selector: 'app-birthdaylist',
  templateUrl: './birthdaylist.component.html',
  styleUrls: ['./birthdaylist.component.css']
})
export class BirthdaylistComponent implements OnInit {
  searchDate:any=""
  result:any
  constructor(private profile:ProfileService, private router:Router) { }

  ngOnInit(): void {
    this.profile.getprofile().subscribe((res)=>{
      this.result=res;
      console.log(this.result);
    })
  }
  }
