import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverComponent } from './cover.component';

describe('IntroComponent', () => {
  let component: CoverComponent;
  let fixture: ComponentFixture<CoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
