import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapCardsStoreComponent } from './map-cards-store.component';

describe('MapCardsStoreComponent', () => {
  let component: MapCardsStoreComponent;
  let fixture: ComponentFixture<MapCardsStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapCardsStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapCardsStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
