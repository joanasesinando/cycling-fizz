import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsItemComponent } from './credits-item.component';

describe('CreditsItemComponent', () => {
  let component: CreditsItemComponent;
  let fixture: ComponentFixture<CreditsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
