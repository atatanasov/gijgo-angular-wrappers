import { Component, ViewChild } from '@angular/core';
import { EditorComponent } from '../components/editor.component'
import * as types from 'gijgo'

@Component({
  template: '<gijgo-editor #editor [configuration]="configuration"></gijgo-editor><br/>'
})

export class EditorDemoComponent {
  @ViewChild("editor") editor: EditorComponent;

  configuration: types.EditorSettings;

  eventLog: string = '';

  constructor() {
    this.configuration = {
      uiLibrary: 'bootstrap4'
    };
  }  
}