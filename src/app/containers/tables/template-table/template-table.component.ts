import { Component, OnInit } from '@angular/core';

import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ContactDataService, ContactData } from '../../../shared/services/contact.service';

@Component({
  selector: 'app-template-table',
  templateUrl: './template-table.component.html',
  styleUrls: ['./template-table.component.css']
})
export class TemplateTableComponent implements OnInit {

  rows = [];
  constructor(private contactDataService: ContactDataService) {
    this.contactDataService.getAll(10).subscribe((data: any[]) => {
      // push our inital complete list
      this.rows = data;
    });
  }

  ngOnInit() {
  }

}
