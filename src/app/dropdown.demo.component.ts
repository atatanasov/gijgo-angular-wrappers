import { Component, ViewChild } from '@angular/core';
import { DropDownComponent } from '../components/dropdown.component'
import * as types from 'gijgo'

@Component({
  template: '<gijgo-dropdown #dropdown [configuration]="configuration"></gijgo-dropdown><br/>'
})

export class DropDownDemoComponent {
  @ViewChild("dropdown") dropdown: DropDownComponent;

  configuration: types.DropDownSettings;

  eventLog: string = '';

  constructor() {
    this.configuration = {
      uiLibrary: 'bootstrap4',
      width: 260,
      dataSource: ['one', 'two', 'three']
    };
  }
}