import { Component, OnInit } from '@angular/core';
import {TodoServiceService} from "../../services/todo-service.service";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  constructor(private service: TodoServiceService) { }

  ngOnInit(): void {
  }

}
