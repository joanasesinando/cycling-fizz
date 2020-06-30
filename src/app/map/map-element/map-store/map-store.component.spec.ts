import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapStoreComponent } from './map-store.component';

describe('MapCardsStoreComponent', () => {
  let component: MapStoreComponent;
  let fixture: ComponentFixture<MapStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
