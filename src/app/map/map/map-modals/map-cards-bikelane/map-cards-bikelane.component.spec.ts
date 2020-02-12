import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapCardsBikelaneComponent } from './map-cards-bikelane.component';

describe('MapCardsBikelaneComponent', () => {
  let component: MapCardsBikelaneComponent;
  let fixture: ComponentFixture<MapCardsBikelaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapCardsBikelaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapCardsBikelaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
