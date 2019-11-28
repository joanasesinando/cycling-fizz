import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Svg404Component } from './svg404.component';

describe('Svg404Component', () => {
  let component: Svg404Component;
  let fixture: ComponentFixture<Svg404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Svg404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Svg404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
