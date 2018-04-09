import { Component } from '@angular/core';
import { DashboardService } from './providers/dashboard/dashboard.service';
import { Card } from './card/card';
import { EmployeesService } from './providers/employees/employees.service';
import { InvoiceService } from './providers/invoices/invoice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';
  cards = [];
  serviceCards = [];

  constructor(
    private dashboardService: DashboardService,
    private employeeService: EmployeesService,
    private invoiceService: InvoiceService) {

      this.dashboardService.getOrder().subscribe(data => {
          const order = data['adminBoard'].order;
          console.log(order);

          order.map(num => {
            if (num === 1) {
              this.subscribe(this.employeeService.getEmployee());
            } else if (num === 3) {
              this.subscribe(this.invoiceService.getInvoices());
            }
          });
      });
  }


  public jsonToClass(data) {
    return new Card(data.title, data.label, data.labelData, data.tag, data.subtext);
  }

  public subscribe(service) {
    service.subscribe(data => {
      if (data.hasOwnProperty('json') ) {
        const jsonData = data['json'];

        jsonData.map(item => {
          this.serviceCards.push(this.jsonToClass(item));
        });
        this.cards.push(this.serviceCards);
        console.log(this.cards);
        this.serviceCards = [];
      }
    });
  }


}
