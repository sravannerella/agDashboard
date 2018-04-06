import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Card } from '../card/card';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent extends CardComponent {
    card: any = [];
    constructor() {
      super();
      this.card.push(new Card('Employees', 'Total', '142', 'This Month', '19%') );
    }
}
