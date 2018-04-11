import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../providers/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  showCompany: boolean;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getOrder().subscribe(data => {
      this.showCompany = data['company'].available;
    });
  }

}
