import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Rx';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ContactDataService, ContactData, Page } from '../../../shared/services/contact.service';

@Component({
  selector: 'app-paging-table',
  templateUrl: './paging-table.component.html',
  styleUrls: ['./paging-table.component.css']
})
export class PagingTableComponent {
  
  rows = new Array<ContactData>();
  columns = [
    { name: 'Name', prop: 'name' },
    { name: 'Gender', prop: 'gender' },
    { name: 'Address', prop: 'address' },
    { name: 'Position', prop: 'position' },
  ];

  constructor(private contactDataService: ContactDataService) {
    this.contactDataService.getAll().subscribe((data: any[]) => {
      this.rows = data;
    });
  }
}
