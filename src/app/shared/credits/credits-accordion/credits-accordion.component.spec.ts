import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsAccordionComponent } from './credits-accordion.component';

describe('CreditsAccordionComponent', () => {
  let component: CreditsAccordionComponent;
  let fixture: ComponentFixture<CreditsAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditsAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditsAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
