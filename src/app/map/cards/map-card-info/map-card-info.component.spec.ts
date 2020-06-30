import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapCardInfoComponent } from './map-card-info.component';

describe('MapCardsInfoComponent', () => {
  let component: MapCardInfoComponent;
  let fixture: ComponentFixture<MapCardInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapCardInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
