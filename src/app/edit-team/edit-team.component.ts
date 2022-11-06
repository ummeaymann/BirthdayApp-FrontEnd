import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamsService } from '../Services/teams.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
  result:any
  selectedTeam:any
  constructor(private route:ActivatedRoute,private teams:TeamsService,private router:Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    // console.log(id);
    // console.log(typeof(id))
    this.teams.getTeamById(id).subscribe((res)=>{
      this.result =  res;
      console.log(this.result.data);

      // for( let t of this.result.data)
      // if(t.id = id){
      //   this.selectedTeam = t;
      //   console.log(this.selectedTeam);

      // }
      this.selectedTeam=this.result.data
          console.log(this.selectedTeam);

    }
  )}

  editTeam(form:NgForm){
    this.teams.editTeamData(this.selectedTeam.id,form.value).subscribe((res)=>{
    console.log(res);
    this.router.navigate(['teams']);
    this.teams.getteam().subscribe((res1)=>{
      this.result=res;
  })
})

  }
}

  


