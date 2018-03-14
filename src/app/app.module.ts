import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { DatePickerDemoComponent } from './datepicker.demo.component';
import { TimePickerDemoComponent } from './timepicker.demo.component';
import { TreeDemoComponent } from './tree.demo.component';
import { GridDemoComponent } from './grid.demo.component';
import { EditorDemoComponent } from './editor.demo.component';
import { DialogDemoComponent } from './dialog.demo.component';
import { CheckBoxDemoComponent } from './checkbox.demo.component';
import { DropDownDemoComponent } from './dropdown.demo.component';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home.component';

import { DatePickerComponent } from '../components/datepicker.component';
import { TimePickerComponent } from '../components/timepicker.component';
import { TreeComponent } from '../components/tree.component';
import { GridComponent } from '../components/grid.component';
import { EditorComponent } from '../components/editor.component';
import { DialogComponent } from '../components/dialog.component';
import { CheckBoxComponent } from '../components/checkbox.component';
import { DropDownComponent } from '../components/dropdown.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent,
    DatePickerDemoComponent, TimePickerDemoComponent, TreeDemoComponent, GridDemoComponent, EditorDemoComponent, DialogDemoComponent, CheckBoxDemoComponent, DropDownDemoComponent,
    DatePickerComponent, TimePickerComponent, TreeComponent, GridComponent, EditorComponent, DialogComponent, CheckBoxComponent, DropDownComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
