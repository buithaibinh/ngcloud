import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinningTableComponent } from './pinning-table.component';

describe('PinningTableComponent', () => {
  let component: PinningTableComponent;
  let fixture: ComponentFixture<PinningTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinningTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinningTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
