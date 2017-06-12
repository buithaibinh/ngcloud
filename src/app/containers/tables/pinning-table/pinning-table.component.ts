import { Component, OnInit } from '@angular/core';

import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ContactDataService, ContactData } from '../../../shared/services/contact.service';

@Component({
  selector: 'app-pinning-table',
  templateUrl: './pinning-table.component.html',
  styleUrls: ['./pinning-table.component.css']
})
export class PinningTableComponent implements OnInit {
  rows = [];
  constructor(private contactDataService: ContactDataService) {
    this.contactDataService.getAll().subscribe((data: any[]) => {
      this.rows = data;
    });
  }

  ngOnInit() {
  }
}
