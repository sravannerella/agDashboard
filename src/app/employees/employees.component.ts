import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Card } from '../card/card';
import { EmployeesService } from '../providers/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent extends CardComponent {
    card: any = [];
    constructor(private employeeService: EmployeesService) {
      super();

      this.employeeService.getEmployee().subscribe(data => {
        if (data.hasOwnProperty('json') ) {
          const jsonData = data['json'];
          jsonData.map(item => {
            this.card.push(this.jsonToClass(item));
          });
        }
      });
    }
}
