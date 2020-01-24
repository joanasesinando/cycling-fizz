import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BCardComponent } from './b-card.component';

describe('BCardComponent', () => {
  let component: BCardComponent;
  let fixture: ComponentFixture<BCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
