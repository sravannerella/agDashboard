import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as c3 from 'c3';
import { PayrollService } from '../providers/payroll/payroll.service';

@Component({
  selector: 'app-payroll-information',
  templateUrl: './payroll-information.component.html',
  styleUrls: ['./payroll-information.component.scss']
})
export class PayrollInformationComponent implements AfterViewInit {

   payrollSummary: any;
   batchSummary: any;

  constructor(private payrollService: PayrollService) {

    this.getPayrollSummary();
    this.getBatchSummary();
    
  }

  getPayrollSummary() {
    this.payrollService.getPayrollSummary().subscribe(res => {
      console.log(res);
      this.payrollSummary = res;
    },
      error => {
        console.log(error)
      })
  }

  getBatchSummary() {
    this.payrollService.getBatchSummary().subscribe(res => {
      console.log(res);
      this.batchSummary = res;
    },
      error => {
        console.log(error)
      })
  }

  ngAfterViewInit() {
    const chart = c3.generate({
      data: {
        columns: [
          ['Net Amount', 430, 200, 200, 400, 150, 250],
          ['TDS', 330, 100, 500, 200, 150, 50],
          ['Loans/Advances', 230, 200, 200, 300, 250, 650],
          ['Bonus & Commissions', 50, 100, 260, 800, 50, 950],
          ['Loss of Pay', 80, 100, 500, 200, 150, 50],
          ['Other', 10, 790, 560, 450, 300, 700]
        ],
        type: 'bar',
        groups: [
          ['Net Amount', 'TDS', 'Loans/Advances', 'Bonus & Commissions', 'Loss of Pay', 'Other']
        ]
      },
      color: {
        pattern: ['#69b23b', '#2c4b19', '#83c858', '#4f862c', '#93d37c']
      },
      axis: {
        x: {
          type: 'category',
          categories: ['April', 'May', 'June', 'July', 'Aug', 'Sep']
        }
      },
      legend: {
        show: false
      }
    });
  }
}
