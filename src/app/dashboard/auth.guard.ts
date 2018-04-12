import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DashboardService } from '../providers/dashboard/dashboard.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private dashboardService: DashboardService, private router: Router) { }

  route(data) {
    const show = data['company'].available;

      if (!show) {
        this.router.navigateByUrl('/myDashboard');
      }

      return show;
  }

  canActivate(): Observable<boolean> {

    const data = JSON.parse(localStorage.getItem('dashboard'));
    if (data !== undefined && data !== null) {
      return this.route(data);
    }

    return this.dashboardService.getOrder().map(dashboardData => {
      return this.route(dashboardData);
    });

  }

}
