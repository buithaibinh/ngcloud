import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

import * as _ from 'lodash';

export class Page {
    //The number of elements in the page
    size: number = 0;
    //The total number of elements
    totalElements: number = 0;
    //The total number of pages
    totalPages: number = 0;
    //The current page number
    pageNumber: number = 0;
}

export class PagedData<T> {
    data = new Array<T>();
    page = new Page();
}

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

    /**
     * A method that mocks a paged server response
     * @param page The selected page
     * @returns {any} An observable containing the contact data
     */
    public getResults(page: Page): Observable<PagedData<ContactData>> {
        return this.http
            .get('assets/data/contacts.json')
            .delay(500)
            .map(res => {
                let data = res.json();
                return this.getPagedData(page, data);
            })
            .catch((error: any) => {
                console.log(error);
                return Observable.of(error.json());
            });
    }

    private getPagedData(page: Page, data: ContactData[]): PagedData<ContactData> {
        let pagedData = new PagedData<ContactData>();
        page.totalElements = this.data.length;
        page.totalPages = page.totalElements / page.size;
        let start = page.pageNumber * page.size;
        let end = Math.min((start + page.size), page.totalElements);

        pagedData.data = data.slice(start, end);
        pagedData.page = page;
        return pagedData;
    }
}