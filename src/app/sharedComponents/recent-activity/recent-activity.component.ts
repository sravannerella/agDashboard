import { Component, OnInit } from '@angular/core';
import { RecentActivityService } from '../../providers/recentActivity/recent-activity.service';

@Component({
  selector: 'app-recent-activity',
  templateUrl: './recent-activity.component.html',
  styleUrls: ['./recent-activity.component.scss']
})
export class RecentActivityComponent implements OnInit {
  recentData: any;

  constructor(private recentDataService: RecentActivityService) {  
  }

  ngOnInit() {
    this.getRecentActivity();
  }
  getRecentActivity() {
    this.recentDataService.getRecentActivity().subscribe(res => {
      // console.log(res);
      this.recentData = res;
    },
      error => {
        console.log(error)
      })
  }
}
