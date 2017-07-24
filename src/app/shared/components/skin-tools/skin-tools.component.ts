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
    currentTheme = 1 | 2 | 3 | 4;
    colors: any = [
        'red', 'pink', 'purple', 'indigo', 'blue', 'cyan', 'teal', 'green', 'lime', 'yellow', 'amber', 'orange', 'brown', 'grey'
    ];
    themes: any[] = [
        1, 2, 3, 4
    ];
    boxed: boolean = false;
    constructor(
        private appLayoutActions: AppLayoutActions,
        private store: Store<NgCloudAppState>,
    ) { }

    ngOnInit() {
        this.store.let(getAppTheme$).subscribe(theme => {
            console.log('theme changed = ', theme);
            this.currentTheme = theme;
        });
    }

    changeTheme(theme: number) {
        return this.store.dispatch(this.appLayoutActions.changeTheme(theme));
    }

    boxedLayout() {
        return this.store.dispatch(this.appLayoutActions.toggleLayout());
    }
    changeRtl(){
        return this.store.dispatch(this.appLayoutActions.changeDir());
    }

    resetDefault(){
        this.boxed = false;
        this.store.dispatch(this.appLayoutActions.expandLayout());
        this.store.dispatch(this.appLayoutActions.changeTheme(1));
    }
}