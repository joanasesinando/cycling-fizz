import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapCommentsComponent } from './map-comments.component';

describe('MapCommentsComponent', () => {
  let component: MapCommentsComponent;
  let fixture: ComponentFixture<MapCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
