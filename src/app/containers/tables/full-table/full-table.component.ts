import { Component, OnInit } from '@angular/core';

import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ContactDataService, ContactData } from '../../../shared/services/contact.service';

@Component({
  selector: 'app-full-table',
  templateUrl: './full-table.component.html',
  styleUrls: ['./full-table.component.css']
})
export class FullTableComponent implements OnInit {
  rows = [];
  constructor(private contactDataService: ContactDataService) {
    this.contactDataService.getAll().subscribe((data: any[]) => {
      // push our inital complete list
      this.rows = [...data, ...data, ...data, ...data, ...data, ...data, ...data, ...data];
    });
  }

  ngOnInit() {
  }

}
