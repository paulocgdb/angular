import { Component, OnInit } from '@angular/core';
import {TodoServiceService} from "../../services/todo-service.service";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  constructor(private service: TodoServiceService) { }

  ngOnInit(): void {
  }

}
