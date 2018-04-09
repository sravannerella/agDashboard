import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { RecentActivityComponent } from './recent-activity/recent-activity.component';
import { TodosComponent } from './todos/todos.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesService } from './providers/employees/employees.service';
import { ExpensesService } from './providers/expenses/expenses.service';
import { InvoiceService } from './providers/invoices/invoice.service';
import { HrrequestService } from './providers/hrrequest/hrrequest.service';
import { PlanUsageService } from './providers/plan-usage/plan-usage.service';
import { LoansService } from './providers/loans/loans.service';
import { SavingsService } from './providers/savings/savings.service';
import { PayrollInformationComponent } from './payroll-information/payroll-information.component';
import { DashboardService } from './providers/dashboard/dashboard.service';


@NgModule({
  declarations: [
    AppComponent,
    RecentActivityComponent,
    TodosComponent,
    PayrollInformationComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    DashboardService,
    EmployeesService,
    ExpensesService,
    InvoiceService,
    HrrequestService,
    PlanUsageService,
    LoansService,
    SavingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
