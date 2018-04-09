import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { RecentActivityComponent } from './recent-activity/recent-activity.component';
import { PayrollInformationComponent } from './payroll-information/payroll-information.component';
import { TodosComponent } from './todos/todos.component';
import { CardComponent } from './card/card.component';
import { EmployeesComponent } from './employees/employees.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { PlanUsageComponent } from './plan-usage/plan-usage.component';
import { HrrequestComponent } from './hrrequest/hrrequest.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { SavingsComponent } from './savings/savings.component';
import { LoansComponent } from './loans/loans.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesService } from './providers/employees/employees.service';
import { ExpensesService } from './providers/expenses/expenses.service';
import { InvoiceService } from './providers/invoices/invoice.service';
import { HrrequestService } from './providers/hrrequest/hrrequest.service';
import { PlanUsageService } from './providers/plan-usage/plan-usage.service';
import { LoansService } from './providers/loans/loans.service';
import { SavingsService } from './providers/savings/savings.service';


@NgModule({
  declarations: [
    AppComponent,
    RecentActivityComponent,
    PayrollInformationComponent,
    TodosComponent,
    CardComponent,
    EmployeesComponent,
    InvoicesComponent,
    PlanUsageComponent,
    HrrequestComponent,
    TimesheetComponent,
    ExpensesComponent,
    SavingsComponent,
    LoansComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [EmployeesService, ExpensesService, InvoiceService, HrrequestService, PlanUsageService, LoansService, SavingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
