import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { DatePickerDemoComponent } from './datepicker.demo.component';
import { TreeDemoComponent } from './tree.demo.component';
import { GridDemoComponent } from './grid.demo.component';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home.component';

import { DatePickerComponent } from '../components/datepicker.component';
import { TreeComponent } from '../components/tree.component';
import { GridComponent } from '../components/grid.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, DatePickerDemoComponent, TreeDemoComponent, GridDemoComponent,
    DatePickerComponent, TreeComponent, GridComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
