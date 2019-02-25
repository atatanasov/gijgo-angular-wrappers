import { Component, ViewChild } from '@angular/core';
import { TimePickerComponent } from '../components/timepicker.component'
import * as types from 'gijgo'

@Component({
  template: '<gijgo-timepicker #timepicker [configuration]="configuration"></gijgo-timepicker><br/>' +
  'Selected Time: {{time}} <br/><br/>' +
  '<button class="btn btn-primary" (click)="setValue()">Set New Value</button>' +
  '<p>{{eventLog}}</p>'
})

export class TimePickerDemoComponent {
  @ViewChild("timepicker") timepicker: TimePickerComponent;

  configuration: types.TimePickerSettings;

  time = '17:50';

  eventLog: string = '';

  constructor() {
    this.configuration = {
      width: 276,
      value: this.time,
      open: (e) => {
        this.eventLog += 'Open is fired. ';
      },
      close: (e) => {
        this.eventLog += 'Close is fired. ';
      },
      change: (e) => {
        this.time = this.timepicker.instance.value().toString();
        this.eventLog += 'Change is fired. ';
      }
    };
  }

  setValue() {
    this.timepicker.instance.value('15:12');
  }
  
}
