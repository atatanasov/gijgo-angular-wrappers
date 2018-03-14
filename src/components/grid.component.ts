import { Component, ElementRef, ViewChild, AfterViewInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import * as types from 'gijgo';

declare var jQuery: any;

@Component({
  selector: 'gijgo-grid',
  template: '<table #table></table>'
})
export class GridComponent<TEntity, Params> implements AfterViewInit, OnDestroy   {

  @ViewChild('table') input: ElementRef;

  @Input() instance: types.Grid<TEntity, Params>;

  @Input() configuration: types.GridSettings<TEntity>;

  ngAfterViewInit() {
    this.instance = jQuery(this.input.nativeElement).grid(this.configuration);    
  }  
  
  ngOnDestroy() {
    this.instance.destroy();
  }
}