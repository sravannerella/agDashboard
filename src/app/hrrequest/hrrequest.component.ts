import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Card } from '../card/card';
import { HrrequestService } from '../providers/hrrequest/hrrequest.service';

@Component({
  selector: 'app-hrrequest',
  templateUrl: './hrrequest.component.html',
  styleUrls: ['./hrrequest.component.scss']
})
export class HrrequestComponent extends CardComponent {
  card: any = [];
  constructor(private hrService: HrrequestService) {
    super();
    this.subscribe(hrService.getHrRequests());
  }

}
