import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Card } from '../card/card';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent extends CardComponent {

  card: any = [];
  constructor() {
    super();
    this.card.push(new Card('Expenses', 'Total', '$12,000.12', 'This Month', '14%'));
  }

}
