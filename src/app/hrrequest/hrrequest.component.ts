import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Card } from '../card/card';

@Component({
  selector: 'app-hrrequest',
  templateUrl: './hrrequest.component.html',
  styleUrls: ['./hrrequest.component.scss']
})
export class HrrequestComponent extends CardComponent {
  card: any = [];
  constructor() {
    super();
    this.card.push(new Card('HR Requests', 'Open', '6', 'This Month', 'of 10'));
  }

}
