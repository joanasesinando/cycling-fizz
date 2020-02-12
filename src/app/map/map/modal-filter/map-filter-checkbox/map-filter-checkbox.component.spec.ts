import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapFilterCheckboxComponent } from './map-filter-checkbox.component';

describe('MapFilterCheckboxComponent', () => {
  let component: MapFilterCheckboxComponent;
  let fixture: ComponentFixture<MapFilterCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapFilterCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapFilterCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
