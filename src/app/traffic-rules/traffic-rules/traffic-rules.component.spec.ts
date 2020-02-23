import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficRulesComponent } from './traffic-rules.component';

describe('TrafficRulesComponent', () => {
  let component: TrafficRulesComponent;
  let fixture: ComponentFixture<TrafficRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrafficRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
