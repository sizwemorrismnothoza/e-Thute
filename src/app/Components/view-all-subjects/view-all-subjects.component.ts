import { Component, OnInit } from '@angular/core';
import {SubjectService} from '../../Services/subject.service';
import { Observable } from 'rxjs';
import {Subject} from '../../Model/Subject';

@Component({
  selector: 'app-view-all-subjects',
  templateUrl: './view-all-subjects.component.html',
  styleUrls: ['./view-all-subjects.component.css']
})
export class ViewAllSubjectsComponent implements OnInit {


  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {
    //this.subjects = this.subjectService.getAllSubjects(); 
  }

  

}
