import { Component, OnInit, ViewChild } from '@angular/core';

import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ContactDataService, ContactData } from '../../../shared/services/contact.service';

@Component({
  selector: 'app-selection-table',
  templateUrl: './selection-table.component.html',
  styleUrls: ['./selection-table.component.css']
})
export class SelectionTableComponent {

  columns = [
    { name: 'Name', prop: 'name' },
    { name: 'Company' },
    { name: 'Gender' }
  ];

  rows = [];
  chkSelected = [];
  singleRowSelected = [];
  mutilClickRowSelected = [];
  mutilRowSelected = [];

  private multi: boolean = false;
  constructor(private contactDataService: ContactDataService) {
    this.contactDataService.getAll().subscribe((data: any[]) => {
      // push our inital complete list
      this.rows = [...data.splice(0, 10)];
    });
  }

  onClickSelect({ selected }) {
    console.log('Select Event', selected, this.mutilRowSelected);

    this.mutilRowSelected.splice(0, this.mutilRowSelected.length);
    this.mutilRowSelected.push(...selected);
  }

  onMutilClickSelect({ selected }) {
    console.log('Select Event', selected, this.mutilClickRowSelected);

    this.mutilClickRowSelected.splice(0, this.mutilClickRowSelected.length);
    this.mutilClickRowSelected.push(...selected);
  }

  onSingleSelect({ selected }) {
    console.log('Select Event', selected, this.singleRowSelected);

    this.singleRowSelected.splice(0, this.singleRowSelected.length);
    this.singleRowSelected.push(...selected);
  }

  onChkSelect({ selected }) {
    console.log('Select Event', selected, this.chkSelected);

    this.chkSelected.splice(0, this.chkSelected.length);
    this.chkSelected.push(...selected);
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }
}
