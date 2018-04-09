import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-payroll-information',
  templateUrl: './payroll-information.component.html',
  styleUrls: ['./payroll-information.component.scss']
})
export class PayrollInformationComponent implements AfterViewInit {

   payrollSummary: any;
   batchSummary: any;

  constructor() {
    this.payrollSummary = [{
      'amt_desc': 'Net Amount',
      'amt_value': '$12,37,897'
    },
      {
        'amt_desc': 'TDS',
        'amt_value': '$12,37,897'
      },
      {
        'amt_desc': 'Loans/Advances',
        'amt_value': '$12,37,897'
      },
      {
        'amt_desc': 'Loss of Pay',
        'amt_value': '$12,37,897'
      },
      {
        'amt_desc': 'Other',
        'amt_value': '$12,37,897'
      },
      {
        'amt_desc': 'Total',
        'amt_value': '$14,37,897'
      }

    ];

    this.batchSummary = [{
      'batch_desc': 'Full Time Batch',
      'batch_value': '$12,34,56,789',
      'width': '70',
      'backgroundcolor':'#69b23b'
    },
      {
        'batch_desc': 'Full Time Batch',
        'batch_value': '$12,34,56,789',
        'width': '40',
        'backgroundcolor': '#2c4b19'
      },
      {
        'batch_desc': 'Part Time Batch',
        'batch_value': '$12,34,56,789',
        'width': '70',
        'backgroundcolor': '#83c858'
      },
      {
        'batch_desc': 'Part Time Batch',
        'batch_value': '$12,34,56,789',
        'width': '90',
        'backgroundcolor': '#93d37c'
      }];
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
