import { Component, ViewChild } from '@angular/core';
import { EditorComponent } from '../components/editor.component'
import * as types from 'gijgo'

@Component({
  template: `
  <gijgo-editor #editor [configuration]="configuration"></gijgo-editor>
  <br/>
  <p>HTML:</p>
  {{html}}
  `
})

export class EditorDemoComponent {
  @ViewChild("editor") editor: EditorComponent;

  configuration: types.EditorSettings;

  eventLog: string = '';

  html: string = '';

  constructor() {
    this.configuration = {
      uiLibrary: 'bootstrap4',
      changed: (e) => {
        this.html = this.editor.instance.content().toString();
      }
    };
  }  
}