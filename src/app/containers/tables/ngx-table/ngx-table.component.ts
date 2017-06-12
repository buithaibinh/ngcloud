import { Component, OnInit, ViewChild ,ViewEncapsulation} from '@angular/core';

import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ContactDataService, ContactData } from '../../../shared/services/contact.service';

@Component({
  selector: 'app-ngx-table',
  templateUrl: './ngx-table.component.html',
  styleUrls: ['./ngx-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxTableComponent implements OnInit {
  columns = [
    { name: 'Name', prop: 'name' },
    { name: 'Company' },
    { name: 'Gender' }
  ];

  allColumns = [
    { name: 'Name', prop: 'name' },
    { name: 'Gender' },
    { name: 'Address' },
    { name: 'Country' },
    { name: 'Company' }
  ];

  currentColums: string[];

  editing = {};
  rows = [];
  rowsSelect = [];
  temp = [];
  selected = [];
  rowSelected = [];

  private multi: boolean = false;
  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor(private contactDataService: ContactDataService) {
    this.contactDataService.getAll().subscribe((data: any[]) => {
      // cache our list
      this.temp = [...data];

      this.rowsSelect = [...data];

      // push our inital complete list
      this.rows = data;
    });
    this.currentColums = ['Name', 'Company' ,'Gender'];
  }

  updateValue(event, cell, cellValue, row) {
    this.editing[row.$$index + '-' + cell] = false;
    this.rows[row.$$index][cell] = event.target.value;
  }

  ngOnInit() {
  }
  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.rows.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.temp = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
  updateDisplay(){
    console.log(this.currentColums);
  }

  toggle(col) {
    const isChecked = this.isChecked(col);
    console.log(col);
    if(isChecked) {
      this.columns = this.columns.filter((c: any) => { 
        return c.name !== col.name; 
      });
    } else {
      this.columns = [...this.columns, col];
    }
  }

  private isChecked(col: any) {
    return this.columns.find((c: any) => {
      return c.name === col.name;
    });
  }

  onSelectRows({ selected }) {
    console.log('Select Event', selected, this.rowSelected);

    this.rowSelected.splice(0, this.rowSelected.length);
    this.rowSelected.push(...selected);
  }

  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }

  add() {
    this.selected.push(this.rowsSelect[1], this.rowsSelect[3]);
  }

  update() {
    this.selected = [this.rowsSelect[1], this.rowsSelect[3]];
  }

  remove() {
    this.selected = [];
  }

  // row detail
  expanded: any = {};
  timeout: any;
  @ViewChild('expandedTable') expandedTable: any;
  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }


  toggleExpandRow(row) {
    console.log('Toggled Expand Row!', row);
    this.expandedTable.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }
}
