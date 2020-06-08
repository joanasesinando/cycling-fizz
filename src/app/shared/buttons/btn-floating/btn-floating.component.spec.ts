import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnFloatingComponent } from './btn-floating.component';

describe('BtnFloatingComponent', () => {
  let component: BtnFloatingComponent;
  let fixture: ComponentFixture<BtnFloatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnFloatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnFloatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
