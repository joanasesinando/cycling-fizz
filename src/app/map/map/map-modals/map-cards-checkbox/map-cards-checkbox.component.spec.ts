import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapCardsCheckboxComponent } from './map-cards-checkbox.component';

describe('MapCardsCheckboxComponent', () => {
  let component: MapCardsCheckboxComponent;
  let fixture: ComponentFixture<MapCardsCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapCardsCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapCardsCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
