import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapFilterToggleComponent } from './map-filter-toggle.component';

describe('MapFilterToggleComponent', () => {
  let component: MapFilterToggleComponent;
  let fixture: ComponentFixture<MapFilterToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapFilterToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapFilterToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
