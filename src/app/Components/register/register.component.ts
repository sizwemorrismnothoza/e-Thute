import { Component, OnInit, NgZone } from '@angular/core';
import { HttpLearnerService } from 'src/app/Services/http-learner.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import { Learner } from 'src/app/Model/Learner';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   /* learnerForm: FormGroup;
    learnerArr : any = [];*/

    grades:String [] = [
      "8",
      "9",
      "10",
      "11",
      "12"
    ]

    provinces:String [] = [
      "Gauteng",
      "Free State",
      "Wester Cape",
      "Eastern Cape",
      "Northern Cape",
      "Limpopo",
      "Mpumalanga",
      "Kwa-Zulu Natal",
      "North West"
    ]

  constructor(
    public  httpLearnerService : HttpLearnerService,
    private ngZone : NgZone,
    public fb: FormBuilder,
    private router : Router,

    ) { }

  ngOnInit(): void {
    this.addLearner();
  }

  addLearner(){
    /*this.learnerForm = this.fb.group({
      learner_name: [''],
      learner_email:[''],
      learner_password:[''],
      learner_retypePassword:[''],
      learner_schoolName:[''],
      learner_grade:[''],
      learner_location:[''],
      learner_town:[''],
      learner_province:[''],
    })*/
  }

  submitForm(learner){
    //let savedLearner = new Learner(learner.name,learner.email,learner.cell,learner.password,learner.schoolName,learner.grade,learner.town,learner.province)
    this.httpLearnerService.registerLearner(learner)
    .subscribe(res => {
        console.log('Learner Add')
        this.router.navigate(['subject-list'])
    });
  }

  /*onClickSubmit(learner){

    this.httpClientService.registerLearner(learner);
    alert(
      learner.name + " in " + learner.grade + " has been succesfully registered "
       );
    //this.router.navigate(['']);
  }*/

}
