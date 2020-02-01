import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgEmailComponent } from './img-email.component';

describe('ImgEmailComponent', () => {
  let component: ImgEmailComponent;
  let fixture: ComponentFixture<ImgEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
