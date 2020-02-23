import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapCardsParkingComponent } from './map-cards-parking.component';

describe('MapCardsParkingComponent', () => {
  let component: MapCardsParkingComponent;
  let fixture: ComponentFixture<MapCardsParkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapCardsParkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapCardsParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
