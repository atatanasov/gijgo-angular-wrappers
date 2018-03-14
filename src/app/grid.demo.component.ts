import { Component, ViewChild } from '@angular/core';
import { GridComponent } from '../components/grid.component'
import * as types from 'gijgo'

@Component({
  selector: '',
  template: '<gijgo-grid #grid [configuration]="configuration"></gijgo-grid>'
})

export class GridDemoComponent {
  @ViewChild("grid") grid: GridComponent<IPlayer, Params>;

  configuration: types.GridSettings<IPlayer>;

  eventLog: string = '';

  data: Array<IPlayer> = [
    { 'ID': 101, 'Name': 'Hristo Stoichkov', 'PlaceOfBirth': 'Plovdiv, Bulgaria' },
    { 'ID': 102, 'Name': 'Ronaldo Luis Nazario de Lima', 'PlaceOfBirth': 'Rio de Janeiro, Brazil' },
    { 'ID': 103, 'Name': 'David Platt', 'PlaceOfBirth': 'Chadderton, Lancashire, England' }
  ];

  columns: Array<types.GridColumn> = [
    { field: 'ID', width: 86 },
    { field: 'Name' },
    { field: 'PlaceOfBirth' }
  ];

  constructor() {
    this.configuration = {
      dataSource: this.data,
      columns: this.columns
    };
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
