import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

import * as _ from 'lodash';

export interface ContactData {
    name: string;
    tel: string;
    email: string;
    photo?: string;
}

@Injectable()
export class ContactDataService {
    data: ContactData[];

    constructor(public http: Http) {
    }
    getAll(startIndex: number = 0, endIndex: number = 10): Observable<ContactData[]> {
        let self = this;
        if (this.data) {
            return Observable.of(this.data.slice(startIndex, endIndex));
        } else {
            return this.http
                .get('assets/data/contact.json')
                .map(res => {
                    let data = res.json();
                    self.data = data;
                    return data.slice(startIndex, endIndex);
                })
                .catch((error: any) => {
                    console.log(error);
                    return Observable.of(error.json());
                });
        }
    }
}