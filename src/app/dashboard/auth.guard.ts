import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DashboardService } from '../providers/dashboard/dashboard.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private dashboardService: DashboardService, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.dashboardService.getOrder().map(data => {
      const show = data['company'].available;

      if (!show) {
        this.router.navigateByUrl('/myDashboard');
      }

      return show;
    });
  }

}
