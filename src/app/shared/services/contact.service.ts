import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

import * as _ from 'lodash';

export interface ContactData {
    name?: string;
    tel?: string;
    email?: string;
    photo?: string;
    position?: string;
    office?: string;
    startDate?: string;
    salary?: string;
    latlong?: string;
    address?: string;
    birthday?: string;
    profile?: string;
    company?: string;
}

@Injectable()
export class ContactDataService {
    data: ContactData[];

    constructor(public http: Http) {
    }
    getAll(endIndex: number = 100): Observable<ContactData[]> {
        let self = this;
        if (this.data) {
            return Observable.of(this.data.slice(0, endIndex));
        } else {
            return this.http
                .get('assets/data/contacts.json')
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