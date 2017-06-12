import { Component, OnInit, ViewChild } from '@angular/core';

import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ContactDataService, ContactData } from '../../../shared/services/contact.service';

@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.css']
})
export class FilterTableComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  currentColums: string[];
  rows = [];
  temp = [];
  columns = [
    { name: 'Name', prop: 'name' },
    { name: 'Gender', prop: 'gender' },
    { name: 'Address', prop: 'address' },
    { name: 'Position', prop: 'position' },
  ];

  allColumns = [
    { name: 'Name', prop: 'name' },
    { name: 'Gender', prop: 'gender' },
    { name: 'Address', prop: 'address' },
    { name: 'Position', prop: 'position' },
    { name: 'Start Date', prop: 'startDate' },
    { name: 'DOB', prop: 'birthday' },
    { name: 'Country', prop: 'country' },
    { name: 'Company', prop: 'company' }
  ];
  constructor(private contactDataService: ContactDataService) {
    this.contactDataService.getAll().subscribe((data: any[]) => {
      // cache our list
      this.temp = [...data];

      // push our inital complete list
      this.rows = data;
    });
    this.currentColums = ['name', 'gender', 'address', 'position'];
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
      return c.prop === col.prop;
    });
  }

  ngOnInit() {
  }

  updateDisplay(){
    console.log(this.currentColums);
  }
}
