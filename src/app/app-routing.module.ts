import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewAllSubjectsComponent } from './Components/view-all-subjects/view-all-subjects.component';
import { HomeComponent } from './Components/home/home.component';
import { RegisterComponent } from './Components/register/register.component';
import { LearnerProfileComponent } from './Components/learner-profile/learner-profile.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"register",component:RegisterComponent},
  {path:"subject-list", component:ViewAllSubjectsComponent},
  {path:"learner-profile",component:LearnerProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
