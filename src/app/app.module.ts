import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule,  ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpLearnerService } from './Services/http-learner.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { LearnerProfileComponent } from './Components/learner-profile/learner-profile.component';
import { ViewSubjectComponent } from './Components/view-subject/view-subject.component';
import { ViewAllSubjectsComponent } from './Components/view-all-subjects/view-all-subjects.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
/*import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatSelectModule} from '@angular/material/select';
import { MatRadioModule} from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core'
import {MatInputModule} from '@angular/material/input';*/

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LearnerProfileComponent,
    ViewSubjectComponent,
    ViewAllSubjectsComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
    /*MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
    MatNativeDateModule,
    MatInputModule,
    MatRadioModule,*/
    
  ],
  providers: [
    HttpLearnerService
    //MatDatepickerModule,
    /*MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
