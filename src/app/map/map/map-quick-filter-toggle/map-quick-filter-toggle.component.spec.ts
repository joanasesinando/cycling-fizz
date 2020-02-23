import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapQuickFilterToggleComponent } from './map-quick-filter-toggle.component';

describe('MapQuickFilterToggleComponent', () => {
  let component: MapQuickFilterToggleComponent;
  let fixture: ComponentFixture<MapQuickFilterToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapQuickFilterToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapQuickFilterToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
