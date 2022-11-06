import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registor:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  regUser(form:NgForm){
    console.log(form.value)
    this.registor.register(form.value).subscribe((res)=>{
      console.log(res)
      this.router.navigate(["/login"])
    })
  }

}