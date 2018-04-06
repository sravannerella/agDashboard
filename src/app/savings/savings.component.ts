import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Card } from '../card/card';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.scss']
})
export class SavingsComponent extends CardComponent {

  card: any = [];
  constructor() {
    super();
    this.card.push(new Card('Savings', '', '$68,400', '', 'Total of 6 savings'));
  }

}
