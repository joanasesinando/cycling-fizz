import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carousel3Component } from './carousel3.component';

describe('Carousel3Component', () => {
  let component: Carousel3Component;
  let fixture: ComponentFixture<Carousel3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carousel3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carousel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
