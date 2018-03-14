import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DatePickerDemoComponent } from './datepicker.demo.component';
import { TreeDemoComponent } from './tree.demo.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home.component';
import { DatePickerComponent } from '../components/datepicker.component';
import { TreeComponent } from '../components/tree.component';


@NgModule({
  declarations: [
    AppComponent, HomeComponent, DatePickerDemoComponent, TreeDemoComponent,
    DatePickerComponent, TreeComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
