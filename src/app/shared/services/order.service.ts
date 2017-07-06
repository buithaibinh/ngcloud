import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

import * as _ from 'lodash';

export interface OrderData {
    product: string;
    popularity: number;
    sale: number;
    invoice: string;
    amount: string;
    date: string;
    username: string;
    payment: string;
    orderId: string;
}

@Injectable()
export class OrderDataService {
    data: OrderData[];

    constructor(public http: Http) {
    }
    getAll(endIndex: number = 10): Observable<OrderData[]> {
        let self = this;
        if (this.data) {
            return Observable.of(this.data.slice(0, endIndex));
        } else {
            return this.http
                .get('assets/data/orders.json')
                .map(res => {
                    let data = res.json();
                    self.data = data;
                    return data.slice(0, endIndex);
                })
                .catch((error: any) => {
                    console.log(error);
                    return Observable.of(error.json());
                });
        }
    }
}