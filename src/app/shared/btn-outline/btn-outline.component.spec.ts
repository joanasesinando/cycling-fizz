import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOutlineComponent } from './btn-outline.component';

describe('BtnOutlineComponent', () => {
  let component: BtnOutlineComponent;
  let fixture: ComponentFixture<BtnOutlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnOutlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
