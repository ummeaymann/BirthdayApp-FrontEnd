import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamsService } from '../Services/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  // role=localStorage.getItem("user_role")
  searchTeam:any=""
  result:any
  constructor(private teams:TeamsService, private router:Router) { }

  ngOnInit(): void {
    this.teams.getteam().subscribe((res)=>{
      this.result=res;
      console.log(this.result);
    })
  }
  deleteteam(id:any){
    let result = confirm("Are you sure!");
    if(result){
    this.teams.deleteteam(id).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['teams']);
      this.teams.getteam().subscribe((res)=>{
        this.result=res;
      })
    })
  }
  }


  }


