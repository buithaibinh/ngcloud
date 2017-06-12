import { Component, OnInit, Input } from '@angular/core';

import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ContactDataService, ContactData, Page } from '../../../shared/services/contact.service';

import { IBusyConfig, BUSY_CONFIG_DEFAULTS } from 'angular2-busy';

const OPTIONS_TEMPLATE = `
  <div class="spinner">
  <div class="double-bounce1"></div>
  <div class="double-bounce2"></div>
</div>
`;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  options: IBusyConfig = Object.assign({}, BUSY_CONFIG_DEFAULTS);

  columns = [
    { name: 'Name', prop: 'name' },
    { name: 'Gender', prop: 'gender' },
    { name: 'Address', prop: 'address' },
    { name: 'Position', prop: 'position' },
  ];
  // @Input() loading: IBusyConfig;
  page = new Page();
  private rows = new Array<ContactData>();
  constructor(private contactDataService: ContactDataService) {

    this.page.pageNumber = 0;
    this.page.size = 10;
  }


  ngOnInit() {
    this.options.template = OPTIONS_TEMPLATE;
    this.setPage({ offset: 0 });
  }

  /**
  * Populate the table with new data based on the page number
  * @param page The page to select
  */
  setPage(pageInfo) {
    this.page.pageNumber = pageInfo.offset;
    this.options.busy = this.contactDataService.getResults(this.page).subscribe(pagedData => {
      this.page = pagedData.page;
      this.rows = pagedData.data;
    });
  }
}
