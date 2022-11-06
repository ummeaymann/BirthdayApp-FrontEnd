import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTeamComponent } from './add-team/add-team.component';
import { AnniversaryComponent } from './anniversary/anniversary.component';
import { BirthdaylistComponent } from './birthdaylist/birthdaylist.component';
import { BirthdaysComponent } from './birthdays/birthdays.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { BirthdayGuard } from './guard/birthday.guard';
import { ProfileGuard } from './guard/profile.guard';
import { TeamsGuard } from './guard/teams.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  {path:'', redirectTo:'homepage', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'profile', component:ProfileComponent,canActivate:[ProfileGuard]},
  {path:'teams', component:TeamsComponent,canActivate:[TeamsGuard]},
  {path:'add-teams', component:AddTeamComponent},
  {path:'edit-team/:id', component:EditTeamComponent},
  {path:'birthdays', component:BirthdaysComponent,canActivate:[TeamsGuard]},
  {path:'homepage', component:HomeComponent},
  {path:'birthday-list', component:BirthdaylistComponent,canActivate:[ProfileGuard]},
  {path:'anniversary', component:AnniversaryComponent,canActivate:[ProfileGuard]}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
