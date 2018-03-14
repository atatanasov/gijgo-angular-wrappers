import { Component, ElementRef, ViewChild, AfterViewInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import * as types from 'gijgo';

declare var jQuery: any;

@Component({
  selector: 'gijgo-tree',
  template: '<div #div></div>'
})
export class TreeComponent implements AfterViewInit, OnDestroy   {

  @ViewChild('div') div: ElementRef;

  @Input() instance: types.Tree;

  @Input() configuration: types.TreeSettings;

  ngAfterViewInit() {
    this.instance = jQuery(this.div.nativeElement).tree(this.configuration);
  }  

  ngOnDestroy() {
    this.instance.destroy();
  }
}