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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
