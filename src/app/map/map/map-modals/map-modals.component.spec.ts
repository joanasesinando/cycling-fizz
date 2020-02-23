import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapModalsComponent } from './map-modals.component';

describe('MapModalsComponent', () => {
  let component: MapModalsComponent;
  let fixture: ComponentFixture<MapModalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapModalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
