import { Component, ElementRef, ViewChild, AfterViewInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import * as types from 'gijgo';

declare var jQuery: any;

@Component({
  selector: 'gijgo-dropdown',
  template: '<select #select></select>'
})
export class DropDownComponent implements AfterViewInit, OnDestroy   {

  @ViewChild('select') input: ElementRef;

  @Input() instance: types.DropDown;

  @Input() configuration: types.DropDownSettings;

  ngAfterViewInit() {
    this.instance = jQuery(this.input.nativeElement).dropdown(this.configuration);    
  }  
  
  ngOnDestroy() {
    this.instance.destroy();
  }
}