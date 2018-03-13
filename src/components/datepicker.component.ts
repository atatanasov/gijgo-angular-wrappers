import { Component, ElementRef, ViewChild, AfterViewInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import * as types from 'gijgo';

declare var jQuery: any;

@Component({
  selector: 'gijgo-datepicker',
  template: '<input #input type="text">'
})
export class DatePickerComponent implements AfterViewInit, OnDestroy   {

  @ViewChild('input') input: ElementRef;

  @Output() change: EventEmitter<string> = new EventEmitter();
  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();

  @Input() instance: types.DatePicker;

  @Input() configuration: types.DatePickerSettings;

  ngAfterViewInit() {
    this.instance = jQuery(this.input.nativeElement).datepicker(this.configuration);
    this.instance.on('change', (e) => {
      this.change.emit(this.instance.value().toString());
    }).on('open', (e) => {
      this.open.emit();
    }).on('close', (e) => {
      this.close.emit();
    });
  }  
  
  ngOnDestroy() {
    this.instance.destroy();
  }
}