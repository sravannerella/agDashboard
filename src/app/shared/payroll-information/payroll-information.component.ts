import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as c3 from 'c3';
import { PayrollService } from '../../providers/payroll/payroll.service';

@Component({
  selector: 'app-payroll-information',
  templateUrl: './payroll-information.component.html',
  styleUrls: ['./payroll-information.component.scss']
})
export class PayrollInformationComponent implements AfterViewInit {

   payrollSummary: any;
   batchSummary: any;
   color: any;
   result: any;
   val1: any;
   val2: any;
   percent: any;
   width: PayrollInformationComponent[] = [];
  array1: PayrollInformationComponent[] = [];

  constructor(private payrollService: PayrollService) {

    this.getPayrollSummary();
    this.getBatchSummary();
    this.color = ['#69b23b', '#2c4b19', '#777', '#93d37c', '#444'];

  }

  getPayrollSummary() {
    this.payrollService.getPayrollSummary().subscribe(res => {
      // console.log(res[1]);
      // console.log(Object.values(res[res.length - 1]));
      this.result = Object.values(res[res.length - 1]);
      console.log(this.result[0]);
      this.payrollSummary = this.result[0] ;
    },
      error => {
        console.log(error);
      });
  }


  getSum(total, num) {
  return total + num;
}
  getBatchSummary() {
    this.payrollService.getBatchSummary().subscribe(res => {
       this.batchSummary = res;
       console.log(this.batchSummary);
       console.log(this.payrollSummary);

      for (const x of this.batchSummary) {
       // tslint:disable-next-line:radix
       this.val1 = parseInt(x.batch_value);
      this.array1.push(this.val1);
        console.log(this.array1);
      }

      for (const x of this.batchSummary) {
      // tslint:disable-next-line:radix
      this.val1 = parseInt(x.batch_value);
      this.val2 = this.array1.reduce(this.getSum);
      this.percent = (this.val1 / this.val2) * 100;
      this.width.push(this.percent);
      }
      console.log(this.width);
    },
      error => {
        console.log(error);
      });
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
