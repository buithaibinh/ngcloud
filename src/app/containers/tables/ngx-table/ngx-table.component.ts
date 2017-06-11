import { Component, OnInit } from '@angular/core';

import { ContactDataService, ContactData } from '../../../shared/services/contact.service';

@Component({
  selector: 'app-ngx-table',
  templateUrl: './ngx-table.component.html',
  styleUrls: ['./ngx-table.component.css']
})
export class NgxTableComponent implements OnInit {

  editing = {};
  rows = [];

  constructor(private contactDataService: ContactDataService) {
    this.contactDataService.getAll().subscribe(data => {
      this.rows = data;
    });
  }

  updateValue(event, cell, cellValue, row) {
    this.editing[row.$$index + '-' + cell] = false;
    this.rows[row.$$index][cell] = event.target.value;
  }

  ngOnInit() {
  }

}
