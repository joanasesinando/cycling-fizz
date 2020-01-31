import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgIdeaComponent } from './img-idea.component';

describe('ImgIdeaComponent', () => {
  let component: ImgIdeaComponent;
  let fixture: ComponentFixture<ImgIdeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgIdeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
