import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCompleteRegistrationComponent } from './modal-complete-registration.component';

describe('ModalCompleteRegistrationComponent', () => {
  let component: ModalCompleteRegistrationComponent;
  let fixture: ComponentFixture<ModalCompleteRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCompleteRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCompleteRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
