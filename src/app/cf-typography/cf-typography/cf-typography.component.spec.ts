import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfTypographyComponent } from './cf-typography.component';

describe('CfTypographyComponent', () => {
  let component: CfTypographyComponent;
  let fixture: ComponentFixture<CfTypographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfTypographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfTypographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
