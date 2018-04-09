import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Card } from '../card/card';
import { ExpensesService } from '../providers/expenses/expenses.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent extends CardComponent {

  card: any = [];
  constructor(private expenseService: ExpensesService) {
    super();

    this.subscribe(this.expenseService.getExpenses());
  }

}
