import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  size;
  todos = [];
  constructor() { }

  ngOnInit() {
    const obj = {
      icon: 'fa fa-calendar',
      title: 'THIS IS TITLE',
      status: 'Pending Approval',
      submittedBy: 'TEST',
      time: 'Moments ago'
    };

    this.todos.push(obj);
    this.todos.push(obj);
    this.todos.push(obj);
    this.todos.push(obj);


    this.size = this.todos.length;
  }

}
