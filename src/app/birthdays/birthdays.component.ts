import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../Services/profile.service';

@Component({
  selector: 'app-birthdays',
  templateUrl: './birthdays.component.html',
  styleUrls: ['./birthdays.component.css']
})
export class BirthdaysComponent implements OnInit {
  result:any
  constructor(private profile:ProfileService, private router:Router) { }

  ngOnInit(): void {
    this.profile.getprofile().subscribe((res)=>{
      this.result=res;
      console.log(this.result);
    })
  }
  }


