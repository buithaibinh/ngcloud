import { Component } from '@angular/core';
import { ContactDataService, ContactData } from '../../../shared/services/contact.service';
import { ProjectDataService, ProjectData } from '../../../shared/services/project.service';
import { OrderDataService, OrderData } from '../../../shared/services/order.service';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.scss'],
})
export class BasicTableComponent {
  contacts = [];
  projects = [];
  orders = [];
  constructor(private contactDataService: ContactDataService,
    private projectDataService: ProjectDataService,
    private orderDataService: OrderDataService) {
    this.contactDataService.getAll(6).subscribe((data: any[]) => {
      this.contacts = data;
    });

    this.projectDataService.getAll(6).subscribe((data: any[]) => {
      this.projects = data;
    });

    this.orderDataService.getAll(6).subscribe((data: any[]) => {
      this.orders = data;
    });
  }
}
