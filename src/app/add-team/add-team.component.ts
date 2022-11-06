import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamsService } from '../Services/teams.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  result1:any
  constructor(private teams:TeamsService,private router:Router) { }

  ngOnInit(): void {
  }
  addTeam(form:NgForm){
    console.log(form.value);
    this.teams.addteam(form.value).subscribe((res)=>{
      console.log(res);
         this.router.navigate(['teams']);
         this.teams.getteam().subscribe((res1)=>{
        this.result1=res1;
         })
  })
}
}

   