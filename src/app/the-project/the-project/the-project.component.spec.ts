import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheProjectComponent } from './the-project.component';

describe('TheProjectComponent', () => {
  let component: TheProjectComponent;
  let fixture: ComponentFixture<TheProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
