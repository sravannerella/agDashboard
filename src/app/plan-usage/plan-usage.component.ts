import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Card } from '../card/card';
import { PlanUsageService } from '../providers/plan-usage/plan-usage.service';

@Component({
  selector: 'app-plan-usage',
  templateUrl: './plan-usage.component.html',
  styleUrls: ['./plan-usage.component.scss']
})
export class PlanUsageComponent extends CardComponent {

  card: any = [];
  constructor(private planService: PlanUsageService) {
    super();
    this.subscribe(planService.getPlanUsage());
  }

}
