import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ag-cell-date',
    template: `
        <span style="color: red">{{ params.value }}</span>
    `
})

export class CellDateComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
    private params: any;

    agInit(params: any): void {
        this.params = params;
    }
}