import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapCardNotesComponent } from './map-card-notes.component';

describe('MapCardNotesComponent', () => {
  let component: MapCardNotesComponent;
  let fixture: ComponentFixture<MapCardNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapCardNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapCardNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
