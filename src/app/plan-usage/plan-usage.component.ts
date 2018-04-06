import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Card } from '../card/card';

@Component({
  selector: 'app-plan-usage',
  templateUrl: './plan-usage.component.html',
  styleUrls: ['./plan-usage.component.scss']
})
export class PlanUsageComponent extends CardComponent {

  card: any = [];
  constructor() {
    super();
    this.card.push(new Card('Plan Usage', '', '65%', '', 'Standard'));
  }

}
