import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../../providers/dashboard/dashboard.service';
import { Card } from '../../sharedComponents/card/card';
import { EmployeesService } from '../../providers/employees/employees.service';
import { InvoiceService } from '../../providers/invoices/invoice.service';
import { PlanUsageService } from '../../providers/plan-usage/plan-usage.service';
import { HrrequestService } from '../../providers/hrrequest/hrrequest.service';
import { ExpensesService } from '../../providers/expenses/expenses.service';
import { SavingsService } from '../../providers/savings/savings.service';
import { LoansService } from '../../providers/loans/loans.service';
import { LeaveRequestsService } from '../../providers/leave-requests/leave-requests.service';
import { TimesheetsService } from '../../providers/timesheets/timesheets.service';
import { ConsultantsService } from '../../providers/consultants/consultants.service';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent{
  title = 'app';
  cards = [];
  serviceCards = [];
  service: any;

  constructor(
    private dashboardService: DashboardService,
    private employeeService: EmployeesService,
    private invoiceService: InvoiceService,
    private planService: PlanUsageService,
    private hrService: HrrequestService,
    private expenseService: ExpensesService,
    private savingService: SavingsService,
    private loanService: LoansService,
    private leaveService: LeaveRequestsService,
    private timesheetService: TimesheetsService,
    private consultantService: ConsultantsService) {

    this.dashboardService.getOrder().subscribe(data => {
      const order = data['company'].order;
      console.log(order);

      order.map(num => {
        if (num === 1) {
          this.service = this.employeeService.getEmployee();
        } else if (num === 2) {
          this.service = this.consultantService.getConsultants();
        } else if (num === 3) {
          this.service = this.invoiceService.getInvoices();
        } else if (num === 4) {
          this.service = this.planService.getPlanUsage();
        } else if (num === 5) {
          this.service = this.hrService.getHrRequests();
        } else if (num === 6) {
          this.service = this.expenseService.getExpenses();
        } else if (num === 7) {
          this.service = this.savingService.getSavings();
        } else if (num === 8) {
          this.service = this.loanService.getLoans();
        } else if (num === 9) {
          this.service = this.timesheetService.getTimesheets();
        } else if (num === 10) {
          this.service = this.leaveService.getLeaves();
        }

        this.subscribe(this.service);
      });
    });
  }

  public jsonToClass(data) {
    return new Card(data.title, data.label, data.labelData, data.tag, data.subtext);
  }

  public subscribe(service) {
    service.subscribe(data => {
      if (data.hasOwnProperty('json')) {
        const jsonData = data['json'];

        jsonData.map(item => {
          this.serviceCards.push(this.jsonToClass(item));
        });
        this.cards.push(this.serviceCards);
        this.serviceCards = [];
      }
    });
  }


}
