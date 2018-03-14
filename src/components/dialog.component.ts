import { Component, ElementRef, ViewChild, AfterViewInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import * as types from 'gijgo';

declare var jQuery: any;

@Component({
  selector: 'gijgo-dialog',
  template: '<div #div></div>'
})
export class DialogComponent implements AfterViewInit, OnDestroy   {

  @ViewChild('div') input: ElementRef;

  @Input() instance: types.Dialog;

  @Input() configuration: types.DialogSettings;

  ngAfterViewInit() {
    this.instance = jQuery(this.input.nativeElement).dialog(this.configuration);    
  }  
  
  ngOnDestroy() {
    this.instance.destroy(true);
  }
}