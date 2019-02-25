import { Component, ViewChild } from '@angular/core';
import { DatePickerComponent } from '../components/datepicker.component'
import * as types from 'gijgo'

@Component({
  selector: 'datepicker-demo',
  template: `
    <div>
      <gijgo-datepicker #datepicker [configuration]="configuration"></gijgo-datepicker><br/>
      Selected Date: {{date}} <br/><br/>
      <button class="btn btn-primary" (click)="setValue()">Set New Value</button><br/><br/>
      Event Log: <p>{{eventLog}}</p>
    </div>
  `
})

export class DatePickerDemoComponent {
  @ViewChild("datepicker") datepicker: DatePickerComponent;

  configuration: types.DatePickerSettings;

  date = '03/01/2019';

  eventLog: string = '';

  constructor() {
    this.configuration = { 
      width: 200,
      value: this.date,
      //locale: 'pt-br',
      open: (e) => {
        this.eventLog += 'Open is fired. ';
      },
      close: (e) => {
        this.eventLog += 'Close is fired. ';
      },
      change: (e) => {
        this.date = this.datepicker.instance.value().toString();
        this.eventLog += 'Change is fired. ';
      }
    };
  }

  setValue() {
    this.datepicker.instance.value('03/12/2019');
  }
  
}
