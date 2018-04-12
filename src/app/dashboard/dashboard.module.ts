import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RecentActivityComponent } from '../shared/recent-activity/recent-activity.component';
import { TodosComponent } from '../shared/todos/todos.component';
import { CardComponent } from '../shared/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesService } from '../providers/employees/employees.service';
import { ExpensesService } from '../providers/expenses/expenses.service';
import { InvoiceService } from '../providers/invoices/invoice.service';
import { HrrequestService } from '../providers/hrrequest/hrrequest.service';
import { PlanUsageService } from '../providers/plan-usage/plan-usage.service';
import { LoansService } from '../providers/loans/loans.service';
import { SavingsService } from '../providers/savings/savings.service';

import { PayrollService } from '../providers/payroll/payroll.service';
import { TodosService } from '../providers/todoList/todos.service';
import { RecentActivityService } from '../providers/recentActivity/recent-activity.service';
import { PayrollInformationComponent } from '../shared/payroll-information/payroll-information.component';
import { DashboardService } from '../providers/dashboard/dashboard.service';
import { TimesheetsService } from '../providers/timesheets/timesheets.service';
import { ConsultantsService } from '../providers/consultants/consultants.service';
import { LeaveRequestsService } from '../providers/leave-requests/leave-requests.service';
import { CompanyComponent } from './company/company.component';
import { MydashboardComponent } from './mydashboard/mydashboard.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'company',
        component: CompanyComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'myDashboard',
        component: MydashboardComponent
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  providers: [
    ConsultantsService,
    DashboardService,
    EmployeesService,
    ExpensesService,
    InvoiceService,
    HrrequestService,
    PlanUsageService,
    LeaveRequestsService,
    LoansService,
    SavingsService,
    TimesheetsService,
    PayrollService,
    TodosService,
    RecentActivityService,
    AuthGuard
  ],
  declarations: [DashboardComponent,
    RecentActivityComponent,
    TodosComponent,
    PayrollInformationComponent,
    CardComponent,
    CompanyComponent,
    MydashboardComponent]
})
export class DashboardModule { }
