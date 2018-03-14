import { Component, ElementRef, ViewChild, AfterViewInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import * as types from 'gijgo';

declare var jQuery: any;

@Component({
  selector: 'gijgo-checkbox',
  template: '<input #input type="checkbox">'
})
export class CheckBoxComponent implements AfterViewInit, OnDestroy   {

  @ViewChild('input') input: ElementRef;

  @Input() instance: types.Checkbox;

  @Input() configuration: types.CheckboxSettings;

  ngAfterViewInit() {
    this.instance = jQuery(this.input.nativeElement).checkbox(this.configuration);    
  }  
  
  ngOnDestroy() {
    this.instance.destroy();
  }
}