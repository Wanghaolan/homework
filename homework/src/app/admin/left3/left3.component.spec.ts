import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Left3Component } from './left3.component';

describe('Left3Component', () => {
  let component: Left3Component;
  let fixture: ComponentFixture<Left3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Left3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Left3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
