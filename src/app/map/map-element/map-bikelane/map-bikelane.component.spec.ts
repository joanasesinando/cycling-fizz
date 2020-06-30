import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapBikelaneComponent } from './map-bikelane.component';

describe('MapCardsBikelaneComponent', () => {
  let component: MapBikelaneComponent;
  let fixture: ComponentFixture<MapBikelaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapBikelaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapBikelaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
