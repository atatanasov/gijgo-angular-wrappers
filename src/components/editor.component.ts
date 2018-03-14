import { Component, ElementRef, ViewChild, AfterViewInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import * as types from 'gijgo';

declare var jQuery: any;

@Component({
  selector: 'gijgo-editor',
  template: '<textarea #textarea></textarea>'
})
export class EditorComponent implements AfterViewInit, OnDestroy   {

  @ViewChild('textarea') input: ElementRef;

  @Input() instance: types.Editor;

  @Input() configuration: types.EditorSettings;

  ngAfterViewInit() {
    this.instance = jQuery(this.input.nativeElement).editor(this.configuration);    
  }  
  
  ngOnDestroy() {
    this.instance.destroy();
  }
}