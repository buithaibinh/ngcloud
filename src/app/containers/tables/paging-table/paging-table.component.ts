import { Component, OnInit } from '@angular/core';

import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ContactDataService, ContactData, Page } from '../../../shared/services/contact.service';

@Component({
  selector: 'app-paging-table',
  templateUrl: './paging-table.component.html',
  styleUrls: ['./paging-table.component.css']
})
export class PagingTableComponent implements OnInit {
  page = new Page();
  rows = new Array<ContactData>();

  rowsServer = new Array<ContactData>();

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

    this.page.pageNumber = 0;
    this.page.size = 10;
  }

  ngOnInit() {
    this.setPage({ offset: 0 });
  }

  /**
   * Populate the table with new data based on the page number
   * @param page The page to select
   */
  setPage(pageInfo) {
    this.page.pageNumber = pageInfo.offset;
    this.contactDataService.getResults(this.page).subscribe(pagedData => {
      this.page = pagedData.page;
      this.rowsServer = pagedData.data;
    });
  }
}
