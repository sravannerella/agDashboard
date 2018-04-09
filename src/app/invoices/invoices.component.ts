import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Card } from '../card/card';
import { InvoiceService } from '../providers/invoices/invoice.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent extends CardComponent {

    card: any = [];
    constructor(private invoiceService: InvoiceService) {
      super();

      this.subscribe(this.invoiceService.getInvoices());
    }

}
