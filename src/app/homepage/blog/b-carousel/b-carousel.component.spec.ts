import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BCarouselComponent } from './b-carousel.component';

describe('BCarouselComponent', () => {
  let component: BCarouselComponent;
  let fixture: ComponentFixture<BCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
