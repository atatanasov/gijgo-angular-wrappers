import { Component, ViewChild } from '@angular/core';
import { GridComponent } from '../components/grid.component'
import * as types from 'gijgo'

@Component({
  selector: '',
  template: `
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <p>
      <button class="btn btn-default" (click)="addRecord()">Add New</button>  &nbsp;
      <button class="btn btn-default" (click)="getAll()">Get All Data</button>
    </p>
    <gijgo-grid #grid [configuration]="configuration"></gijgo-grid>
  `
})

export class GridDemoComponent {
  @ViewChild("grid") grid: GridComponent<IPlayer, Params>;

  configuration: types.GridSettings<IPlayer>;

  lastPrimaryKey: number = 3;

  columns: Array<types.GridColumn> = [
    { field: 'ID', width: 86 },
    { field: 'Name' },
    { field: 'PlaceOfBirth' },
    { width: 64, tmpl: '<span class="material-icons gj-cursor-pointer">delete</span>', align: 'center', events: { 'click': (e) => this.remove(e) } }
  ];

  constructor() {
    this.configuration = {
      uiLibrary: 'bootstrap4',
      dataSource: [
        { 'ID': 1, 'Name': 'Hristo Stoichkov', 'PlaceOfBirth': 'Plovdiv, Bulgaria' },
        { 'ID': 2, 'Name': 'Ronaldo Luis Nazario de Lima', 'PlaceOfBirth': 'Rio de Janeiro, Brazil' },
        { 'ID': 3, 'Name': 'David Platt', 'PlaceOfBirth': 'Chadderton, Lancashire, England' }
      ],
      columns: this.columns,
      primaryKey: 'ID',
      pager: { limit: 5 }
    };
  }

  addRecord() {
    this.lastPrimaryKey++;
    this.grid.instance.addRow({ 'ID': this.lastPrimaryKey, 'Name': 'New Player' + this.lastPrimaryKey, 'PlaceOfBirth': 'Home' });
  }

  getAll() {
    alert(JSON.stringify(this.grid.instance.getAll()));
  }

  remove(e) {
    this.grid.instance.removeRow(e.data.id);
  }
}

interface IPlayer {
  ID?: number;
  Name?: string;
  PlaceOfBirth?: string;
}

interface Params {
  page?: number
}
