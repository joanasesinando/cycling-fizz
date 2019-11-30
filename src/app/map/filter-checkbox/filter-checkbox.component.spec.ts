import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCheckboxComponent } from './filter-checkbox.component';

describe('FilterCheckboxComponent', () => {
  let component: FilterCheckboxComponent;
  let fixture: ComponentFixture<FilterCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
