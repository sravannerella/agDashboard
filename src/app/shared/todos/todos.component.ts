import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../providers/todoList/todos.service';
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

    this.todoService.getTodoList().subscribe(resp => {

      resp.map(res => {
        if (res.category === 'Timesheet') {
          res.icon = 'fa fa-calendar';
        } else if (res.category === 'Request') {
          res.icon = 'fa fa-briefcase';
        } else if (res.category === 'Savings') {
          res.icon = 'fa fa-inr';
        } else if (res.category === 'Stubs') {
          res.icon = 'fa fa-files-o';
        }
      });

      console.log(resp);

      this.todos = resp;
      }, error => {
        console.log(error);
    });

  }

}
