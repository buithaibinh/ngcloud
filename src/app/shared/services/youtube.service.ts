import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

import * as _ from 'lodash';


@Injectable()
export class YoutubeService {
    data: any[];

    constructor(public http: Http) {
    }
    getAll(): Observable<any[]> {
        let self = this;
        if (this.data) {
            return Observable.of(this.data);
        } else {
            return this.http
                .get('assets/data/videos.json')
                .map(res => {
                    let data = res.json();
                    self.data = data.items;
                    return self.data;
                })
                .catch((error: any) => {
                    console.log(error);
                    return Observable.of(error.json());
                });
        }
    }
}