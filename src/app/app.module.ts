import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { TeamsComponent } from './teams/teams.component';
import { BirthdaysComponent } from './birthdays/birthdays.component';
import { HomeComponent } from './home/home.component';
import { SearchPipe } from './search.pipe';
import { BirthdaylistComponent } from './birthdaylist/birthdaylist.component';
import { ListPipe } from './list.pipe';
import { AnniversaryComponent } from './anniversary/anniversary.component';
import { AnniversaryPipe } from './anniversary.pipe';
import { AddProfileComponent } from './add-profile/add-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AddTeamComponent,
    EditTeamComponent,
    TeamsComponent,
    BirthdaysComponent,
    HomeComponent,
    SearchPipe,
    BirthdaylistComponent,
    ListPipe,
    AnniversaryComponent,
    AnniversaryPipe,
    AddProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
