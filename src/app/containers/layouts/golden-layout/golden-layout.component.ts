import { Component, OnInit } from '@angular/core';

import { GoldenLayoutDirective, IGoldenLayoutRegist, IGoldenState } from '../../../shared/directives/golden-layout.directive';

@Component({
  selector: 'app-golden-layout',
  templateUrl: './golden-layout.component.html',
  styleUrls: ['./golden-layout.component.scss']
})
export class GoldenLayoutComponent implements OnInit {
  private compRegists: IGoldenLayoutRegist[] = [
    {
      compType: SunnyComponent,
      compName: 'Sunny',
    },
    {
      compType: RainyComponent,
      compName: 'Rainy',
    },
    {
      compType: FoggyComponent,
      compName: 'Foggy',
    },
  ];

  private config = {
    content: [{
      type: 'column',
      content: [
        {
          type: 'component',
          componentName: 'Sunny',
          componentState: { text: 'Component 1' }
        },
        {
          type: 'component',
          componentName: 'Rainy',
          componentState: { text: 'Component 2' }
        },
        {
          type: 'component',
          componentName: 'Foggy',
          componentState: { text: 'Component 3' }
        },
      ]
    }]
  };

  constructor() {
  }

  ngOnInit() {
  }

}

@Component({
  moduleId: module.id,
  selector: 'sunny-component',
  template: 'Component 1.',
})
export class SunnyComponent { }

@Component({
  moduleId: module.id,
  selector: 'rainy-component',
  template: 'Component 2.',
})
export class RainyComponent { }

@Component({
  moduleId: module.id,
  selector: 'foggy-component',
  template: 'Component 3.',
})
export class FoggyComponent { }