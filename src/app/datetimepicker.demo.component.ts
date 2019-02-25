import { Component, ViewChild } from '@angular/core';
import { DateTimePickerComponent } from '../components/datetimepicker.component'
import * as types from 'gijgo'

@Component({
  template: '<gijgo-datetimepicker #datetimepicker [configuration]="configuration"></gijgo-datetimepicker><br/>' +
  'Selected DateTime: {{time}} <br/><br/>' +
  '<button class="btn btn-primary" (click)="setValue()">Set New Value</button>' +
  '<p>{{eventLog}}</p>'
})

export class DateTimePickerDemoComponent {
  @ViewChild("datetimepicker") timepicker: DateTimePickerComponent;

  configuration: types.DateTimePickerSettings;

  time = '17:50 03/20/2019';

  eventLog: string = '';

  constructor() {
    this.configuration = {
      width: 276,
      value: this.time,
      format: 'HH:MM mm/dd/yyyy',
      footer: true,
      modal: true,
      change: (e) => {
        this.time = this.timepicker.instance.value().toString();
        this.eventLog += 'Change is fired.';
      }
    };
  }

  setValue() {
    this.timepicker.instance.value('15:12 04/18/2018');
  }
  
}
