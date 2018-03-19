import { Component, ViewChild } from '@angular/core';
import { TreeComponent } from '../components/tree.component'
import * as types from 'gijgo'

@Component({
  template: `
    <p>
    <button class="btn btn-default" (click)="expandAll()">Expand All</button>
    <button class="btn btn-default" (click)="collapseAll()">Collapse All</button>
    </p>
    <br/>
    <gijgo-tree #tree [configuration]="configuration"></gijgo-tree>
    <br/>
    <p>Event Log:</p>
    <div [innerHTML]="eventLog"></div>
  `
})

export class TreeDemoComponent {
  @ViewChild("tree") tree: TreeComponent;

  configuration: types.TreeSettings;

  eventLog: string = '';

  constructor() {
    this.configuration = {
      dataSource: [ 
        { text: 'Node 1', children: [ { text: 'Node 1.1' }, { text: 'Node 1.2' },  { text: 'Node 1.3' } ] },
        { text: 'Node 2', children: [ { text: 'Node 2.1' }, { text: 'Node 2.2' } ] },
        { text: 'Node 3', children: [ { text: 'Node 3.1' }, { text: 'Node 3.2' } ] }
      ],
      select: (e, node, id) => {
        this.eventLog += '<p>Node with id=' + id + ' is selected.</p>';
      },
      unselect: (e, node, id) => {
        this.eventLog += '<p>Node with id=' + id + ' is unselected.</p>';
      }
    };
  }

  expandAll() {
    this.tree.instance.expandAll();
  }

  collapseAll() {
    this.tree.instance.collapseAll();
  }  
}
