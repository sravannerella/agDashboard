import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as c3 from 'c3';
import { PayrollService } from '../../providers/payroll/payroll.service';

@Component({
  selector: 'app-payroll-information',
  templateUrl: './payroll-information.component.html',
  styleUrls: ['./payroll-information.component.scss']
})
export class PayrollInformationComponent implements AfterViewInit {

   payrollSummarylabel: any;
   payrollSummaryvalue: PayrollInformationComponent[]=[];
   batchSummary: any;
   color:any;
   result:any;
   batchVal:any;
   batchTotal:any;
   percent:any;
   width: PayrollInformationComponent[]=[];
   batchValArray: PayrollInformationComponent[] = [];
   payrollTotal:any;
   payrollValue: any;
   categoryLabel:any;
   graphData:any;

  constructor(private payrollService: PayrollService) {
    this.color = ['#69b23b', '#2c4b19', '#777', '#93d37c', '#444'];
  }

  getPayrollSummary() {
    this.payrollService.getPayrollSummary().subscribe(res => {
      this.categoryLabel = res.months;
      this.graphData = res.graph;
      this.payrollTotal = res.total;
      this.payrollSummarylabel = Object.keys(res.graph);
      Object.entries(res.graph).map(obj => {
      const key = obj[0];
      this.payrollSummaryvalue.push(obj[1][5]);
      // console.log(this.payrollSummaryvalue)
      });
      const chart = c3.generate({
        data: {
          json: this.graphData,
          type: 'bar',
          groups: [
            this.payrollSummarylabel
          ]
        },
        color: {
          pattern: ['#69b23b', '#2c4b19', '#83c858', '#4f862c', '#93d37c']
        },
        axis: {
          x: {
            type: 'category',
            categories: this.categoryLabel
          }
        },
        legend: {
          show: false
        }
      });
    },
      error => {
        console.log(error)
      })
  }

  getBatchTotal(total, num) {
  return total + num;
}
  getBatchSummary() {
    this.payrollService.getBatchSummary().subscribe(res => {
       this.batchSummary = res;
      for (let x of this.batchSummary) {
      this.batchVal = parseInt(x.batch_value);
      this.batchValArray.push(this.batchVal);
      }
      for(let x of this.batchSummary){
        this.batchVal = parseInt(x.batch_value);
        this.batchTotal = this.batchValArray.reduce(this.getBatchTotal);
        this.percent=(this.batchVal/this.batchTotal)*100;
        this.width.push(this.percent);
      }
    },
      error => {
        console.log(error)
      })
  }

  ngAfterViewInit() {
    this.getPayrollSummary();
    this.getBatchSummary();
    
   
  }
}
