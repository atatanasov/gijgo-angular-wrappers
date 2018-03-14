import { Component, ViewChild } from '@angular/core';
import { CheckBoxComponent } from '../components/checkbox.component'
import * as types from 'gijgo'

@Component({
  template: '<gijgo-checkbox #checkbox [configuration]="configuration"></gijgo-checkbox><br/>'
})

export class CheckBoxDemoComponent {
  @ViewChild("checkbox") checkbox: CheckBoxComponent;

  configuration: types.CheckboxSettings;

  eventLog: string = '';

  constructor() {
    this.configuration = {
      uiLibrary: 'bootstrap4'
    };
  }  
}