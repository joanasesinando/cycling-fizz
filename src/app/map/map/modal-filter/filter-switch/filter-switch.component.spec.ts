import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSwitchComponent } from './filter-switch.component';

describe('FilterSwitchComponent', () => {
  let component: FilterSwitchComponent;
  let fixture: ComponentFixture<FilterSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
