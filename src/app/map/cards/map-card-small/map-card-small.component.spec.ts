import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapCardSmallComponent } from './map-card-small.component';

describe('MapCardsSmallComponent', () => {
  let component: MapCardSmallComponent;
  let fixture: ComponentFixture<MapCardSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapCardSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapCardSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
