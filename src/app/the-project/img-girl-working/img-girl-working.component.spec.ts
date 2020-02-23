import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgGirlWorkingComponent } from './img-girl-working.component';

describe('ImgGirlWorkingComponent', () => {
  let component: ImgGirlWorkingComponent;
  let fixture: ComponentFixture<ImgGirlWorkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgGirlWorkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgGirlWorkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
