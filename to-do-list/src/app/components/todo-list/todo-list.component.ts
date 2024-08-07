import { Component, OnInit } from '@angular/core';
import {TodoServiceService} from "../../services/todo-service.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public name: string;

  constructor(private service: TodoServiceService) { }

  ngOnInit(): void {
  }

}
