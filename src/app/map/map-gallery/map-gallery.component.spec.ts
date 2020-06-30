import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapGalleryComponent } from './map-gallery.component';

describe('MapGalleryComponent', () => {
  let component: MapGalleryComponent;
  let fixture: ComponentFixture<MapGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
