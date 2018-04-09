import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Card } from '../card/card';
import { SavingsService } from '../providers/savings/savings.service';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.scss']
})
export class SavingsComponent extends CardComponent {

  card: any = [];
  constructor(private savingService: SavingsService) {
    super();
    this.subscribe(savingService.getSavings());
  }

}
