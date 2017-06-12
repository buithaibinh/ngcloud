import { Component, OnInit } from '@angular/core';

import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ContactDataService, ContactData } from '../../../shared/services/contact.service';

@Component({
  selector: 'app-inline-table',
  templateUrl: './inline-table.component.html',
  styleUrls: ['./inline-table.component.css']
})
export class InlineTableComponent implements OnInit {
  editing = {};
  rows = [];
  constructor(private contactDataService: ContactDataService) {
    this.contactDataService.getAll().subscribe((data: any[]) => {
      this.rows = data;
    });
  }
  ngOnInit() {
  }

  updateValue(event, cell, cellValue, row) {
    this.editing[row.$$index + '-' + cell] = false;
    this.rows[row.$$index][cell] = event.target.value;
  }

}
