import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs/Rx';
import { NgCloudAppState, } from '../../../core/store';
import { AppLayoutActions, getAppTheme$, getSkins$ } from '../../../core/store/app-layout';

@Component({
    selector: 'skin-tools',
    templateUrl: 'skin-tools.component.html'
})

export class SkinToolsComponent implements OnInit {
    isOpenSkinTool: boolean = false;
    theme: number;
    colors: any = [
        'red', 'pink', 'purple', 'indigo', 'blue', 'cyan', 'teal', 'green', 'lime', 'yellow', 'amber', 'orange', 'brown', 'grey'
    ];
    constructor(
        private appLayoutActions: AppLayoutActions,
        private store: Store<NgCloudAppState>,
    ) { }

    ngOnInit() {
        this.store.let(getAppTheme$).subscribe(theme => {
            console.log('theme changed = ', theme);
            this.theme = theme;
        });
    }

    changeTheme(theme: number) {
        return this.store.dispatch(this.appLayoutActions.changeTheme(theme));
    }
}