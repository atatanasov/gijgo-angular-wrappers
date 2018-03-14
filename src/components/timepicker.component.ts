import { Component, ElementRef, ViewChild, AfterViewInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import * as types from 'gijgo';

declare var jQuery: any;

@Component({
  selector: 'gijgo-timepicker',
  template: '<input #input type="text">'
})
export class TimePickerComponent implements AfterViewInit, OnDestroy   {

  @ViewChild('input') input: ElementRef;

  @Input() instance: types.TimePicker;

  @Input() configuration: types.TimePickerSettings;

  ngAfterViewInit() {
    this.instance = jQuery(this.input.nativeElement).datepicker(this.configuration);    
  }  
  
  ngOnDestroy() {
    this.instance.destroy();
  }
}