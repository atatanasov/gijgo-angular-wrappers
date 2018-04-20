import { Component, ViewChild } from '@angular/core';
import { SliderComponent } from '../components/slider.component'
import * as types from 'gijgo'

@Component({
  template: `
  <gijgo-slider #slider [configuration]="configuration"></gijgo-slider>
  <br/>
  <p>Value: {{value}}</p>  
  `
})

export class SliderDemoComponent {
  @ViewChild("slider") slider: SliderComponent;

  configuration: types.SliderSettings;

  eventLog: string = '';

  value: Number = 0;

  constructor() {
    this.configuration = {
      uiLibrary: 'bootstrap4',
      slide: (e, value) => {
        this.value = value;
      }
    };
  }  
}