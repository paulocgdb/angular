import {Component, OnInit} from '@angular/core';
import {TodoServiceService} from "../../services/todo-service.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  dayMessage: string = '';
  interviewMessage: string = '';
  form!: FormGroup;

  constructor(private service: TodoServiceService,
              private fb: FormBuilder
  ) {

    this.form = this.fb.group({
      name: null,
      age: null
    });

  }

  ngOnInit(): void {
    this.dayMessage = 'Hello Interviewer';
  }

  sendForm(): void {
    console.log(this.form.controls['name'].value);
    console.log(this.form.controls['age'].value);
  }


}
