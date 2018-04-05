import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
