import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import { DragulaService } from 'ng2-dragula';
import { HomeLayoutState } from '../../core/store';

import { HomeLayoutActions, getDashboardEditMode$ } from '../../core/store/home-layout';

// example services
import { ContactDataService, ContactData } from '../../shared/services/contact.service';
import { ProjectDataService, ProjectData } from '../../shared/services/project.service';

@Component({
    moduleId: module.id,
    selector: 'ng-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.scss']
})

export class DashboardComponent implements OnInit, OnDestroy {
    private dashboardEditMode: boolean;
    private mapOptions: any = {
        lat: 51.678418,
        lng: 7.809007,
        zoom: 2,
        scrollwheel: false
    }
    private initState: any = {
        chart1: true,
        chart2: true,
        chart3: true,
    };
    private displayOption: any = {};

    private tmpDisplayOption: any = {};
    contacts: ContactData[] = [];
    projects: ProjectData[] = [];

    constructor(private store: Store<HomeLayoutState>,
        private dragulaService: DragulaService,
        private contactDataService: ContactDataService,
        private projectService: ProjectDataService,
        ) {
        dragulaService.setOptions('first-bag', {
            moves: function (el: any, container: any, handle: any): any {
                return handle.classList[0] === 'handle';
            }
        });

        this.contactDataService.getAll().subscribe(data =>{
            this.contacts = data;
        });

        this.projectService.getAll().subscribe(data =>{
            this.projects = data;
        });
    }

    ngOnDestroy() {
        this.dragulaService.destroy('first-bag');
    }
    ngOnInit() {
        let self = this;
        Object.assign(this.tmpDisplayOption, self.initState);
        self.store.let(getDashboardEditMode$).subscribe((val: any) => {
            self.dashboardEditMode = val;
            if (self.dashboardEditMode) {
                Object.assign(self.displayOption, self.initState);
            } else {
                Object.assign(self.displayOption, self.tmpDisplayOption);
            }
        })
    }

    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public lineChartOptions: any = {
        responsive: true
    };
    public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;

    public barChartData: any[] = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    ];

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

    public randomize(): void {
        // Only Change 3 values
        let data = [
            Math.round(Math.random() * 100),
            59,
            80,
            (Math.random() * 100),
            56,
            (Math.random() * 100),
            40];
        let clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
    }
    // lineChart
    public lineChartData: Array<any> = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
    public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public lineChartType: string = 'line';
    public pieChartType: string = 'pie';

    // Pie
    public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
    public pieChartData: number[] = [300, 500, 100];

    public randomizeType(): void {
        this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
        this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
    }
}