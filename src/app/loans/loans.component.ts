import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Card } from '../card/card';
import { LoansService } from '../providers/loans/loans.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent extends CardComponent {

  card: any = [];
  constructor(private loanService: LoansService) {
    super();
    // this.card.push(new Card('Loans/Advances', '', '$45,000', 'Total Pay Advance', ''));
    this.subscribe(loanService.getLoans());
  }

}
