import { Component, ElementRef, ViewChild, AfterViewInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import * as types from 'gijgo';

declare var jQuery: any;

@Component({
  selector: 'gijgo-tree',
  template: '<input #input type="text">'
})
export class DatePickerComponent implements AfterViewInit, OnDestroy   {

  @ViewChild('input') input: ElementRef;

  @Output() change: EventEmitter<string> = new EventEmitter();
  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();

  @Input() instance: types.Tree;

  @Input() configuration: types.TreeSettings;

  ngAfterViewInit() {
    this.instance = jQuery(this.input.nativeElement).tree(this.configuration);
    this.instance.on('change', (e) => {
      this.change.emit();
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