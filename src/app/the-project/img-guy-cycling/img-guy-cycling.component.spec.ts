import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgGuyCyclingComponent } from './img-guy-cycling.component';

describe('ImgGuyCyclingComponent', () => {
  let component: ImgGuyCyclingComponent;
  let fixture: ComponentFixture<ImgGuyCyclingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgGuyCyclingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgGuyCyclingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
