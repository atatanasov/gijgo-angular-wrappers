import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { DialogComponent } from '../components/dialog.component'
import * as types from 'gijgo'

@Component({
  template: '<gijgo-dialog #dialog [configuration]="configuration"></gijgo-dialog>'
})

export class DialogDemoComponent implements AfterViewInit {
  @ViewChild("dialog") dialog: DialogComponent;

  configuration: types.DialogSettings;

  eventLog: string = '';

  constructor() {
    this.configuration = {
      uiLibrary: 'bootstrap4'
    };
  }
  ngAfterViewInit() {
    this.dialog.instance.content('test content'); 
  }  
}