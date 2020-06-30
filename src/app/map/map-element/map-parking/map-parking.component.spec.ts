import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapParkingComponent } from './map-parking.component';

describe('MapCardsParkingComponent', () => {
  let component: MapParkingComponent;
  let fixture: ComponentFixture<MapParkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapParkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
