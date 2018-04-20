import { Component, ElementRef, ViewChild, AfterViewInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import * as types from 'gijgo';

declare var jQuery: any;

@Component({
  selector: 'gijgo-slider',
  template: '<input #input type="text">'
})
export class SliderComponent implements AfterViewInit, OnDestroy   {

  @ViewChild('input') div: ElementRef;

  @Input() instance: types.Slider;

  @Input() configuration: types.SliderSettings;

  ngAfterViewInit() {
    this.instance = jQuery(this.div.nativeElement).slider(this.configuration);
  }  

  ngOnDestroy() {
    this.instance.destroy();
  }
}