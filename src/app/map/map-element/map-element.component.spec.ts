import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapElementComponent } from './map-element.component';

describe('MapElementComponent', () => {
  let component: MapElementComponent;
  let fixture: ComponentFixture<MapElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
