import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FCardComponent } from './f-card.component';

describe('FCardComponent', () => {
  let component: FCardComponent;
  let fixture: ComponentFixture<FCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
