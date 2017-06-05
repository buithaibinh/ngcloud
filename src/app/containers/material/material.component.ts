import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, Params } from '@angular/router';

interface IBreadcrumb {
    label: string;
    params: Params;
    url: string;
}

@Component({
    moduleId: module.id,
    selector: 'app-material',
    templateUrl: 'material.component.html',
    styleUrls: ['material.component.scss']
})

export class MaterialComponent implements OnInit {
    private breadcrumb: IBreadcrumb;
    constructor(private activatedRoute: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit() {
        //subscribe to the NavigationEnd event
        this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
            //set breadcrumbs
            let root: ActivatedRoute = this.activatedRoute;
            this.breadcrumb = this.getBreadcrumb(root);
        });
    }
    private getBreadcrumb(route: ActivatedRoute): IBreadcrumb {
        const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";

        //get the child routes
        let children: ActivatedRoute[] = route.children;

        //return if there are no more children
        if (children.length === 0) {
            return null;
        }
        let child = children[0];
        let routeURL: string = child.snapshot.url.map(segment => segment.path).join("/");
        //append route URL to URL
        let url = `/${routeURL}`;
        let breadcrumb: IBreadcrumb = {
            label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
            params: child.snapshot.params,
            url: url
        };
        return breadcrumb;
    }
}