import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Card } from '../card/card';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent extends CardComponent {

    card: any = [];
    constructor() {
      super();
      this.card.push(new Card('Invoices', 'Total Due', '12,000.12', 'This Month', 'April 2'));
      this.card.push(new Card('Invoices', 'Total Due', '5000.12', 'This Month', 'April 2'));
    }

}
