import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { DatePickerDemoComponent } from './datepicker.demo.component';
import { TimePickerDemoComponent } from './timepicker.demo.component';
import { DateTimePickerDemoComponent } from './datetimepicker.demo.component';
import { TreeDemoComponent } from './tree.demo.component';
import { GridDemoComponent } from './grid.demo.component';
import { EditorDemoComponent } from './editor.demo.component';
import { DialogDemoComponent } from './dialog.demo.component';
import { CheckBoxDemoComponent } from './checkbox.demo.component';
import { DropDownDemoComponent } from './dropdown.demo.component';
import { SliderDemoComponent } from './slider.demo.component';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home.component';

import { DatePickerComponent } from '../components/datepicker.component';
import { TimePickerComponent } from '../components/timepicker.component';
import { DateTimePickerComponent } from '../components/datetimepicker.component';
import { TreeComponent } from '../components/tree.component';
import { GridComponent } from '../components/grid.component';
import { EditorComponent } from '../components/editor.component';
import { DialogComponent } from '../components/dialog.component';
import { CheckBoxComponent } from '../components/checkbox.component';
import { DropDownComponent } from '../components/dropdown.component';
import { SliderComponent } from '../components/slider.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent,
    DatePickerDemoComponent, TimePickerDemoComponent, DateTimePickerDemoComponent, TreeDemoComponent, GridDemoComponent, EditorDemoComponent, DialogDemoComponent, CheckBoxDemoComponent, DropDownDemoComponent, SliderDemoComponent,
    DatePickerComponent, TimePickerComponent, DateTimePickerComponent, TreeComponent, GridComponent, EditorComponent, DialogComponent, CheckBoxComponent, DropDownComponent, SliderComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
