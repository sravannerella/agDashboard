import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-activity',
  templateUrl: './recent-activity.component.html',
  styleUrls: ['./recent-activity.component.scss']
})
export class RecentActivityComponent implements OnInit {
  recentData: any;

  constructor() { 
    this.recentData = [{
      'imgsrc':"http://www.kvklawyers.com/wp-content/uploads/2018/03/placeholder.jpg",
      'name':'John',
      'task':'Created Timesheets',
      'time':'4/5/2018'
    },
      {
        'imgsrc': "http://www.kvklawyers.com/wp-content/uploads/2018/03/placeholder.jpg",
        'name': 'John',
        'task': 'Created Timesheets',
        'time': '4/5/2018'
      },
      {
        'imgsrc': "http://www.kvklawyers.com/wp-content/uploads/2018/03/placeholder.jpg",
        'name': 'John',
        'task': 'Created Timesheets',
        'time': '4/5/2018'
      }];
  }

  ngOnInit() {

  }

}
