import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeDotComponent } from './badge-dot.component';

describe('BadgeDotComponent', () => {
  let component: BadgeDotComponent;
  let fixture: ComponentFixture<BadgeDotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeDotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeDotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
