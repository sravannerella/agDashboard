import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Card } from '../card/card';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent extends CardComponent {

  card: any = [];
  constructor() {
    super();
    this.card.push(new Card('Timesheets', 'Missing Timesheets', '12', 'This Month', ''));
  }

}
