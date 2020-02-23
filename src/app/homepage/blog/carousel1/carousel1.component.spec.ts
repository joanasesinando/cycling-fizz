import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carousel1Component } from './carousel1.component';

describe('Carousel1Component', () => {
  let component: Carousel1Component;
  let fixture: ComponentFixture<Carousel1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carousel1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carousel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
