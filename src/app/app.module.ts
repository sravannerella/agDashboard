import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RecentActivityComponent } from './recent-activity/recent-activity.component';
import { PayrollInformationComponent } from './payroll-information/payroll-information.component';


@NgModule({
  declarations: [
    AppComponent,
    RecentActivityComponent,
    PayrollInformationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
