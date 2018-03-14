import { Component, ViewChild } from '@angular/core';
import { TreeComponent } from '../components/tree.component'
import * as types from 'gijgo'

@Component({
  template: '<button class="btn btn-default" (click)="expandAll()">Expand All</button> ' +
  '<button class="btn btn-default" (click)="collapseAll()">Collapse All</button><br/><br/>' +
  '<gijgo-tree #tree [configuration]="configuration"></gijgo-tree><br/>' +
  '<p>{{eventLog}}</p>'
})

export class TreeDemoComponent {
  @ViewChild("tree") tree: TreeComponent;

  configuration: types.TreeSettings;

  eventLog: string = '';

  constructor() {
    this.configuration = {
      dataSource: [ { text: 'foo', children: [ { text: 'bar' } ] } ],
      select: (e, node, id) => {
        this.eventLog += 'Node with id=' + id + ' is selected.';
      },
      unselect: (e, node, id) => {
        this.eventLog += 'Node with id=' + id + ' is unselected.';
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
