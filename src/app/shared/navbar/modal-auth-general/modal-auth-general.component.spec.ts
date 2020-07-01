import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAuthGeneralComponent } from './modal-auth-general.component';

describe('ModalLoginRegisterComponent', () => {
  let component: ModalAuthGeneralComponent;
  let fixture: ComponentFixture<ModalAuthGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAuthGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAuthGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
