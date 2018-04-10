import { Component, OnInit } from '@angular/core';
import { TodosService } from '../providers/todoList/todos.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  size;
  todos = [];
  constructor(private todoService: TodosService) { }

  ngOnInit() {
    this.getTodoList();
  }

  getTodoList() {
    this.todoService.getTodoList().subscribe(res => {
      console.log(res);
     this.todos = res;
    },
      error => {
        console.log(error)
      })
  }

}
