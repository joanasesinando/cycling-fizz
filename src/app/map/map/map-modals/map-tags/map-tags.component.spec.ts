import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapTagsComponent } from './map-tags.component';

describe('MapTagsComponent', () => {
  let component: MapTagsComponent;
  let fixture: ComponentFixture<MapTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
