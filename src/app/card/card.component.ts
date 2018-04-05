import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(
    private title: String,
    private label: String,
    private labelData: String,
    private tag: String,
    private subtext: String) { }

  ngOnInit() {
  }

}
