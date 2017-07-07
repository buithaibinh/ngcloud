import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  invoiceItems: any = [{
    'title': 'Amazon Simple Storage Service',
    'subtitle': 'Standard Storage 300GB',
    'price': 427.04,
    'quantity': 1
  }, {
    'title': 'AWS Data Transfer',
    'subtitle': 'Total 120GB data transfer',
    'price': 80.89,
    'quantity': 1
  }, {
    'title': 'Amazon Route 53',
    'subtitle': '2 year domain name purchase',
    'price': 336.72,
    'quantity': 2
  }, {
    'title': 'Amazon Elastic Compute Cloud',
    'subtitle': '2 Elastic Compute Cloud',
    'price': 42.21,
    'quantity': 1
  }];

  invoiceTotals: any = [{
    'subtotal': this.getSubTotal(),
    'tax': this.getCalculatedTax(),
    'discount': 0.00,
    'total': 0
  }];

  getSubTotal() {
    let total = 0.00;
    for (let i = 1; i < this.invoiceItems.length; i++) {
      total += (this.invoiceItems[i].price * this.invoiceItems[i].quantity);
    }
    return total;
  }

  getCalculatedTax() {
    return ((15 * this.getSubTotal()) / 100);
  }

  getTotal() {
    return (this.getSubTotal() + this.getCalculatedTax());
  }
  constructor() { }

  ngOnInit() {
  }
}
