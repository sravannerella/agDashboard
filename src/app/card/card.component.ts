import { Component, Input } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
    @Input() card: [Card];
    @Input() mode;
    currentIndex = 0;

    public jsonToClass(data) {
      return new Card(data.title, data.label, data.labelData, data.tag, data.subtext);
    }

    public subscribe(service) {
      service.subscribe(data => {
        if (data.hasOwnProperty('json') ) {
          const jsonData = data['json'];
          jsonData.map(item => {
            this.card.push(this.jsonToClass(item));
          });
        }
      });
    }

    next(index) {
      if (this.card.length === (index + 1) ) {
        this.currentIndex = 0;
      } else {
        this.currentIndex = index + 1;
      }
      console.log(this.currentIndex, this.card.length, index);
    }

    previous(index) {
      if (this.card.length === (index + 1) || this.currentIndex === 0) {
        this.currentIndex = 0;
      } else {
        this.currentIndex = index - 1;
      }
      console.log(this.currentIndex, this.card.length, index);
    }
}
