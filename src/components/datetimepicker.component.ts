import { Component, ElementRef, ViewChild, AfterViewInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import * as types from 'gijgo';

declare var jQuery: any;

@Component({
  selector: 'gijgo-datetimepicker',
  template: '<input #input type="text">'
})
export class DateTimePickerComponent implements AfterViewInit, OnDestroy   {

  @ViewChild('input') input: ElementRef;

  @Input() instance: types.DateTimePicker;

  @Input() configuration: types.DateTimePickerSettings;

  ngAfterViewInit() {
    this.instance = jQuery(this.input.nativeElement).datetimepicker(this.configuration);    
  }  
  
  ngOnDestroy() {
    this.instance.destroy();
  }
}