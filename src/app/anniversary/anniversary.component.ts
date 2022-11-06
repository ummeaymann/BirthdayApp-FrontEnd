import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../Services/profile.service';

@Component({
  selector: 'app-anniversary',
  templateUrl: './anniversary.component.html',
  styleUrls: ['./anniversary.component.css']
})
export class AnniversaryComponent implements OnInit {
  result:any

  constructor(private profile:ProfileService, private router:Router) { }

  ngOnInit(): void {
    this.profile.getprofile().subscribe((res)=>{
      this.result=res;
      console.log(this.result);
    })
  }

}
