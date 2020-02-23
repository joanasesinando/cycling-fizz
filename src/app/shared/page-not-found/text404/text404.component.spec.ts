import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text404Component } from './text404.component';

describe('Text404Component', () => {
  let component: Text404Component;
  let fixture: ComponentFixture<Text404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
