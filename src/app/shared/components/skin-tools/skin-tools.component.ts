import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { NgCloudAppState } from '../../../core/store';

@Component({
    selector: 'skin-tools',
    templateUrl: 'skin-tools.component.html'
})

export class SkinToolsComponent implements OnInit {
    isOpenSkinTool: boolean = false;
    theme: string = 'light';
    colors: any = [
        'red', 'pink', 'purple', 'indigo', 'blue', 'cyan', 'teal', 'green', 'lime', 'yellow', 'amber', 'orange', 'brown', 'grey'
    ];
    constructor(
        private store: Store<NgCloudAppState>,
    ) { }

    ngOnInit() { }
}